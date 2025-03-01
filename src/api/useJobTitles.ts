import useSWR from 'swr';
import { JobTitle } from '../types/jobTitle';

const BASE_URL = import.meta.env.VITE_API_URL;

const fetcher = async (url: string): Promise<JobTitle[]> => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data: JobTitle[] = await response.json();
  return data;
};

export const useJobTitles = () => {
  return useSWR<JobTitle[]>('/job_titles', fetcher);
};
