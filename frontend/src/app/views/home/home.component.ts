import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.getAllDataUser()
    .subscribe((res) => {
      console.log('@ Todos os usuarios => ', res.data)
    });
  };


  






}
