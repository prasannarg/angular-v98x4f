import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  private time_now: string;
  constructor()
  {
    setInterval( ()=>{
      let time_var = new Date();
      this.time_now = time_var.toTimeString();
    },1000
    )

  }
  ngOnInit(){
    
  };
  name = 'Prasanna';
}
