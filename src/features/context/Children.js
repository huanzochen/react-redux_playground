import Baby from './Baby'

function Children(props) {
  console.log('Children')
  console.log(props)
  return (
    <div>
      <Baby></Baby>
    </div>
  )
}

export default Children
