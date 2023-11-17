const readline = require('readline'); //importa o módulo readline

const rl = readline.createInterface({ //configura a interface da readline
    input: process.stdin, //lê a entrada do usuário
    output: process.stdout //escreve na saída padrão
});

function getHeroData() { //obtem informações sobre o herói
    rl.question("Digite o nome do herói (ou 'exit' para sair): ", function(heroName) {
        if (heroName.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        rl.question("Digite a experiência do herói: ", function(heroXP) {
            heroXP = parseInt(heroXP);
            let heroLevel;

            if (heroXP < 1000) {
                heroLevel = "Ferro";
            } else if (heroXP >= 1001 && heroXP <= 2000) {
                heroLevel = "Bronze";
            } else if (heroXP >= 2001 && heroXP <= 5000) {
                heroLevel = "Prata";
            } else if (heroXP >= 5001 && heroXP <= 7000) {
                heroLevel = "Ouro";
            } else if (heroXP >= 7001 && heroXP <= 8000) {
                heroLevel = "Platina";
            } else if (heroXP >= 8001 && heroXP <= 9000) {
                heroLevel = "Ascendente";
            } else if (heroXP >= 9001 && heroXP <= 10000) {
                heroLevel = "Radiante";
            }

            console.log("O herói de nome " + heroName + " está no nível de " + heroLevel);

            getHeroData(); // chama a função recursivamente para obter dados do próximo herói
        });
    });
}

getHeroData(); // inicia o loop

rl.on('close', function() {
    process.exit(0);
});
