// trabalhando com datas
var d = new Date();
// um timestamp completo
console.log(d);
//somente o dia do mes no calendario
console.log(d.getDate());
//qual dia representa numericamente na semana
console.log(d.getDay());
// ano completo
console.log(d.getFullYear());
// somente retorno da hora - localtime
console.log(d.getHours());
// somente minutos
console.log(d.getMinutes());
//mês - lembrando base 0
console.log(d.getMonth() + 1);
//diferença de timezone em minutos
console.log(d.getTimezoneOffset());

//testes com IF
// var idade = 18;
//usando o prompt
// var idade  = prompt("Qual é a sua idade?");

// if (idade >= 18){
//   console.log("maior de idade");
//   }else{
//     console.log("menor de idade");
//   };

//trabalhando com While
// var count = 0;
// while (count < 5) {
//   console.log(count);
//   // count = count + 1;
//   //fica melhor usando o count++
//   count++;
// }

//teste com FOR
// var count;
// for (count = 0; count <= 5; count++) {
//   console.log(count);
// }

// var lista = ["maça", "pêra", "laranja"];
// console.log(lista);
// //adiciona no array
// lista.push("uva");
// //remove o último do array
// console.log(lista);
// //mostra o tamanho da lista
// console.log("Nesta lista tem " + lista.length + " itens")
// lista.pop();
// console.log(lista);
// //inverte a ordem de saida do array
// console.log(lista.reverse());
// //recuperar somente as strings da lista ou pegar uma posição especifica
// console.log(lista.toString()[4]);
// //Join util para alterar o simbolo de separação dos itens do array
// console.log(lista.join(" => "));

// //dicionario no array
// var fruta = {nome:"maça", cor:"vermelha"};
// console.log(fruta.nome);
// console.log(fruta.cor);

// // lista de dicionários no array
// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"abacate", cor:"verde"}];
// console.log(frutas);
// console.log(frutas[1].nome);
// console.log(frutas[1].cor);

// var nome = "Marcelo Ceribelli";
// var idade = 29;
// var idade2 = 10;
// var frase = "Italia o melhor time do mundo!!";
//alert(nome + " tem " + idade + " anos" );
//alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase);
// console.log(frase.replace("Italia", "Alemanha"));
// console.log(frase.toLocaleUpperCase());
// console.log(frase.toLocaleLowerCase());
// console.log(frase.endsWith("mundo"));
// console.log(frase.endsWith("!"));
// console.log(frase.length);
