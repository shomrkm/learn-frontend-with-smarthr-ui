import { Base, Cluster, Heading, Stack, Text } from 'smarthr-ui'
import styled from 'styled-components';

export const Layouts = () => {
  return (
    <Stack gap={1.5}>
      <Heading>SmartHR UI を使ったレイアウト</Heading>
      <Text>Stack, Cluster を使ったレイアウト例</Text>
      <Stack>
        <Text weight="bold">横並び</Text>
        <GrayBase>
          <Cluster>
            <Text>テスト1</Text>
            <Text>テスト2</Text>
            <Text>テスト3</Text>
          </Cluster>
        </GrayBase>
      </Stack>
      <Stack>
        <Text weight="bold">横並び(右寄せ)</Text>
        <GrayBase>
          <Cluster>
            <Text>テスト1</Text>
            <Text>テスト2</Text>
            <RightAlignText>テスト3</RightAlignText>
          </Cluster>
        </GrayBase>
      </Stack>
    </Stack>
  )
}

const GrayBase = styled(Base)`
  padding: ${({ theme }) => theme.space(2)};
  border-radius : ${({ theme }) => theme.radius.m};
`

const RightAlignText = styled(Text)`
  margin-left: auto
`