import { Component, OnInit } from '@angular/core';
import {RepoService} from './repo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [RepoService]
})
export class ReposComponent implements OnInit {
  private login: string;
  private repos: any;
  constructor(private repoService: RepoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => this.login = param.login);
    this.repoService.getUserRepos(this.login)
        .subscribe(data => this.repos = data);
  }

}
