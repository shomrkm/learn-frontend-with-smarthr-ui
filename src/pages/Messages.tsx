import { Base, BaseColumn, Heading, InformationPanel, ResponseMessage, Stack, Text } from 'smarthr-ui'
import styled from 'styled-components'

export const Messages = () => {
  return (
    <Stack gap={1.5}>
      <Heading>よく使うメッセージの出し方</Heading>
      <Stack gap={1.5}>
        <Text weight="bold">BaseColumn + ResponseMessage</Text>
        <StyledBase>
          <Stack>
            <BaseColumn>
              <ResponseMessage type="info" >ここに情報を表示します。</ResponseMessage>
            </BaseColumn>
            <BaseColumn>
              <ResponseMessage type="warning" >ここに警告を表示します。</ResponseMessage>
            </BaseColumn>
            <StyledBaseColumn>
              <ResponseMessage type="warning" >横幅を固定した警告を表示します。</ResponseMessage>
            </StyledBaseColumn>
          </Stack>
        </StyledBase>
        <Text weight="bold">InformationPanel</Text>
        <StyledBase>
          <Stack>
            <InformationPanel type="info" title="情報" >
              ここに情報を表示します。
            </InformationPanel>
            <InformationPanel type="warning" title="警告" >
              ここに警告を表示します。
            </InformationPanel>
          </Stack>
        </StyledBase>
      </Stack>
    </Stack>
  )
}

const StyledBase = styled(Base)`
  padding: ${({ theme }) => theme.space(2)};
  border-radius : ${({ theme }) => theme.radius.m};
`

const StyledBaseColumn = styled(BaseColumn)`
  width: 400px;
`