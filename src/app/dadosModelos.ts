import { Optional } from "@angular/core";

export class dadosModelos {
    id: Number;
    nomeModelo: String;
    tipo: Selection;
    bordado: Boolean;
    responsavel: String;
    colecao: String;
    estampa: Boolean;

constructor(id: Number, nomeModelo: String, tipo: Selection, bordado: Boolean, responsavel: String, colecao: String, estampa: Boolean,){

    this.id = id;
    this.nomeModelo = nomeModelo;
    this.tipo = tipo;
    this.bordado = bordado;
    this.responsavel = responsavel;
    this.colecao = colecao;
    this.estampa = estampa;
}
}