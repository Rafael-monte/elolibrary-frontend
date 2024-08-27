import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Usuario } from '../../models/usuario.model';
import { MatSortModule } from '@angular/material/sort';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModel } from '../../models/dto/PaginationDTO.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatSortModule, HttpClientModule, MatIconModule, MatButtonModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  totalElements: number = 0;
  pageSize = 10;
  pageIndex = 0;
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone'];
  dataSource = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsuarios(0, 25);
  }

  ngAfterViewInit() {
    console.log(this.dataSource.data)
    this.dataSource.paginator = this.paginator;
  }

  loadUsuarios(page: number, size: number) {
    this.usuarioService.getUsuarios(page, size).subscribe((data: PaginationModel<Usuario>) => {
      this.dataSource.data = data.content?? [];
    });
  }

  onPageChange(pageEvt: PageEvent) {
    this.pageSize = pageEvt.pageSize;
    this.pageIndex = pageEvt.pageIndex;
    this.loadUsuarios(this.pageIndex, this.pageSize);
  }

  criarNovoUsuario() {
    this.router.navigate(['/usuarios/n'])
  }

}
