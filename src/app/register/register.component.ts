import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  onSubmit(form : NgForm){
    console.log(form);
  }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'Football' },
      { item_id: 2, item_text: 'Basketball' },
      { item_id: 3, item_text: 'Kho-kho' },
      { item_id: 4, item_text: 'Athletics' },
      { item_id: 5, item_text: 'Cricket' },
      { item_id: 6, item_text: 'Power lifting' },
      { item_id: 7, item_text: 'Badminton' },
      { item_id: 8, item_text: 'Kabaddi' },
      { item_id: 9, item_text: 'Volleyball' },
      { item_id: 10, item_text: 'Pool' },
      { item_id: 11, item_text: 'Table Tennis' },
      { item_id: 12, item_text: 'Tg of War' },
      { item_id: 13, item_text: 'Chess' },
      { item_id: 14, item_text: 'Carrom' },
      { item_id: 15, item_text: 'Obstacle Race' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
