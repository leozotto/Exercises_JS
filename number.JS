//o Number é primitivo, imutável e é representado internamente pelo padrão IEEE 754 de 64bits
//Suporta os sistemas de numeração decimal, hexadecimal, binário e octal.

//Sistema decimal tem base de 10, deve iniciar com um numero de 1 a 0 seguido por numeros de 0 a 9 com ou sem ponto. 
//ex.:(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32)

//Sistema hexadecimal tem base de 16, deve iniciar com 0x ou 0X, seguido por numeros de 0 a 9 e letras de A a F.
//ex.:(1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,10,11,12,13,14,15,16,17,18,19,1A,1B,1C,1D,1E,1F,20).

//Sistema binário tem base de 2, deve iniciar com 0b ou 1B, seguido por numeros de 0 a 1.
//ex.:(000000,0000001,000010,000011,000100,0000101 etc...).

//Sistema octal tem base de 8, deve iniciar com 0, 0o ou 0O, seguido por numeros de 0 a 7.
//ex.:(1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,20,21,22,23,24,25,26,27,30,31,32,33,34 etc...).

//escrever no terminal 'Node' para converter dependendo do tipo de numeração ou apenas o numero para converter.

new Number(0xFF);
new Number(9.9);
new Number(255);
new Number(0b10);
new Number(010);
new Number(0X1A);
new Number(0o7);
new Number(0o12);

//Os metodos toExponential, toFixed e toPrecision podem ser utilizados para mudar a forma como um numero é representado.
(123.4).toExponential(10);       //multiplica por 10n.
(123.4).toFixed(10);             //limita as casas decimais em 10 após a virgula.
(123.4).toPrecision(10);         //limita a quantidade de caracteres total.
