import { Component, EventEmitter, Input, output, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required:true}) id!:string
  @Input({required:true}) avatar!:string
  @Input({required:true}) name!:string
  @Output() select=new EventEmitter<string>()
  // select=output<string>()

  get imagePath(){
    return 'assets/user/' + this.avatar
  }
  
  onSelectUser(){
    this.select.emit(this.id)
  }
}
