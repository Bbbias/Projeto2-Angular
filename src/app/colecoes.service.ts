import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { dados } from './dados';
import { environment } from '../environments/environment';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  dados = dados
  public colecoes: dados[] = []

  private readonly API =`${environment.API}/colecoes/`
  
  constructor(private http: HttpClient) { }


  public getColecoes(): Observable<dados[]> {
    return this.http.get<dados[]>(this.API)
  }

public delete( dados: dados) {
  return  this.http.delete(this.API + dados.id).pipe(take(1))
}

updateData(data: any, id: string): Observable<any> {
  return this.http.put(`${this.API}dados/${id}`, data)
  
}

public atualizar(dados: dados){
  const url = `${environment.API}${dados.id}`
  console.log(dados.id)
  console.log(dados);
  return this.http.put<dados>(url, dados)
}


}