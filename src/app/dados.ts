export class dados {
    id: Number;
    nome: String;
    estacao: String;
    orcamento: String;
    responsavel: String;
    marca: String;
    ano: Number;

constructor(id: Number, nome: String, estacao: String, orcamento: String, responsavel: String, marca: String, ano: Number,){

    this.id = id;
    this.nome = nome;
    this.estacao = estacao;
    this.orcamento = orcamento;
    this.responsavel = responsavel;
    this.marca = marca;
    this.ano = ano;
}
}