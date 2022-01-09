import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import Enzyme, { shallow } from 'enzyme'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('render without error', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find('.App')
  expect(appComponent.exists()).toBe(true)
  expect(appComponent.length).toBe(1)
})
