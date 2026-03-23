import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input() avatar!:string
  @Input() name!:string

  get imagePath(){
    return 'assets/user/' + this.avatar
  }
  
  onSelectUser(){
   
  }
}
