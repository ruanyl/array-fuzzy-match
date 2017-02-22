export default (arr, str, customConfig) => {
  const config = { letterFromStart: true, wordFromStart: false, ...customConfig }

  const allStr = arr.join('').toUpperCase()
  let wordIndexes = []
  let firstLetters = ''
  let isMatchLetter = false
  let isMatchWord = false

  arr.forEach((word, i) => {
    wordIndexes = wordIndexes.concat(i === 0 ? 0 : arr[i - 1].length + wordIndexes[i - 1])
    firstLetters = `${firstLetters}${word.charAt(0).toUpperCase()}`
  })

  if (config.letterFromStart) {
    isMatchLetter = firstLetters.indexOf(str.toUpperCase()) === 0
  } else {
    isMatchLetter = firstLetters.indexOf(str.toUpperCase()) >= 0
  }

  if (config.wordFromStart) {
    isMatchWord = allStr.indexOf(str.toUpperCase()) === 0
  } else {
    isMatchWord = wordIndexes.includes(allStr.indexOf(str.toUpperCase()))
  }

  return isMatchLetter || isMatchWord
}
