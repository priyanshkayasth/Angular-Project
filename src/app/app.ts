import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy.users';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,User,Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=DUMMY_USERS
  selectedUserId?:string

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserId)
  }

  onSelectUser(id:string){
    this.selectedUserId=id
  }

}
