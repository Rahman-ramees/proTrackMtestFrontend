import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
  standalone: true,
})
export class ModalComponentComponent implements OnInit {
  @Input() inputData: any

  constructor(public dialogRef: MatDialogRef<ModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  ngOnInit(): void {}
  
  closeDialog(): void {
    this.dialogRef.close()
  }
}