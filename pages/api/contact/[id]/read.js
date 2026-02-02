import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === 'PATCH') {
    try {
      const contact = await prisma.contact.update({
        where: { id },
        data: { read: true },
      });

      if (!contact) {
        return res.status(404).json({ success: false, message: 'Contact not found' });
      }

      return res.status(200).json({ success: true, data: contact });
    } catch (error) {
      console.error('Contact markAsRead error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['PATCH']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
