/* --------------------------------------------------------------------------------------------------------
//---------- EXEMPLOS VARIÁVEIS ----------
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);

//Criamos a variável com tipo number para bloquear esse tipo de erro passamos o noEmitOnError no json
//episode = '4';

let episode: number = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next episode is " + episode);

let favoriteDroid
favoriteDroid = "BB-8";
console.log("My favorite droid is " + favoriteDroid);

//---------- EXEMPLOS FUNÇÕES ----------
//Nas funções em ts podemos colocar tipos e também podemos tipar o retorno
let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12;
}

//No ts utilizamos "``" Template String: Pois ela nos permite trabalhar com a tipagem das variáveis
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2');

//Parâmetros padrões
function inc (speed: number, inc: number = 1) : number {
    return speed + inc;
}
console.log(`inc (5, 1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`);

//---------- EXEMPLOS VARIÁVEIS ----------
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
//Criamos a variável com tipo number para bloquear esse tipo de erro passamos o noEmitOnError no json
//episode = '4';
var episode = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite droid is " + favoriteDroid);
//---------- EXEMPLOS FUNÇÕES ----------
//Nas funções em ts podemos colocar tipos e também podemos tipar o retorno
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
//No ts utilizamos "``" Template String: Pois ela nos permite trabalhar com a tipagem das variáveis
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
//Parâmetros padrões
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
---------------------------------------------------------------------------------------------------------------------------------*/ 
