import leia from 'readline-sync';

var valor = leia.questionFloat("Digite o valor da compra: r$");
var estado = leia.keyInSelect(["SP", "SC", "PR", "RS", "OUTROS"], "INFORME O DESTINO: ");

if(valor > 500) {
    console.log("valor da compra é: r$" + valor.toFixed(2) + " e o frete é gratis");
} else {
    switch (estado) {
    case 0:
    case 1:
    case 2:
    case 3:
        console.log("o valor da compra: r$" + " frete R$" + 400);
        break;
        case 4:
         console.log("o valor da compra: r$" valor.toFixed(2) + "frete R$" + 400);
         break;
         case 4: 
            console.log("o valor da compra: r$" + valor.toFixed(2) + "frete r$ + 500");
            break;
    }
}
