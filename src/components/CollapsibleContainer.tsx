import { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { Button, FaAngleDownIcon, FaAngleUpIcon  } from 'smarthr-ui'
import { rgba } from 'polished'

export type Props = {
  /** 折りたたまれた状態での最大の高さ */
  height: string
  /** 表示するコンテンツ */
  children: ReactNode
  /** トグルエリアのカスタム色 */
  toggleAreaColor?: string
  /** すべて表示/折りたたむボタンのカスタムテキスト */
  buttonLabels?: {
    expand: string
    collapse: string
  }
  /** 初期状態で展開するかどうか */
  defaultExpanded?: boolean
  /** すべて表示/折りたたむ状態が変更された時のコールバック */
  onExpandChange?: (isExpanded: boolean) => void
}

const defaultButtonLabels = {
  expand: 'すべて表示',
  collapse: '折りたたむ'
}

const DEFAULT_COLOR = '#D6D3D0'

export const CollapsibleContainer: FC<Props> = ({
  height,
  children,
  toggleAreaColor = DEFAULT_COLOR,
  buttonLabels = defaultButtonLabels,
  defaultExpanded = false,
  onExpandChange
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const toggleExpand = () => {
    const newState = !isExpanded
    setIsExpanded(newState)
    onExpandChange?.(newState)
  }

  return (
    <Container height={height} isExpanded={isExpanded}>
      <ContentWrapper isExpanded={isExpanded}>
        {children}
      </ContentWrapper>
      <ButtonContainer color={toggleAreaColor}>
        <Button
          variant="secondary"
          size="s"
          onClick={() => { toggleExpand() }}
          prefix={isExpanded ? <FaAngleUpIcon /> : <FaAngleDownIcon />}
          >
          {isExpanded ? buttonLabels.collapse : buttonLabels.expand}
        </Button>
      </ButtonContainer>
      <GradientOverlay isExpanded={isExpanded} color={toggleAreaColor} /> <ClickBlocker isExpanded={isExpanded} />
    </Container>
  )
}

const Container = styled.div<{ height: string; isExpanded: boolean }>`
  position: relative;
  height: ${({ isExpanded, height }) => (isExpanded ? 'auto' : height)};
  overflow: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
`

const ContentWrapper = styled.div<{ isExpanded: boolean }>`
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '3rem' : '0')};
  position: relative;
  background-color: inherit;
`

const GradientOverlay = styled.div<{ isExpanded: boolean, color: string}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(isExpanded) => (isExpanded ? '3rem' : '4.5rem')};
  background: ${({ isExpanded, color }) =>
    isExpanded
      ? color
      : `linear-gradient(
          to bottom,
          ${rgba(color, 0)} 0%,
          ${rgba(color, 0.6)} 30%,
          ${color} 100%
        )`};
  pointer-events: none;
  z-index: 1;
`

const ClickBlocker = styled.div<{ isExpanded: boolean }>`
  display: ${({ isExpanded }) => (isExpanded ? 'none' : 'block')};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: 2;
`

const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 0.5rem 0;
  text-align: center;
  pointer-events: none;
  background-color: 'inherit';

  /* ボタン自体のポインターイベントを有効にする */
  & > button {
    pointer-events: auto;
  }
`
