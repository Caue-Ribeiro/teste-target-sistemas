//QUESTÃO 1

const somaFunc = () => {
    let indice = 13,
        soma = 0

    for (let k = 0; k < indice; k++) {
        k += 1
        soma += k
    }

    console.log(soma)
}

somaFunc()

//QUESTÃO 2

const fibonacci = (n, a = 0, b = 1) => {
    if (n === 0) {
        return a
    } else {
        return fibonacci(n - 1, b, a + b)
    }
}

fibonacci(10)

//QUESTÃO 3
import faturamento from './faturamento.json' with { type: 'json' }


console.log(faturamento)

const menorValorMes = arr => {
    let menorValorFaturamento = arr[0].faturamento

    for (let i = 1; i < arr.length; i++) {

        if(arr[i].dia == 'Sábado' || arr[i].dia == 'Domingo'){
            continue
        }

        if (menorValorFaturamento < arr[i].faturamento) {
                continue
        } else {
                menorValorFaturamento = arr[i].faturamento
            }
    }

    console.log(menorValorFaturamento)
}


const maiorValorMes = arr => {
    let maiorValorFaturamento = arr[0].faturamento

    for (let i = 1; i < arr.length; i++) {

        if(arr[i].dia == 'Sábado' || arr[i].dia == 'Domingo'){
            continue
        }

        if (maiorValorFaturamento > arr[i].faturamento) {
                continue
        } else {
                maiorValorFaturamento = arr[i].faturamento
            }
    }

    console.log(maiorValorFaturamento)
}


const faturamentoPorMedia = arr => {
    let somaMedia,
        valorTotal = 0,
        numeroDias = 0

    for (let i = 0; i < arr.length; i++) {

        if(arr[i].dia == 'Sábado' || arr[i].dia == 'Domingo'){
            continue
        }

            valorTotal += arr[i].faturamento
        

    }

    somaMedia = valorTotal / (arr.length - 8)

    
    for (let i = 0; i < arr.length; i++) {

        if(arr[i].dia == 'Sábado' || arr[i].dia == 'Domingo'){
            continue
        }

        if (arr[i].faturamento > somaMedia) {
            numeroDias++
        } else {
            continue
        }
    }

    console.log(
        `Durante o mês houveram ${numeroDias} dias com faturamento acima da média.`
    )
}


//QUESTÃO 4

const estados = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
  ]

const calcPorcentagem = (arr)=>{
    let valorTotal = 0,valorPercentual

    for (let i = 0; i < arr.length; i++) {
        
        valorTotal+= arr[i].valor
    }
    
    for (let j = 0; j < arr.length; j++) {
        
        valorPercentual = (arr[j].valor / valorTotal) *100

        console.log(`Valor percentual de ${arr[j].estado} é de ${valorPercentual.toFixed(2)}`);
        
    }
    
}


//QUESTÃO 5

const inverterString = (string) =>{
        let splittedArr = string.split('')
        let revertedArr = []
        for (let i = splittedArr.length-1; i >= 0; i--) {

            revertedArr.push(splittedArr[i])


            
        } 
        
        return revertedArr.join('')
        
    
    }

inverterString('hello')