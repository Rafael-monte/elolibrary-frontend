import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { PaginationModel } from '../models/dto/PaginationDTO.model';
import { UsuarioInputDto } from '../models/dto/input/UsuarioInputDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(page: number, size: number): Observable<PaginationModel<Usuario>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginationModel<Usuario>>(this.baseUrl, { params })
  }

  saveNewUsuario(usuario: UsuarioInputDto): Observable<void> {
    return this.http.post<void>(this.baseUrl, usuario);
  }
}