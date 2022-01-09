import styled from 'styled-components'
import { color } from '../../utils/color'

import Image from './Image'
import { images } from './mockData'

const StyledLazyLoad = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

function LazyLoad() {
  console.log(images)

  let content

  content = images.map((image) => {
    return (
      <Image
        key={image.id}
        src={image.download_url}
        height={image.height}
        width={image.width}
      ></Image>
    )
  })

  return (
    <StyledLazyLoad>
      <h3>Lazy Load Images</h3>
      <section>{content}</section>
    </StyledLazyLoad>
  )
}

export default LazyLoad

//ref: https://stackblitz.com/edit/react-o9jbva?file=src%2FimageRenderer.scss
//ref2: https://betterprogramming.pub/lazy-loading-images-with-intersection-observer-in-react-ad6135f1ca59
