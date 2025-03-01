import { FormControl, Select } from 'smarthr-ui';
import { useJobTitles } from '../api/useJobTitles';

export const JobTitleSelect = () => {
  const { data: jobTitles } = useJobTitles();

  return (
    <FormControl title="Job Title">
      <Select 
        name='job_title' 
        onClick={(e) => e.preventDefault()} 
        options={jobTitles?.map(jb => ({
          value: jb.id.toString(),
          label: jb.title,
        })) ?? []}
      />
    </FormControl>
  );
};
