import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BudgetItem } from '../shared/model/budget-item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  //@Input() item:BudgetItem;

  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem  ) {
      
     }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:BudgetItem){
    this.dialogRef.close(updatedItem);
  }

}
