import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class FormService {


  public url;
  
  constructor(
    private _http: HttpClient,
  ) { 
    this.url = GLOBAL.url;
  }

  get_departamentos(filtro):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'departamentos/'+filtro,{headers:headers});
  }

  get_paises():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'paises',{headers:headers});
  }

  insert_departamento(data){
    const fd = new FormData();
    fd.append('nombre',data.nombre);
    fd.append('idpais',data.idpais);
    return this._http.post(this.url + 'departamento/registrar',fd);
  }


  get_departamento(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'departamento/'+id,{headers:headers});
  }

  update_departamento(data){
    const fd = new FormData();
    fd.append('nombre',data.nombre);
    fd.append('idpais',data.idpais);
    return this._http.put(this.url + 'departamento/editar/'+data._id,fd);
  }

  insert_pais(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'pais/registrar',data,{headers:headers});
  }

  delete_departamento(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'departamento/'+id,{headers:headers});
  }

}
