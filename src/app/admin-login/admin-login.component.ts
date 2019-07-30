import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private ss:ServerService, private router:Router) { }
  token:any;
  data:any;
  ngOnInit() {
    
  }

  onAdmin(form : NgForm){
    this.ss.postAdmin(form.value).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.token = this.data.token;
        this.ss.setAdmintoken(this.token);
        this.router.navigate(['/admin']);
      }, err => {
        console.log(err);
      }
    )
    console.log(form.value);
    form.reset();
  }

}
