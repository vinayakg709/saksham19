import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dropdownList = [];
  selectedItems = ['Football'];
  dropdownSettings = {};
  branch : string;
  captc: boolean = false;
  selected:any;
  selectedyear:any;
  recap:any;
  isHidden:any;
  resetSelection: any;

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
    { id: 7, name: 'MCA' },
    { id: 8, name: 'MBA' }
  ];
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captc=true;
    // console.log(this.captc);
}
  constructor(private ss:ServerService, private route: Router) { }
 
  ngOnInit() {

    this.dropdownList = [
      'Football','Basketball','Kho-kho','Cricket','Badminton','Athletics','Kabaddi','Pool','Power Lifting',
      'Volleyball','Table Tennis', 'Tug Of War','Chess', 'Carrom', 'Obstacle Race'
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
        // console.log(res);
        Swal.fire({
          title: 'Successfully Registered',
          text: 'You will be notified for your Slot timing.',
          type: 'success',
          confirmButtonText: 'Ok'
        })
        // window.location.reload();
        // this.route.navigate(['/']);
        // document.getElementById("top")
      }
    )
    // console.log(form.value);
    // console.log(this.captc);
    form.reset();
    this.selectedItems=[];
    // console.log(this.selectedItems);
  }

   

    selectOption(id: any) {
      this.branch = id;
      // console.log(this.branch);
    }

    

}
