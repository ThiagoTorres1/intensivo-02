/*
  Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
  */
  alert('Hello world') 
  
    function helloWorld() {
      alert('Hello World')
    }
  
    helloWorld()


/*
  Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
  alert('Iremos somar 2 números')
  
  const number1 = Number(prompt('Digite o primeiro número:'))
  const number2 = Number(prompt('Digite o segundo número:'))
  
  const result = number1 + number2
  alert(`O resultado da sua soma foi de: ${result}`)
  */

  const number1 = Number(prompt('digite o primeiro número:'))
  const number2 = Number(prompt('digite o segundo número:'))
  
  function sumNumber(number1, number2) {
    let result = number1 + number2
    return result
  }
  
  alert(sumNumber(number1, number2))

/*
  Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
  let number = 1
  let itsANumber = typeof number
  console.log(itsANumber)
  if(itsANumber == 'number') {
    alert('É um número')
  } else {
    alert('Não é um número')
  }
*/

function thisIsaStringOraNumber() {
  let itsAStringOrANumber = prompt('Digite algo:')
  let resultOfQuestion = Number(itsAStringOrANumber)
  console.log(resultOfQuestion)
  if(isNaN(resultOfQuestion)) {
    alert(`É uma string: ${itsAStringOrANumber}`)
  } else {
    alert(`É um number: ${itsAStringOrANumber}`)
  }
}

thisIsaStringOraNumber()
thisIsaStringOraNumber()
thisIsaStringOraNumber()

/*
  Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
  */
  function subtraction() {
    let firstNumber = Number(prompt('Digite um número:'))
    let secondNumber = Number(prompt('Digite outro número:'))
    let result = firstNumber - secondNumber
    let phraseResult = `O resultado foi ${result}`
    return phraseResult
  }
  
  alert(subtraction())

/*
  Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
  */
  const itsPar = Number(prompt('Digite um número'))
  
  const result = itsPar % 2
  
  result == 0 ? alert(`O número ${itsPar} é par`) : alert(`O número ${itsPar} não é par`)
