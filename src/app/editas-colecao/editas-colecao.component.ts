import { Component, OnInit } from '@angular/core';
import { dados } from '../dados';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColecoesService } from '../colecoes.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-editas-colecao',
  templateUrl: './editas-colecao.component.html',
  styleUrls: ['./editas-colecao.component.scss']
})
export class EditasColecaoComponent implements OnInit {

  constructor(private service:ColecoesService, private http: HttpClient) { }

nome!: String;
estacao!: String;
orcamento!: String;
responsavel!: String;
marca!: String;
ano!: String;

form!: FormGroup;
submitted = false
 public colecoes: dados[] = []

  ngOnInit(): void {
    
  }

  updateData(value: any) {
    let url = 'http://localhost:3000/colecoes'
    let body = {
      id: value.id,
      nome: this.nome,
      ano: value.ano
    }

    this.service.updateData(body, '')
      .subscribe(response => {
        console.log(response)
      })
  }

}
