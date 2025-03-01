import express from 'express'
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/users';
import jobTitleRoutes from './routes/jobTitles';

const app = express()

app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '../images')));

app.use('/users', userRoutes);
app.use('/job_titles', jobTitleRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
