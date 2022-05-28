import { Component, OnInit } from '@angular/core';
import { dados } from '../dados';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelosService } from '../modelos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { dadosModelos } from '../dadosModelos';


@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  public modelos: dadosModelos[] = []
  nome!: String
  url = "http://localhost:3000/colecoes";

  id!: Number;
  nomeModelo!: String;
  tipo!: Selection;
  bordado!: Boolean;
  responsavel!: String;
  colecao!: String;
  estampa!: Boolean;

  constructor(
    private service: ModelosService, 
    private http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getmodelos()
    .subscribe(
      retorno => {
        this.modelos = retorno.map(func => {
          return new dadosModelos(
            func.id,
            func.nomeModelo,
            func.tipo,
            func.bordado,
            func.responsavel,
            func.colecao,
            func.estampa
          )
        }
          )
      }
    )
  }
  

  ondelete(dadosModelos: dadosModelos) {
this.service.delete(dadosModelos).subscribe(
  (resp) => {
    console.log(resp)

  }
)
}

public onAtualizar() {
  this.router.navigate(['editasColecao'])
}

}