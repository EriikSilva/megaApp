import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.scss']
})
export class AdministrativoComponent implements OnInit {

  dataSource:any

  constructor(private service:UsuarioServiceService) { }

  ngOnInit(): void {

    this.service.getAllDataUser()
    .subscribe((res) => {
      console.log(res.data)
      this.dataSource = res.data;
    });

  }

  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'senha', 'options'];
  

  deleteID(id:any){
    //console.log(id, '@@ID aqui');

    this.service.deletarUmDado(id).subscribe((res) => {

      console.log(res.message, '@@res aqui');
      alert(res.message);
      
      // this.getAllData();
      location.reload()
    });
  }



}
