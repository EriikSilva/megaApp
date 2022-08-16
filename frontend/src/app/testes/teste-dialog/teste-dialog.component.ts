import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-teste-dialog',
  templateUrl: './teste-dialog.component.html',
  styleUrls: ['./teste-dialog.component.scss']
})
export class TesteDialogComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }

}
