import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  paginaPrincipal = 'http://localhost:4200/';

  constructor(private cadastroService: UsuarioServiceService) { }

  ngOnInit(): void {
  }

  
  userCadastroForm = new FormGroup({
    emailUsuario: new FormControl('', Validators.required),
    senhaUsuario: new FormControl('', Validators.required),
    nomeUsuario: new FormControl('', Validators.required),
    sobrenomeUsuario: new FormControl('', Validators.required)
  })


  cadastrarUsuario(){
      if(this.userCadastroForm.valid){
        console.log('O que foi mandado no forms de cadastro', this.userCadastroForm.value);

        this.cadastroService.criarUsuario(this.userCadastroForm.value)
        .subscribe((res) => {
          alert(res.message);

          //location.assign('http://localhost:4200/');

        })
      }
  }

}
