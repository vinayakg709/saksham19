import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private ss:ServerService) { }
 
  ngOnInit() {

    this.dropdownList = [
      'Football','Basketball','Kho-kho','Cricket'
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

  onSubmit(form : NgForm){
    this.ss.postRegister(form.value).subscribe(
      res => {
        console.log(res)
      }
    )
    console.log(form.value);

    form.reset();
    
  }

  resetSelection() {
    this.selectedItems = [];        
    }

}
