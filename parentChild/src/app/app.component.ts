import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'parentChild';

  EnterName = 'John doe';
  enterAge = "22";
  enterStatus = "Single";

  parentData1 = "";
  parentData2 = "";
  parentData3 = "";

  transferData(){
    this.parentData1 = this.EnterName;
    this.parentData2 = this.enterAge;
    this.parentData3 = this.enterStatus;
  }

  value = "";
  sendData(value:string){
    this.value = value;
  }

}
