//O IEEE 754 é um padrão de representação numerica criado em 1985 e adotado por diversas lingaugens de programação
//como JS, Ruby, Python e Java.

//Cuidado com alguns tipos de operação envolvendo números.
//Ao realizar operações com numeros decimais, podem existir residuos decorrentes de arredondamento.
//http://weitz.de/ieee/

//problemas arredondamento
0.1 + 0.2;
666.7 - 666.6;
33.3 * 3;
12.2 / 0.1;

//Infinity, que pode ser positivo ou negativo, é retornado quando uma operação ultrapassa os limites do tipo number.
1/0;
Math.pow(10,1000);
Number.MAX_VALUE * 2;
-Number.MAX_VALUE * 2;
Math.log(0);

//NaN ou Not a Number, é retornado quando realizamos uma operação numérica, onde não é possível determinar o resultado.
10 * "JavaScript";
0/0;
Math.sqrt(-9);
Math.log(-1);
parseFloat("JavaScript");














