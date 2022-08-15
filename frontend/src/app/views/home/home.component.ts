import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  entrarURL = 'http://localhost:4200/principal'

  teste:any;

  constructor(private service:UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.getAllDataUser()
    .subscribe((res) => {
      
    })
  };

  userForm = new FormGroup({
    emailUsuario: new FormControl('', Validators.required),
    senhaUsuario: new FormControl('', Validators.required)
  })


  entrar(){

    

 this.service.pegarUmDado(this.userForm.value)
 .subscribe((res) => {
  console.log(res)
 })


  console.log(this.userForm.value);
    
 

  }



}
