import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private _http:HttpClient) { }


  //conexao com o backend
  apiUrl = 'http://localhost:3000/usuarios/'

  //metodo get
  getAllDataUser():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  //metodo post
  criarUsuario(dado:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`, dado)
  }

  //pegar um dado
  pegarUmDado(id:any):Observable<any>{
    let ids = id

    return this._http.get(`${this.apiUrl}${ids}`);
  }


  //deletarDado
  deletarUmDado(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}${ids}`)
  }

  //metodo put (atualizar)
  atualizarUmDado(dado: any, id:any):Observable<any>{
    let ids = id;

    return this._http.put(`${this.apiUrl}${ids}`, dado)
  }

}
