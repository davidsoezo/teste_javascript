const calcularDesconto = require("../desconto")

test("testa se o valor é verdadeito se for maior que 150",()=>{
    expect(calcularDesconto(200)).toBeTruthy()//espero receber um valor que se é verdadeiro
})

test("testa se ovalor vai ser falso para valores menores que 150",()=>{ 
    expect( calcularDesconto(100)).toBeFalsy()
})
