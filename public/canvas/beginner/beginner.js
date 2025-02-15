// debug
console.log('window.innerWidth:', window.innerWidth, 'window.innerHeight:', window.innerHeight)
console.log('document.documentElement.clientWidth:', document.documentElement.clientWidth,
  '\ndocument.documentElement.clientHeight: ', document.documentElement.clientHeight)

const canvas = document.querySelector('canvas')
const globalWidth = document.documentElement.clientWidth
const globalHeight = document.documentElement.clientHeight
canvas.width = globalWidth
canvas.height = globalHeight

console.log('canvas.width:', canvas.width, '\n canvas.height:', canvas.height)

const c = canvas.getContext('2d')

// Square

// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(0,255,0,0.5)'
// c.fillRect(250, 140, 100, 100)
// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(400, 100, 100, 100)
// c.fillRect(300, 300, 100, 100)

const genStartInBoundary = (boundary, length) => {
  let start
  let end

  const offset = 20
  do {
    start = Math.random() * boundary
    end = start + length
  } while ((end > boundary - offset) || (start < offset))

  return start
}

for (let i = 0; i < 20; i++) {
  const redColor = Math.random() * 255
  const greenColor = Math.random() * 255
  const blueColor = Math.random() * 255

  const width = 100
  const height = 100

  const xStart = genStartInBoundary(globalWidth, width)
  const yStart = genStartInBoundary(globalHeight, height)

  c.beginPath()
  c.fillStyle = `rgba(${redColor},${greenColor},${blueColor})`
  c.fillRect(xStart, yStart, width, height)
}

// Line
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = '#fa34a3'
// c.stroke()

const gen2DStartAndEndInBound = (boundaryX, boundaryY, length) => {
  const offset = 20
  let xStart, yStart, xEnd, yEnd

  const checkOutOfBOund = () => {
    return (
      xStart < offset || xStart > boundaryX - offset ||
      xEnd < offset || xEnd > boundaryX - offset ||
      yStart < offset || yStart > boundaryY - offset ||
      yEnd < offset || yEnd > boundaryY - offset
    )
  }

  do {
    xStart = Math.random() * boundaryX
    yStart = Math.random() * boundaryY
    const angleInDegrees = Math.random() * 360;
    const angleInRadians = angleInDegrees * (Math.PI / 180);
    xEnd = xStart + length * Math.cos(angleInRadians)
    yEnd = yStart + length * Math.sin(angleInRadians)
  } while (checkOutOfBOund())

  return [xStart, yStart, xEnd, yEnd];
}

for (let i = 0; i < 20; i++) {
  const [xStart, yStart, xEnd, yEnd] = gen2DStartAndEndInBound(globalWidth, globalHeight, 100)

  c.beginPath()
  c.moveTo(xStart, yStart)
  c.lineTo(xEnd, yEnd)
  c.strokeStyle = '#fa34a3'
  c.stroke()
}

// Arc / Circle
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'blue'
// c.stroke()

for (let i = 0; i < 20; i++) {
  const offset = 10
  const radius = 30
  let x = Math.random() * (globalWidth - 2 * (radius + offset)) + (radius + offset)
  let y = Math.random() * (globalHeight - 2 * (radius + offset)) + (radius + offset)
  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2, false)
  c.strokeStyle = 'blue'
  c.stroke()
}
