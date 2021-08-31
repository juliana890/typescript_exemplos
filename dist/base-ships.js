"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
//---------- EXEMPLOS DE CLASSES E INTERFACES ----------
//Quando colocamos a palavra export nossa classe já passa a ser um módulo
var Spacecraft = /** @class */ (function () {
    //O ts cria o atributo propulsor na nossa classe
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    //Para criarmos métodos não precisamos colocar "function"
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        //Para chamarmos o membro da instância utilizamos a palavra "this"
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
//Dessa forma exportamos tudo de uma vez só
//export{Spacecraft, Containership}
