import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any;
  constructor(private ss: ServerService) { }

  ngOnInit() {
    this.ss.getRegister().subscribe(
      res=>{
        console.log(res);
        this.data = res;
      }
    )
  }

}
