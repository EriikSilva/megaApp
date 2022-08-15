import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  nomeUsuario:any;


  constructor(private _http:HttpClient, private service:UsuarioServiceService) { }

  ngOnInit(): void {

    this.service.getAllDataUser().subscribe((res) => {
      //console.log('@@Dados aqui =>',res.data)

      this.nomeUsuario = res.data[0].nomeUsuario;

    });

  };





}
