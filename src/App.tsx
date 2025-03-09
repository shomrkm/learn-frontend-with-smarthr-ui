import { ComponentProps, ReactNode, useState } from 'react';
import { Button, FormControl, Input, ResponseMessage, Select, Stack } from 'smarthr-ui';

import './App.css'
import { useAddUser } from './api/useAddUser';
import { useJobTitles } from './api/useJobTitles';
import { CollapsibleContainer } from './components/CollapsibleContainer';

type Message = {
  type: ComponentProps<typeof ResponseMessage>['type'];
  message: ReactNode;
}

function App() {
  const [message, setMessage] = useState<Message>();

  const { trigger: addUser, isMutating } = useAddUser({
    options: {
      onSuccess: () => setMessage({type: 'success', message: 'User added successfully'}),
      onError: () => setMessage({type: 'error', message: 'Failed to add user'}),
    }
  });


  const { data: jobTitles } = useJobTitles();
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const jobTitle = formData.get('job_title')
    await addUser({ name, email, jobTitle: Number(jobTitle) });
  };

  return (
    <CollapsibleContainer height='200px' toggleAreaColor='#D6D3D0'>
      <form onSubmit={onSubmit} style={{ backgroundColor: '#D6D3D0', padding: '1rem' }}>
        <Stack align='center' gap={2}>
          <Stack align='start'>
            <FormControl title="Name" statusLabelProps={{type: 'red', children: '必須'}}>
              <Input name='name' type='text' required onClick={(e) => e.preventDefault()} />
            </FormControl>
            <FormControl title="Email" >
              <Input name='email' type='email' onClick={(e) => e.preventDefault()} />
            </FormControl>
            <FormControl title="Job Title">
              <Select name='job_title' onClick={(e) => e.preventDefault()} options={jobTitles?.map(jb=>({
                value: jb.id.toString(),
                label: jb.title,
              })) ?? [] as { value: string; label: string }[]}
            />
            </FormControl>
          </Stack>
          <Button type='submit' variant="primary" disabled={isMutating}>Submit</Button>
          { message && <ResponseMessage type={message.type}>{message.message}</ResponseMessage> }
        </Stack>
      </form>
    </CollapsibleContainer>
  )
}

export default App;
