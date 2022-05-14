// En matemáticas, la sucesión o serie de Fibonacci hace referencia a la secuencia ordenada de números descrita por Leonardo de Pisa, matemático italiano del siglo XIII:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…

// A cada uno de los elementos de la serie se le conoce con el nombre de número de Fibonacci.

//? Primera forma de resolverlo:

let fibonacci = () => {
    let a = 0;
    let b = 1;
    let secuencia = [0];

    for (let i = 0; i <= 10; i++) {
        let c = a;

        a = b;
        b = a + c;

        secuencia.push(a);
    }
    console.log(secuencia);
};

fibonacci()


//? Segunda forma de resolverlo:

let fibonacci2 = () => {
    let limit = 10;
    let fibo = [0, 1];

    for (i = 2; i <= limit; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    console.log(fibo);
}

fibonacci2()
