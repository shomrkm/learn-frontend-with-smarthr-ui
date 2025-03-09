import { Base, Center, Table, Td, Th } from 'smarthr-ui';

import './App.css'
import { CollapsibleContainer } from './components/CollapsibleContainer';
import { useUsers } from './api/useUsers';


function App() {

  const { data: users } = useUsers()

  return (
    <Base overflow='auto' style={{ backgroundColor: '#D6D3D0', padding: '2rem' }}>
      <CollapsibleContainer height='200px' toggleAreaColor='#D6D3D0'>
        <Center>
          <Base overflow={'auto'}>
            <Table width='500px' style={{ width: '500px' }}>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>メールアドレス</Th>
                  <Th>氏名</Th>
                </tr>
              </thead>
              <tbody>
                {users?.map(user => (
                  <tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.name}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Base>
        </Center>
      </CollapsibleContainer>
    </Base>
  )
}

export default App;
