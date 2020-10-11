import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { BudgetItem } from '../shared/model/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {


  @Input() items: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();


  constructor(public matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  ondelete(item: BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem){
    
      const dialog = this.matDialog.open(EditItemComponent,{
        width: '580px',
        data: item
      });

      dialog.afterClosed().subscribe(
        result => {
          if(result){
            // result = updated item
            this.update.emit({
              old: item,
              new: result
            })
            //replace with item wich contains new values
          

          } //if
        }
      )

  }



}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

