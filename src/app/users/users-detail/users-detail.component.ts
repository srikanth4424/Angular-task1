import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
  providers: [UserService]
})
export class UsersDetailComponent implements OnInit {
  private login: number;
  private loading:boolean = true;
  private user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.params.subscribe(param => this.login = param.login);
    this.userService.getUser(this.login)
        .subscribe((user: User) => {
          this.user = user;
          this.loading = false;
        });
  }
}
