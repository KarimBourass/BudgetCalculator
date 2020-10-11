import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { BudgetItem } from '../shared/model/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  items: BudgetItem[] = new Array<BudgetItem>();
  budget: number=0;

  constructor() { }

  ngOnInit() {
    for(let item of this.items){
      this.budget +=item.amount;
    }    
  }


  addItem(item: BudgetItem){
      this.items.push(item);
      this.budget += item.amount;
  }

  deleteItem(item: BudgetItem){
    let index = this.items.indexOf(item);
    this.items.splice(index,1)
    this.budget -= item.amount;
  }

  
    
    updateBudget(updateItem: UpdateEvent){
      // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.items[this.items.indexOf(updateItem.old)] = updateItem.new;

    // update the total budget
    this.budget -= updateItem.old.amount;
    this.budget += updateItem.new.amount;




    }


  

}
