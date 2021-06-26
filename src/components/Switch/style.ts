import styled from 'styled-components'

type SwitchProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  state?: boolean
}

export const SwitchContainer = styled.div<SwitchProps>`
  position: absolute;
  right: ${props => (props.state ? '10' : '50')}px;
  bottom: 10px;
  display: flex;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  align-items: center;
  justify-content: ${props => (props.state ? 'flex-start' : 'flex-end')};
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.strongTextColor};
  transition: all 0.5s ease;
`

export const InsideIndicator = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  position: relative;
  background: ${({ theme }) => theme.strongTextColor};
  transition: all 0.5s ease;
`
