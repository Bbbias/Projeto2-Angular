import { Component, OnInit } from '@angular/core';
import { dados } from '../dados';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColecoesService } from '../colecoes.service';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit {

 submitted = false
  public colecoes: dados[] = []
  constructor(private service:ColecoesService, private http: HttpClient) { }

nome!: String;
estacao!: String;
orcamento!: String;
responsavel!: String;
marca!: String;
ano!: String;
id!: Number

  ngOnInit(): void {

  }
  post(){

    let url = "http://localhost:3000/colecoes"
  
    this.http.post(url, {
      nome:this.nome,
      estacao:this.estacao,
      orcamento:this.orcamento,
      responsavel:this.responsavel,
      marca:this.marca,
      ano:this.ano
    }).toPromise().then((data:any) => {
      console.log(data)
    })
  }

  
}
 


