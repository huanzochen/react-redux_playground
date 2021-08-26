import Home from './Home'
import Enzyme, { shallow, mount } from 'enzyme'


describe('<Home />', () => {
    
  test('renders styledHome and check <a> 數量', () => {
    const renderedComponent = shallow(<Home/>)
    expect(renderedComponent.find('a')).toHaveLength(8)
  })

  test('a 都有 href', () => {
    const renderedComponent = shallow(<Home/>)
    expect(renderedComponent.find('a').forEach((node) => {
      expect(node.props().href).toBeTruthy()
    }))
  })

  test('a 可以點擊', () => {
    const renderedComponent = shallow(<Home/>)
    expect(renderedComponent.find('a').forEach((node) => {
      expect(node.simulate('click')).toBeTruthy()
    }))
  })

})

