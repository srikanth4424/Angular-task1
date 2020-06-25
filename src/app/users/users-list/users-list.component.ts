import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService]
})
export class UsersListComponent implements OnInit {
  private users: any = [];
  private loading: boolean = true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users =>{
          this.users = users;
          this.loading = false;
        });
  }

  onSearchUser(users) {
    this.users = users;
    this.loading = false;
  }
}
