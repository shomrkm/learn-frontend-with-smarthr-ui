import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (_, res) => {
  const jobTitles = await prisma.jobTitle.findMany();
  res.json(jobTitles);
});

export default router;
