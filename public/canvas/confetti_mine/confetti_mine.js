// utils
// helper function to pick a random number within a range
const randomRange = (min, max) => Math.random() * (max - min) + min

// constants
// colors, back side is darker for confetti flipping
const colors = [
  { front: '#7b5cff', back: '#6245e0' }, // Purple
  { front: '#b3c7ff', back: '#8fa5e5' }, // Light Blue
  { front: '#5c86ff', back: '#345dd1' }, // Darker Blue
]

// Main
const button = document.getElementById('button')
const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

// Confetto Class
function Confetto() {
  this.randomModifier = randomRange(0, 99)
  this.color = colors[Math.floor(randomRange(0, colors.length))]
  this.dimensions = {
    x: randomRange(5, 9),
    y: randomRange(8, 15),
  }
  this.position = {
    x: randomRange(
      canvas.width / 2 - button.offsetWidth / 4,
      canvas.width / 2 + button.offsetWidth / 4
    ),
  }
}
