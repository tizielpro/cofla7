// calculadora

class Calculadora{
    constructor(){
        
    }
    sumar(num1,num2){
        return (num1)+(num2);
    }
    restar(num1,num2){
        return (num1)-(num2);
    }
    dividir(num1,num2){
        return (num1)/(num2);
    }
    multiplicar(num1,num2){
        return (num1)*(num2);
    }
    potenciar(num,exp){
        return (num)**(exp)
    }
    raizcuadrada(num){
        return Math.sqrt(num);
    }
    raizcubica(num){
        return Math.cbrt(num);
    }
}
const calculadora = new Calculadora();

alert("que calculo quieres realizar");
let calculo = prompt("1-sumar 2-restar 3-dividir 4-multiplicar 5-potenciar 6-raizcuadrada 7-raizcubica");

if(calculo == 1){
    num1 = prompt("primer numero para sumar");
    num2 = prompt("segundo numero para sumar");
    res = calculadora.sumar(num1,num2);
    alert(`tu resultado es ${res}`)
}
else if(calculo == 2){
    num1 = prompt("primer numero para restar");
    num2 = prompt("segundo numero para restar");
    res = calculadora.restar(num1,num2);
    alert(`tu resultado es ${res}`)
}
else if(calculo == 3){
    num1 = prompt("primer numero para dividir");
    num2 = prompt("segundo numero para dividir");
    res = calculadora.dividir(num1,num2);
    alert(`tu resultado es ${res}`)
}
else if(calculo == 4){
    num1 = prompt("primer numero para multiplicar");
    num2 = prompt("segundo numero para multiplicar");
    res = calculadora.multiplicar(num1,num2);
    alert(`tu resultado es ${res}`)
}
else if(calculo == 5){
    num1 = prompt("primer numero para potenciar");
    num2 = prompt("segundo numero exponente");
    res = calculadora.potenciar(num1,num2);
    alert(`tu resultado es ${res}`)
}
else if(calculo == 6){
    num = prompt("raiz cuadrada de ...");
    res = calculadora.raizcuadrada(num);
    alert(`tu resultado es ${res}`);
}
else if(calculo == 7){
    num = prompt("raiz cubica de ...");
    res = calculadora.raizcubica(num);
    alert(`tu resultado es ${res}`);
}
else{
    alert("no se ah encontrado tu calculo")
}