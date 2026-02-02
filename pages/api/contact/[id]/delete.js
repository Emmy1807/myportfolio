import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === 'DELETE') {
    try {
      const contact = await prisma.contact.delete({ where: { id } });

      if (!contact) {
        return res.status(404).json({ success: false, message: 'Contact not found' });
      }

      return res.status(200).json({ success: true, message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Contact delete error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['DELETE']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
