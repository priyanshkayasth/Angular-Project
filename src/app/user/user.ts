import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selected_users=signal(DUMMY_USERS[randomIndex]);
  imagePath=computed(()=>'assets/user/'+this.selected_users().avatar)

  //getter

  // get imagePath(){
  //   return 'assets/user/' + this.selected_users.avatar
  // }

  onSelectUser(){
    //Managing Data
    const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    // this.selected_users=DUMMY_USERS[randomIndex]
    this.selected_users.set(DUMMY_USERS[randomIndex])

  }
}
