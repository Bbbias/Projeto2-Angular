import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { dadosModelos } from './dadosModelos';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  dadosModelos = dadosModelos
  public modelos: dadosModelos[] = []

  private readonly API =`${environment.API}/modelos/`

  constructor(private http: HttpClient) { }

  public getmodelos(): Observable<dadosModelos[]> {
    return this.http.get<dadosModelos[]>(this.API)
  }

public delete( dadosModelos: dadosModelos) {
  return  this.http.delete(this.API + dadosModelos.id).pipe(take(1))
}

updateData(data: any, id: string): Observable<any> {
  return this.http.put(`${this.API}dadosModelos/${id}`, data)
  
}

public atualizar(dadosModelos: dadosModelos){
  const url = `${environment.API}${dadosModelos.id}`
  console.log(dadosModelos.id)
  console.log(dadosModelos);
  return this.http.put<dadosModelos>(url, dadosModelos)
}


}