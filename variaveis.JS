//Um identificador válido deve começar com [a-z-Z_$] seguido por [a-zA-Z0-9_$]

//Ao utilizar var, a varíavel é declarada e inicializada no escopo da função, não respeitando
//o bloco e permitindo a redeclaração e reatribuição.

//Ao utilizar let, a variável é declarada no escopo da função mas só é declarada posteriormente,
//respeitando bloco e permitindo reatribuição mas não a redeclaração.

//Ao utilizar const, a variável é declarada no escopo da função mas só é inicializada posteriormente,
//respeitando o bloco e não permitindo retribuição nem redeclaração.

//**UTILIZAR LET OU CONST, EVITAR VAR E EVITAR VARIAVEL SEM DECLARAR O TIPO DA VARIAVEL.
//------------------------------------------------

console.log("var:");
var pi = 3.141592; 
console.log(pi);
pi = 3;
console.log(pi);


if(true){
    var pi = 3.141592
}
console.log(true);

//------------------------------------------------

console.log("let:");
let pi = 3.141592;
console.log(pi);
pi = 3;
console.log(pi);

if(true){
    let pi = 3.141592;
}
console.log(true);

//------------------------------------------------


console.log("const:");
const pi = 3.141592;
console.log(pi);
pi = 3;
console.log(pi);

if(true){
    const pi = 3.141592;
}
console.log(pi);

//------------------------------------------------
//identificadores:
let name;
let Name;
let _name;
let $name;
