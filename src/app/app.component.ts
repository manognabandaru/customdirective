import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value: boolean = false;
  list=[];
  num: number = 0;
  clear;
 
 
  constructor (){
    this.test();
    }
  
    test(){
    this.clear = setInterval(()=>{
        this.num = this.num + 1;
        console.log(this.num);
      this.list.push(this.num);
      },500);  
  
    }
  
    stop(){
      clearInterval(this.clear);
    }

}
