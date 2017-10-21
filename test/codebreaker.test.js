
let test = require('assert');
var Codebreaker = require('../Codebreaker');
//import '../Codebreaker'
let codebreaker = new Codebreaker()
describe( 'Test pass', function(){
  it('is true', function(){
     test.ok(true, true)
  })
})
describe('Codebreaker Test', function(){

    beforeEach(function(){
        codebreaker.setNumber('1234')
    })


    it('Assert all number - XXXX', function(){
        let resultado = codebreaker.adivinar("1234")
        test.equal('XXXX', resultado)
    })

    it('four number', function(){
      let resultado = codebreaker.adivinar("12345")
      test.equal('error', resultado)
    })

    it('not repeat digits',function(){
      let resultado = codebreaker.adivinar("1212")
      test.equal('error', resultado)
    })

    it('3 hits',function(){
      let resultado = codebreaker.adivinar("1236")
      test.equal('XXX', resultado)
    })

    it('2 hits',function(){
      let resultado = codebreaker.adivinar("1256")
      test.equal('XX', resultado)
    })

    it('Return empty',function(){
      let resultado = codebreaker.adivinar("5678")
      test.equal('', resultado)
    })

    it('1 hit',function(){
      let resultado = codebreaker.adivinar("1567")
      test.equal('X', resultado)
    })

    it('2 hits and 2 assert',function(){
      let resultado = codebreaker.adivinar("1243")
      test.equal('XX__', resultado)
    })

    it('1 hit and 3 assert',function(){
      let resultado = codebreaker.adivinar("1423")
      test.equal('X___', resultado)
    })

    it('1 hit and 3 assert reverse',function(){
      let resultado = codebreaker.adivinar("3124")
      test.equal('X___', resultado)
    })

    it('4 assert',function(){
      let resultado = codebreaker.adivinar("4321")
      test.equal('____', resultado)
    })

    it('is number all letter',function(){
      let resultado = codebreaker.adivinar("abcd")
      test.equal('error', resultado)
    })

    it('is number any letter',function(){
      let resultado = codebreaker.adivinar("123a")
      test.equal('error', resultado)
    })

    it('is number expo',function(){
      let resultado = codebreaker.adivinar("1e34")
      test.equal('error', resultado)
    })

    it('number is not defined', function() {
      codebreaker.setNumber('');
      let resultado = codebreaker.adivinar('1234');
      test.equal('Number is not defined', resultado)
    })
})
