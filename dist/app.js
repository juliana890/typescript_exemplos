"use strict";
exports.__esModule = true;
//Precisamos importar as referências para sanar os erros de compilação
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//Importanto o Lodash
var _ = require("lodash");
//Teste de utilização de função do Lodash
//pad precisa dos parâmetros tamanho do que vc quer completar além do texto e os caracteres que vc quer completar tanto antes quanto depois
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
