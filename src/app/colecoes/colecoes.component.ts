import { Component, OnInit } from '@angular/core';
import { dados } from '../dados';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColecoesService } from '../colecoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent implements OnInit {

  public colecoes: dados[] = []
  nome!: String
  url = "http://localhost:3000/colecoes";

  constructor(
    private service: ColecoesService, 
    private http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getColecoes()
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
  

  ondelete(dados: dados) {
this.service.delete(dados).subscribe(
  (resp) => {
    console.log(resp)

  }
)
}

public onAtualizar() {
  this.router.navigate(['editasColecao'])
}

}
