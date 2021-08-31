//Precisamos importar as referências para sanar os erros de compilação
import{Spacecraft, Containership} from './base-ships';
import{MillenniumFalcon} from './starfighters';

//Importanto o Lodash
import * as _ from 'lodash'
//Teste de utilização de função do Lodash
//pad precisa dos parâmetros tamanho do que vc quer completar além do texto e os caracteres que vc quer completar tanto antes quanto depois
console.log(_.pad("Typescript Examples", 40, "="));

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob( falcon ) ? 'YES' : 'NO' }`);