import test from 'ava'

import isMatch from '../src'

test('should return true if matches words', t => {
  const arr = ['zhong', 'guo', 'zhong', 'che']
  t.true(isMatch(arr, 'zhong'))
  t.true(isMatch(arr, 'guo'))
  t.true(isMatch(arr, 'zhongg'))
  t.true(isMatch(arr, 'guozhong'))
})

test('should return true if matches words case-insensitive', t => {
  const arr = ['zhong', 'guo', 'zhong', 'che']
  t.true(isMatch(arr, 'Zhong'))
  t.true(isMatch(arr, 'GUO'))
  t.true(isMatch(arr, 'ZHONGG'))
  t.true(isMatch(arr, 'guoZhong'))
})

test('should matches first letter of each word from beginning', t => {
  const arr = ['zhong', 'guo', 'zhong', 'che']
  t.true(isMatch(arr, 'ZG'))
  t.true(isMatch(arr, 'ZGZC'))
  t.false(isMatch(arr, 'GZ'))
})

test('should match from the beginning', t => {
  const arr = ['zhong', 'guo', 'zhong', 'che']
  const config = { wordFromStart: true }
  t.true(isMatch(arr, 'zhong', config))
  t.false(isMatch(arr, 'guo', config))
  t.true(isMatch(arr, 'zhongg', config))
  t.false(isMatch(arr, 'guozhong', config))
})

test('should matches first letter of each word', t => {
  const arr = ['zhong', 'guo', 'zhong', 'che']
  const config = { letterFromStart: false }
  t.true(isMatch(arr, 'ZG', config))
  t.true(isMatch(arr, 'ZGZC', config))
  t.true(isMatch(arr, 'GZ', config))
})

test('should matches first letter of each word', t => {
  const arr = ['bin', 'jiang', 'ji', 'tuan']
  t.true(isMatch(arr, 'jituan'))
})
