import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return res.status(404).json({ ok: false, error: 'User not found' });
  }

  res.json(user);
});

router.post('/', async (req, res) => {
  try {
    const { name, email, jobTitle } = req.body;

    if (!name || !email || !jobTitle) {
      return res.status(400).json({ ok: false, error: 'Name and email are required' });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        jobTitleId: jobTitle,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Internal Server Error', hint: error });
  }
});


export default router;
