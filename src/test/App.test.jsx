import React from 'react'
import {describe, expect, test} from 'vitest';
import renderer from 'react-test-renderer'
import Link from '../components/Link.jsx'


function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
}

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://antfu.me">Anthony Fu</Link>,
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseEnter()

  // re-rendering
  tree = toJson(component)
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseLeave()
  // re-rendering
  tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

