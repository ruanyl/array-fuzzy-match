import isMatch from '../src'

describe('FOO', () => {
  it('should return true if matches words', () => {
    const arr = ['zhong', 'guo', 'zhong', 'che']
    expect(isMatch(arr, 'zhong')).toBeTruthy()
    expect(isMatch(arr, 'guo')).toBeTruthy()
    expect(isMatch(arr, 'zhongg')).toBeTruthy()
    expect(isMatch(arr, 'guozhong')).toBeTruthy()
  })

  test('should return true if matches words case-insensitive', () => {
    const arr = ['zhong', 'guo', 'zhong', 'che']
    expect(isMatch(arr, 'Zhong')).toBeTruthy()
    expect(isMatch(arr, 'GUO')).toBeTruthy()
    expect(isMatch(arr, 'ZHONGG')).toBeTruthy()
    expect(isMatch(arr, 'guoZhong')).toBeTruthy()
  })

  test('should matches first letter of each word from beginning', () => {
    const arr = ['zhong', 'guo', 'zhong', 'che']
    expect(isMatch(arr, 'ZG')).toBeTruthy()
    expect(isMatch(arr, 'ZGZC')).toBeTruthy()
    expect(isMatch(arr, 'GZ')).toBeFalsy()
  })

  test('should match from the beginning', () => {
    const arr = ['zhong', 'guo', 'zhong', 'che']
    const config = { wordFromStart: true }
    expect(isMatch(arr, 'zhong', config)).toBeTruthy()
    expect(isMatch(arr, 'guo', config)).toBeFalsy()
    expect(isMatch(arr, 'zhongg', config)).toBeTruthy()
    expect(isMatch(arr, 'guozhong', config)).toBeFalsy()
  })

  test('should matches first letter of each word', () => {
    const arr = ['zhong', 'guo', 'zhong', 'che']
    const config = { letterFromStart: false }
    expect(isMatch(arr, 'ZG', config)).toBeTruthy()
    expect(isMatch(arr, 'ZGZC', config)).toBeTruthy()
    expect(isMatch(arr, 'GZ', config)).toBeTruthy()
  })

  test('should matches first letter of each word', () => {
    const arr = ['bin', 'jiang', 'ji', 'tuan']
    expect(isMatch(arr, 'jituan')).toBeTruthy()
  })

  test('should matches chinese', () => {
    const arr = ['滨', '江', '集', '团']
    expect(isMatch(arr, '滨江')).toBeTruthy()
    expect(isMatch(arr, '集团')).toBeTruthy()
    expect(isMatch(arr, '滨江集团')).toBeTruthy()
  })
});
