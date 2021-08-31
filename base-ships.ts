//---------- EXEMPLOS DE CLASSES E INTERFACES ----------
//Quando colocamos a palavra export nossa classe já passa a ser um módulo
export class Spacecraft {
    //O ts cria o atributo propulsor na nossa classe
    constructor (public propulsor: string){}

    //Para criarmos métodos não precisamos colocar "function"
    jumpIntoHyperspace(){
        //Para chamarmos o membro da instância utilizamos a palavra "this"
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

export interface Containership {

    cargoContainers: number

}

//Dessa forma exportamos tudo de uma vez só
//export{Spacecraft, Containership}