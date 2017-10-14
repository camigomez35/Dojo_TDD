 let trueNumber = "";

class Codebreaker{

  adivinar(numero){

    if(isNaN(numero) || numero.length != 4 || (numero.split('')).indexOf('e')!=-1){
      return "error"
    }

    let resultadoX = ''
    let resultado_ = ''
    let arrayNumber = []
    for(var x = 0; x < numero.length; x++)
    {
      if(arrayNumber[numero[x]] == true){
        return 'error';
      }
      arrayNumber[numero[x]] = true;
    }
    numero = numero.split('')
    numero.map(function(n, index){
      if(trueNumber.charAt(index) === numero[index]){
        resultadoX+='X'
      }
      else if(trueNumber.indexOf(n)!=-1){
        resultado_+='_'
      }
    })
    return resultadoX + resultado_;
  }

  setNumber(number){
    trueNumber = number;
  }
}
module.exports = Codebreaker;
