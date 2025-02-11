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
  const { name, email } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.json(user);
});


export default router;
