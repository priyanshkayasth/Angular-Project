import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Users } from './user.model';
import { Card } from '../shared/card/card';

// type Users = {
//   id: string,
//   name: string,
//   avatar: string
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // @Input({required:true}) id!:string
  // @Input({required:true}) avatar!:string
  // @Input({required:true}) name!:string

  @Input({ required: true }) user!: Users
  @Input({ required: true }) selected!: boolean
  @Output() select = new EventEmitter<string>()
  // select=output<string>()

  get imagePath() {
    return 'assets/user/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
