import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import {User} from '../users-detail/user';
@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  @Output() searchedUser = new EventEmitter<User[]>();
  private users: any;
  private userSize: number;

  searchUsersForm = this.fb.group({
      searchUser: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    const text = this.searchUsersForm.get('searchUser').value;
    this.userService.searchUsers(text)
        .subscribe(users => {
          this.userSize = users.length;
          this.searchedUser.emit(users);
        });
  }

  clearUser() {
    this.userService.getUsers()
        .subscribe((users: any) => {
          this.searchedUser.emit(users);
          this.searchUsersForm.get('searchUser').setValue('');
        });
  }
}
