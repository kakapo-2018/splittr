import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import './setup-env'
import App from '../client/components/App'

Enzyme.configure({adapter: new Adapter()})

test('App contains an <svg> element with the correct size', () => {
  // the innerWidth and innerHeight of the window is defined in ./setup-env.js

  const wrapper = shallow(<App />)

  const props = wrapper.find('svg').props()
  expect(props.width).toBe(window.innerWidth)
  expect(props.height).toBe(window.innerHeight)
})

test('App contains an initial circle in the correct location', () => {
  const expectedX = 100 // half of width
  const expectedY = 200 // half of height

  const wrapper = shallow(<App />)

  const props = wrapper.find('Circle').props()
  expect(props.circle.cx).toBe(expectedX)
  expect(props.circle.cy).toBe(expectedY)
})

test('App adds four circles on mouseover', () => {
  const app = mount(<App />)

  app.find('circle').first().simulate('mouseover')

  const actual = app.find('circle').length
  expect(actual).toBe(5)
})

test('App does not add more circles on subsequent clicks', () => {
  const app = mount(<App />)

  app.find('circle').first().simulate('mouseover')
  app.find('circle').first().simulate('mouseover')

  const actual = app.find('circle').length
  expect(actual).toBe(5)
})

test('App adds four more circles when subcircle is moused over', () => {
  const app = mount(<App />)

  app.find('circle').first().simulate('mouseover')
  app.find('circle').last().simulate('mouseover')

  const actual = app.find('circle').length
  expect(actual).toBe(9)
})

