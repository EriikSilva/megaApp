import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {

  getParamId:any  

  adminPage = 'http://localhost:4200/admin';

  constructor(private service:UsuarioServiceService,
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {

    // console.log(this.route.snapshot.paramMap.get('id'));
    this.getParamId = this.route.snapshot.paramMap.get('id');
    console.log('@@aqui temos o id desse usuario =>', this.getParamId)

    if (this.getParamId) {
      this.service.pegarUmDado(this.getParamId).subscribe((res) => {
        console.log('res do single data => ', res.data[0])
        this.userFormAtualizar.patchValue({
          nomeUsuario: res.data[0].nomeUsuario,
          sobrenomeUsuario: res.data[0].sobrenomeUsuario,
          emailUsuario: res.data[0].emailUsuario,
          senhaUsuario: res.data[0].senhaUsuario
        });
      });
    }


  }

  userFormAtualizar = new FormGroup({
    nomeUsuario: new FormControl('', Validators.required),
    sobrenomeUsuario: new FormControl('', Validators.required),
    emailUsuario: new FormControl('', Validators.required),
    senhaUsuario: new FormControl('', Validators.required)
  })

  atualizar(){
    console.log('@@oq foi mandando no forms', this.userFormAtualizar.value);

    if(this.userFormAtualizar.valid){
      this.service.atualizarUmDado(this.userFormAtualizar.value, this.getParamId)
      .subscribe((res) => {
        alert(res.message);
        location.assign(this.adminPage)
      });
    };

  };

}
