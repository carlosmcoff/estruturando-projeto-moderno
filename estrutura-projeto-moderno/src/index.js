// Média Aritmética Simples
const simpleArithmeticMean = (...numbers) => {
  const sum = numbers.reduce((total, e) => total += e, 0)
  return `A média aritimetica é: ${sum / numbers.length}`
}
console.log(simpleArithmeticMean(2, 6, 3, 7, 4))

// Média Aritmética Ponderada
const weightedArithmeticMean = (...numbers) => {
  const sumN = numbers.reduce((total, { n, p }) => total += (n ?? 1) * (p ?? 1), 0)
  const sumP = numbers.reduce((total, { p }) => total += (p ?? 1), 0)
  return `A média ponderada é: ${sumN / sumP}`
}
console.log(weightedArithmeticMean(
  { n: 7, p: 2}, 
  { n: 9, p: 5 }, 
  { n: 8, p: 2 }, 
  { n: 5 }
))

// Mediana
const middleMedian = (...numbers) => {
  const numbMiddle = parseInt((numbers.length / 2))
  if (numbers.length % 2 !== 0) {
    return `A media do meio do array é: ${numbers[numbMiddle]}`
  }
  const sumNumbsMiddle = (numbers[numbMiddle] + numbers[numbMiddle - 1]) / 2
  return `A media do meio do array é: ${sumNumbsMiddle}`
}

console.log(middleMedian(15, 14, 8, 7, 3))

// Moda
const numberThatRepeatsMost = (...numbers) => {
  const countNUmber = numbers.map(element => [ element, numbers.filter(e => e === element).length ])
  countNUmber.sort((a, b) => b[1] - a[1])
  return countNUmber
}

console.log(numberThatRepeatsMost(1, 1, 5, 4, 9, 7, 4, 3, 5, 5, 5, 5, 5, 2, 4, 0, 4))
console.log("aaaaaaaaaa")