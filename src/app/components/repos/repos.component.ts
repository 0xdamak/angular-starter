import { Component, OnInit } from '@angular/core';
import { IRepo } from 'src/app/models/repo';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  repos: IRepo[] | undefined = undefined;

  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.githubService.getRepos().subscribe((repos) => (this.repos = repos));
  }

  getPrivacyStatus(repo: IRepo) {
    switch (repo.private) {
      case true:
        return 'private';

      case false:
        return 'public';

      default:
        return '';
    }
  }
}
