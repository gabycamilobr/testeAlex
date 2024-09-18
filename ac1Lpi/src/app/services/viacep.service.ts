import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private http: HttpClient) {}
  buscarCep(cep: string): Observable <any> {
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
  buscarEndereco(uf: string, cidade: string, logradouro: string): Observable <any> {
  return this.http.get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`);
  }
  }
