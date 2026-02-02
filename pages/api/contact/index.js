import prisma from '../../../lib/prisma';
import sendMail from '../../../lib/mailer';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Please provide name, email, and message',
        });
      }

      const contact = await prisma.contact.create({
        data: { name, email, message },
      });

      try {
        await sendMail({ name, email, message });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails - message is still saved
      }

      return res.status(201).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        data: contact,
      });
    } catch (error) {
      console.error('Contact POST error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'GET') {
    try {
      const contacts = await prisma.contact.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      console.error('Contact GET error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
