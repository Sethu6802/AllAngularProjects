import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output()
  public sendData = new EventEmitter<string>();

  childMessage(){
    setTimeout(()=>{this.sendData.emit('Hello from About Component')},1000);
  }
}
