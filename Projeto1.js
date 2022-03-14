const prompt = require("prompt-sync")();

// Code LAb 2 - Jornada do Herói

//História
contSim = 0;
let resposta;

// A história até aqui..
console.log("\tBem vindo a 'Jornada do Herói'");
console.log("Você chegou ao fim de sua aventura, bravo aventureiro\n");
console.log("Depois de uma repentina falta de água em sua vila. \n");
console.log(
  "Você resolve subir a montanha parar tentar descobrir o que estava bloqueando o fluxo do rio. \n"
);
console.log("Ao chegar você descobre um plano maqueavélico dos bandidos. \n");
console.log(
  "Eles bloquearam o rio com troncos de madeira e planejavam monopolizar e vender a água do rio. \n"
);

// Perguntas

const perguntas = [
  "Você conseguiu encontrar o covil dos bandidos? ",
  "Você conseguiu derrotar os bandidos? ",
  "Você conseguiu expulsar os bandidos da montanha? ",
  "Você conseguiu retirar os troncos do rio? ",
  "Você conseguiu voltar para a vila? ",
];

// Armazenando os status da missão
const missao = {
  0: "Você pensou melhor e nem saiu de casa, sem água você acaba morrendo de sede. Triste fim.",
  1: "Você falhou, conseguiu um pouco de água para consumo próprio e em breve voltará a ficar com sede.",
  2: "Você falhou, conseguiu um pouco de água para consumo próprio e em breve voltará a ficar com sede..",
  3: "Você falhou, você descobriu o problema, mas falhu em resolve-lo.",
  4: "Você obteve sucesso, conseguiu trazer a água para vila, mas não derrotou totalmente os bandidos.Algum dia eles voltarão.",
  5: "Até eu, o narrador, estou impressionado. Você dizimou os bandidos, garantindo que eles nunca mais voltem. Resolveu o problema da água e ainda trouxe uma fruta que o chefe da vila tanto gosta. Já temos um forte candidato para próximo chefe da vila. Parabéns.",
};

console.log("Responda as perguntas com Sim ou Não: ");
console.log('\n')

// esse laço vai fazer a iteração das perguntas e a validação das repostas
for (i = 0; i < perguntas.length; i++) {
  while (
    resposta != "SIM" ||
    resposta != "S" ||
    resposta != "NAO" ||
    resposta != "N"
  ) {
    resposta = prompt(perguntas[i]).toUpperCase();

    if (resposta == "SIM" || resposta == "S") {
      contSim++;
      break;
    } else if (resposta == "NAO" || resposta == "N") {
      break;
    } else {
      console.log("Resposta inválida.");
    }
  }
}

// testa a quantidade de missões que o heroi acertou
function resultado(contador) {
  if (contSim == 0) {
    console.log(missao[contSim]);
  } else if (contSim > 0 && contSim < 3) {
    console.log(missao[contSim]);
  } else if (contSim == 3) {
    console.log(missao[contSim]);
  } else if (contSim == 4) {
    console.log(missao[contSim]);
  } else {
    console.log(missao[contSim]);
  }
}

// mostra o resultado das missões e encerra o programa
resultado(contSim);
console.log("\nFim.");
console.log("\n Obrigado por jogar.");
