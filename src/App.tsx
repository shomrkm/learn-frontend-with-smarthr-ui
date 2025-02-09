import { Cluster, Heading, Loader, PageHeading, Stack, Text } from 'smarthr-ui';
import styled from 'styled-components';

import { useUsers } from './api/useUsers';
import './App.css'

function App() {
  const { data } = useUsers();

  if (!data) {
    return <Loader />
  }

  return (
    <Stack>
      <PageHeading>ユーザー一覧</PageHeading>
      <StyledStack gap={0.5} align='center'>
        {data.map((user) => (
          <Cluster key={user.id} align='center'>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </Cluster>
        ))}
      </StyledStack>
    </Stack>
  )
}

const StyledStack = styled(Stack)`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`

export default App;
