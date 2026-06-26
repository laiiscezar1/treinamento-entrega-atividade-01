import leia from 'readline-sync';

var idade = leia.questionInt("informe a idade: ");
var ehEstudante = leia.keyInYN("voce e estudante: ");
var diaSemana = leia.keyInSelect(["seg", "ter", "qua", "qui", "sex", "sab", "dom"], "informe dia da semana");

var valorIngresso = 40;

if(idade < 12) {
    console.log("valor ingresso: R$" + valorIngresso.toFixed(2));
    console.log("valor cobrado: R$" + (15).toFixed(2));
} else {
    
}