import { Component, OnInit } from '@angular/core';
import { ColecoesService } from '../colecoes.service';
import { dados } from '../dados';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  NquantC!: Number
  NquantM!: Number
  preco!: Number

  public id:any = []=[]

  public colecoes: dados[] = []
  constructor(private colecoesService: ColecoesService) { }

  ngOnInit(): void {
    this.colecoesService.getColecoes()
    .subscribe(
      retorno => {
        this.colecoes = retorno.map(func => {
          return new dados(
            func.id,
            func.nome,
            func.estacao,
            func.orcamento,
            func.responsavel,
            func.marca,
            func.ano
          )
        }
          )
      }
    )
  }
}