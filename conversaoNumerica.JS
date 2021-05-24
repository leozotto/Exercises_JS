//A forma mais simples de conerter numero é por meio da invocação da função construção Number.

Number("10");
Number("9.9");
Number("0xFF");
Number("0b10");
Number("0o10");
Number();
Number("JavaScript"); //NaN

//Um outro jeito de realizar conversões é por meio dos operadores numericos.
~~"10";     //é igual a 10, converte 2x
+"10";      //é igual a 10, converte string para number.
"10" - 0;   //é igual a 10, converte string para number.
"10" * 1;   //é igual a 10, converte string para number.
"10" / 1;   //é igual a 10, converte string para number.
"10" + 0;   //é igual a 100, ele concatena a string com o number, sendo 100.

//O metodo toString de um numero, permite converte-lo para qualquer sistema de numeração,
//bastando indicar qual é a base desejada. (SISTEMA NUMERICO PARA SISTEMA DESEJADO.)
(0xA).toString(10);
(0b1010).toString(16);
(010).toString(2);
(10).toString(8);

//O metodo parseInt permite converter uma string para um numero. Para isso basta indicar o numero
//e a sua base, que caso nao seja informada sera 10. (STRING PARA NUMERO)
parseInt("10", 10);
parseInt("9.9", 10.0);
parseInt("A", 16);
parseInt("11", 2);
parseInt("010", 8);

//O metodo parseFloat permite converter uma string para um numero. Basta indicar o numero
//que converterá para a base 10. (STRING PARA NUMERO)
parseFloat("10");
parseFloat("2.5");
parseFloat("0xFF"); //0
parseFloat("0b10"); //0


