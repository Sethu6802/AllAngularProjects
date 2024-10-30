import { Component } from '@angular/core';

@Component({
  selector: 'app-jwt-component',
  templateUrl: './jwt-component.component.html',
  styleUrls: ['./jwt-component.component.css']
})
export class JwtComponentComponent {

  onSubmit(){
    console.log("Form submitted");
  }

}