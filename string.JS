//o tipo String é primitivo, imutavel e é representado pelo padrão unicode, codificando em UTF-16.
//Existem 3 formas de declarar uma string de forma literal: aspas simples, aspas duplas ou acento grave.
// 'a', "a", ´a´

'JavaScript';
"JavaScript";
`JavaScript`;

//utilizado para padronização do código.

new String('JavaScript');
new String("JavaScript");
new String(`JavaScript`);

//A função construtora é mais lenta e pode prejudicar a performance.
let counter = 0;
console.time("performance");
while(counter < 100000){
    "JavaScript";
    counter ++
}
console.timeEnd("performance");

//Alguns tipos de caracteres não são permitidos e precisam ser encapados.
console.log("Teste com contrabarra na string          \"teste\"");
console.log('Teste com aspas simples na string        \'teste');
console.log(`Teste para mostrar contrabarra na string \\n  ou \\u888a`);

//Existem também caracteres de controle que podem ser utilizados para quebrar linhas, aumentar a indentação entre outras coisas.
// \b backspace
// \f Form feed
// \n new line
// \r carriege return
// \t horizontal tabulator
// \v vertical tabulator

let daysOfWeek = '0 - Sun\n1 - Mon\n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat';
console.log(daysOfWeek);
console.log("------------------------------------");

//É possivel escrever caracteres utilizando seu code point no padrão Unicode.

let daysofWeekInCodePoints = 
"\u0030 \u002d \u0053\u0075\u006e\u000A\u0031 \u002d \u004d\u006f\u006e etc."
console.log(daysofWeekInCodePoints);







