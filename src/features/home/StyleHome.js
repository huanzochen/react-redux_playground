import styled from 'styled-components'
import { color } from '../../utils/color'

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  width: 80vh;

  & > a {
    padding-right: 10px;
  }
`

export const DynamicPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 20vh;
  background: ${color.primary};
  border-radius: 3px;
  font-size: 20px;

  padding: 10px;

  & > a {
    flex-basis: 10%;
    margin-left: 1px;
    margin-bottom: 1px;
  }
`

export const StaticPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 40vh;
  font-size: 20px;
  background: ${color.third};
  border-radius: 3px;

  padding: 10px;

  & > a {
    flex-basis: 10%;
    margin-left: 1px;
    margin-bottom: 1px;
  }
`
