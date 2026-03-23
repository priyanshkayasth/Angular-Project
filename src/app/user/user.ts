import { Component, EventEmitter, Input, output, Output } from '@angular/core';

// type Users = {
//   id: string,
//   name: string,
//   avatar: string
// }

interface Users {
  id: string,
  name: string,
  avatar: string
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // @Input({required:true}) id!:string
  // @Input({required:true}) avatar!:string
  // @Input({required:true}) name!:string

  @Input({ required: true }) user!: Users
  @Output() select = new EventEmitter<string>()
  // select=output<string>()

  get imagePath() {
    return 'assets/user/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
