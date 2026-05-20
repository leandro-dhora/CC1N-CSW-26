var issoeumastring = 'isso é uma string';
let issoeumnumero = 4;
let issotambemeumnumero = 5;
const issoeumbooleano = true;
let issotambemeumastring = '4';

console.log(issoeumastring == issoeumnumero);
console.log(issoeumnumero == issotambemeumastring);
console.log(issoeumnumero === issotambemeumastring);
console.log(issoeumnumero === issotambemeumnumero);
console.log(typeof issoeumastring);
console.log(typeof issoeumnumero);
console.log(typeof issoeumbooleano);
console.log(typeof issotambemeumastring);
console.log(typeof issotambemeumnumero);

console.log(issoeumnumero + issotambemeumastring);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
console.log(sum);
console.log(sum.toPrecision(1));


// NUMEROS PARES USANDO FOR
for (let x = 0; x < 11; x++) {
    if (x % 2 === 0) {
        console.log(x)
    }
}

for (let x = 0; x < 11; x += 2) {
    console.log(x);
}

// NUMEROS IMPARES USANDO WHILE
let j = 0;
while (j <= 10) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}

j = 1;
while (j <= 10) {
    console.log(j)
    j += 2;
}
console.log(j)

var elglobal = "Eu sou uma variável global"; // NÃO ESTÁ DENTRO DE UM BLOCO DE FUNÇÕES
{ let issoeumalocal = "Eu sou uma variável local" } // BLOCO DE FUNÇÕES
console.log(issoeumalocal)