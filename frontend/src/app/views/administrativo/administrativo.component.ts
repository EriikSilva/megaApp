import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { DialogExampleComponent } from 'src/app/testes/dialog-example/dialog-example.component';


@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.scss']
})
export class AdministrativoComponent implements OnInit {

  dataSource:any

  constructor(
           private service:UsuarioServiceService,
           public dialog:MatDialog,
           private router:ActivatedRoute
    ) { }

  ngOnInit(): void {


    // console.log(this.router.snapshot.paramMap.get('id'))

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

  // openDialog(){
  //   // this.dialog.open(AtualizarDialogComponent);
  // }




}
