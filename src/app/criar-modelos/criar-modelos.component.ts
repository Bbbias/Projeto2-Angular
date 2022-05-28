import { Component, OnInit } from '@angular/core';
import { dados } from '../dados';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColecoesService } from '../colecoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-modelos',
  templateUrl: './criar-modelos.component.html',
  styleUrls: ['./criar-modelos.component.scss']
})
export class CriarModelosComponent implements OnInit {


 submitted = false
  public colecoes: dados[] = []
  constructor(private service:ColecoesService, private http: HttpClient, private router: Router) { }

  id!: Number;
  nomeModelo!: String;
  tipo!: Selection;
  bordado!: Boolean;
  responsavel!: String;
  colecao!: String;
  estampa!: Boolean;

  ngOnInit(): void {

  }
  post(){

    let url = "http://localhost:3000/modelos"
  
    this.http.post(url, {
      nomeModelo:this.nomeModelo,
      tipo:this.tipo,
      bordado:this.bordado,
      responsavel:this.responsavel,
      colecao:this.colecao,
      estampa:this.estampa
    }).toPromise().then((data:any) => {
      console.log(data)
      return this.router.navigate(['modelos'])
    })
  }

  
}