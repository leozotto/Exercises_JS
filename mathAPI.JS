//Math é um objeto global que contem constantes matematicas e metodos para a realização de operações envolvendo numeros.

Math.E;
Math.LN10;
Math.LN2;
Math.LOG10E;
Math.LOG2E;
Math.PI;
Math.SQRT1_2;
Math.SQRT2;

//abs: Converte o sinal do numero para positivo.
//ceil: Arredonda o numero para cima.
//floor: Arredonda o numero para baixo.
//round: Arredonda o numero para cima se a parte decimal for de 5 a 9 para baixo se for de 0 a 4.
//sign: Retorna 1 se o número for positivo e -1 se for negativo.
//trunc: Elimina a parte decimal do número, tornando-o um inteiro.

Math.abs(10);        //10
Math.abs(-10);       //10
Math.ceil(1.1);      //2
Math.ceil(-1.1);     //-1
Math.floor(9.9);     //9  
Math.floor(-9.9);    //-10
Math.round(4.5);     //5
Math.round(-4.5);    //-4
Math.sign(5);        //1
Math.sign(-5);       //-1
Math.trunc(2.3);     //2 
Math.trunc(-2.3);    //-2

//cbrt: Retorna a raiz cubica do numero
//cos: Retorna o coseno de um angulo.
//exp: Retorna E elevado a um expoente.
//hypot: Retorna a raiz quadrada dos quadrados dos numeros.
//log: Retorna o logaritmo do numero em base natural.
//pow: Retorna o numero elevado a uma determinado expoetne
//sin: Retorna o seno de um angulo
//sqrt: Retorna a raiz quadrada de um numero
//tan: Retorna a tangente de um angulo.

Math.cbrt(8);
Math.cos(Math.PI/3);
Math.exp(1);
Math.hypot(3,4);
Math.log(1);
Math.pow(2,10);
Math.sin(Math.PI/2);
Math.sqrt(4);
Math.tan(Math.PI/4);

//min: retorna o menor numero passado por parametro
//max: retorna o maior numero passado por parametro
//random: retorna um numero randomico entre 0 e 1, não incluindo o 1.
Math.min(1,2,3,4,5,6,7,-1,-10);
Math.max(10,90,311,4,5,6,7,-1,-10);
Math.random();
Math.floor(Math.random() * 1000); // para não incluir casas decimais



























