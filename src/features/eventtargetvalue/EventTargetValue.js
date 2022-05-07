import React, {
  // useEffect,
  useState,
} from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 30px 5px 5px;
`

function EventTargetValue() {
  const [checkData, setCheckData] = useState(true)
  console.log('checkData= ' + checkData + ' type of checkData= ' + typeof checkData)
  console.log(checkData === 'true')

  const onChange = (event) => {
    setCheckData(event.target.value)
  }

  const types = [true, 'Javascript', 'Shell', 'Python', 'Powershell', 'HTML', 'CSS']

  let content
  content = types.map((data) => (
    <Label key={data} aria-checked={checkData === data ? true : false}>
      <input
        type="radio"
        name="language"
        value={data === true ? true : data}
        hidden="hidden"
      ></input>
      <span>{data === true ? 'All' : data}</span>
    </Label>
  ))

  return (
    <>
      <div>
        the result will write in console.log <br></br>
        look at console.log() for more details.
      </div>
      <div onChange={onChange}>{content}</div>
      <div>結論: event.target.value 本身是 string , 不會是 Boolean, 又被 js 的自動轉型搞一回</div>
    </>
  )
}

export default EventTargetValue
