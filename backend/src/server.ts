import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';
import path from 'path';

const app = express()
const prisma = new PrismaClient()

app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '../images')));

app.get('/users', async (_, res) => {
  const products = await prisma.user.findMany();
  res.json(products);
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return res.status(404).json({ ok: false, error: 'User not found' });
  }

  res.json(user);
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
