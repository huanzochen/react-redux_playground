import { EffectsProvider } from './context'

const EffectsWrapper = ({ children, ...restProps }) => {
  return <EffectsProvider {...restProps}>{children}</EffectsProvider>
}

export default EffectsWrapper
