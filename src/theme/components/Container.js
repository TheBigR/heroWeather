import styled from 'styled-components'

export default styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`
