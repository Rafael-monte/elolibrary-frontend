import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioInputDto } from '../../models/dto/input/UsuarioInputDto';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criacao',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  templateUrl: './criacao.component.html',
  styleUrl: './criacao.component.css'
})
export class CriacaoComponent {

  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    const usuarioInputDto: UsuarioInputDto = new UsuarioInputDto();
    usuarioInputDto.email = this.usuarioForm.get('nome')?.value;
    usuarioInputDto.nome = this.usuarioForm.get('nome')?.value;
    usuarioInputDto.senha = this.usuarioForm.get('senha')?.value;
    usuarioInputDto.telefone = this.usuarioForm.get('telefone')?.value;

    this.usuarioService.saveNewUsuario(usuarioInputDto).subscribe(res => {
      this.router.navigate(['']);
      this.snackBar.open('Usuário salvo com sucesso.', 'Fechar', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['success-snackbar']
      });
    }, (error) => {
      this.snackBar.open('Houve um erro ao salvar os dados. Tente novamente mais tarde.', 'Fechar', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
      });
    })


  }

}
