import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: IUser | undefined = undefined;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    const { name } = this.route.snapshot.params;

    this.githubService.getUser(name).subscribe((user) => (this.user = user));
  }

  back(): void {
    this.location.back();
  }
}
