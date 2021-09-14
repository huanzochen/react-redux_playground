import styled from 'styled-components'
import { color } from '../../utils/color'

import Image from './Image'
import { images } from './mockData'

function LazyLoad() {
  console.log(images)

  let content

  content = images.map(image => {
    return (
      <Image
        key={image.id}
        src={image.download_url}
        height={image.height}
        width={image.width}
      >
      </Image>
    )
  })
    
  return (
    <div>
      <h3>Lazy Load Images</h3>
      <section>
        {content}
      </section>
    </div>
  )

}


export default LazyLoad