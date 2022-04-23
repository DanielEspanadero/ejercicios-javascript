// Funció amb 10 promesas que retornan un resultat que es va ficant dins d'un array en un temps entre 0 i 5 segons. Que l'arrai es guardi pasarli un parametre amb l'ordre que s'executa.

let datos = [];

const prova = (num) => {
    let time = 5000 * Math.random()
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ num, time });
        }, time);
    });
};

for (let i = 1; i <= 10; i++) {
    const insertFunction = async () => {
        datos[i] = console.log(await prova(i))
    }
    insertFunction()
};

for (let i = 0; i < 10; i++) {
    datos[i]
};