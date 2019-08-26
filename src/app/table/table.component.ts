import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any;
  constructor(private ss: ServerService, private router: Router) { }

  ngOnInit() {
    this.ss.getRegister(this.ss.getAdminToken()).subscribe(
      res=>{
        // console.log(res);
        this.data = res;
      }
    )

  }

  check() {
    if(!this.ss.adminLoggedIn()){
      this.router.navigate([''])
    }else{
      return true;
    }
  }

  logout(){
    this.ss.removeAdminToken();
    window.location.reload();
    this.router.navigate(['']);
  }

  onDelete(pi:string){

    // console.log({pi});
    this.ss.postDelete({pi}).subscribe(
      res=>{
        console.log('deleted');
        this.ss.getRegister(this.ss.getAdminToken()).subscribe(
          res2 => {
            this.data = res2;
          },
          err=>{
            // console.log(err);
          }
        )
      }, err => {
        // console.log(err);
      }
    )
  }
}
