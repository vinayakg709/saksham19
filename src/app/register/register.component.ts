import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dropdownList = [];
  selectedItems = ['Football'];
  dropdownSettings = {};
  branch : number;
  captc: boolean = false;

  year: any[] = [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id: 2, name: '3' },
    { id: 3, name: '4' },
  ];

  branches: any[] = [
    { id: 0, name: 'CSE' },
    { id: 1, name: 'IT' },
    { id: 2, name: 'CE' },
    { id: 3, name: 'ME' },
    { id: 4, name: 'ECE' },
    { id: 5, name: 'EN' },
    { id: 6, name: 'EI' },
    { id: 7, name: 'MCA' }
  ];
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captc=true;
    console.log(this.captc);
}
  constructor(private ss:ServerService, private route: Router) { }
 
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
        console.log(res);
        window.location.reload();
        // this.route.navigate(['/']);
      }
    )
    console.log(form.value);
    console.log(this.captc);
    form.reset();
    this.selectedItems=[];
    console.log(this.selectedItems);
  }

   

    selectOption(id: any) {
      this.branch = id;
      console.log(this.branch);
    }

    

}
