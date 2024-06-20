import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, CommonModule, FormsModule],
})
export class AppComponent implements OnInit {
  inputString = '';
  ngOnInit(): void {}
  title = 'textutils';
  bgMode = 'light';
  words = this.inputString.split(/\s+/).filter((item:string) => item.length > 0).length
  duration = this.inputString.split(" ").filter((element)=>{return element.length!==0}).length * 0.008

  
  changeBgMode() {
    if (this.bgMode == 'light') this.bgMode = 'dark';
    else this.bgMode = 'light';

    document.body.style.backgroundColor =
      this.bgMode == 'light' ? '#ffffff' : '#000000';

    console.debug('Current Mode', this.bgMode);
  }

  convertToUppercase() {
    this.inputString = this.inputString.toUpperCase();
  }
  convertToLowercase() {
    this.inputString = this.inputString.toLowerCase();
  }
  clear() {
    this.inputString = '';
  }

  copyText() {
    navigator.clipboard.writeText(this.inputString);
  }

  convertToCapitalize() {
    this.inputString =
      this.inputString.charAt(0).toUpperCase() +
      this.inputString.substring(1).toLowerCase();
  }

  toggleCase() {
    let temp = ""
    for (let index = 0; index < this.inputString.length; index++) {
      if (this.inputString[index] == this.inputString[index].toUpperCase()) {
        temp += this.inputString[index].toLowerCase();
      }else{
        temp += this.inputString[index].toUpperCase()
      }
    }
    this.inputString = temp
  }

  calculateStats(){
    console.debug("on Changes")
    this.words = this.inputString.split(" ").filter((item:string) => item.length > 0).length

    this.duration = this.inputString.split(" ").filter((element)=>{return element.length!==0}).length * 0.008
  }
}
