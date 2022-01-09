import { useItemCtx } from './context'

const MainPage = () => {
  const { sandra, tommy } = useItemCtx()
  return (
    <>
      <h3>MainPage</h3>
      <div>
        data from use useItemCtx():
        <div>
          <span>sandra:</span>
          <span>{sandra}</span>
        </div>
        <div>
          <span>tommy:</span>
          <span>{tommy}</span>
        </div>
      </div>
    </>
  )
}

export default MainPage
