import styled from 'styled-components'

export default styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
  flex-direction: column;
  width: 10vw;
  height: 17vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
`
