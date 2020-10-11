import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/app/shared/model/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item:  BudgetItem;
  @Output() deleteButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteButtonClick.emit();
  }

  onCardClick(){
      this.cardClick.emit();
  }

}
