//Precisamos importar as referências para sanar os erros de compilação
import{Spacecraft, Containership} from './base-ships';

//Herança
export class MillenniumFalcon extends Spacecraft implements Containership {
    //Implementamos o atríbuto cargoContainers da nossa interface Containership
    cargoContainers: number;

    //Utilizamos a palavra super pois ela estende da super classe nesse caso a Spacecraft
    constructor(){
        super('hyperdrive');
        this.cargoContainers = 2;
    }

    //Sobrescrevendo o método
    jumpIntoHyperspace(){
        //Se o valor do random for maior ou igual 0.5 a nave entra no super espaço
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log('Failed to jump into hyperspace');
        }
    }
}