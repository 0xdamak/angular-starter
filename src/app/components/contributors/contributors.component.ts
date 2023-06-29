import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContributor } from 'src/app/models/contributor';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnInit {
  contributors: IContributor[] | undefined = undefined;
  sortOptions: { label: string; value: string }[] = [
    { label: 'Contributions High to Low', value: '!contributions' },
    { label: 'Contributions Low to High', value: 'contributions' },
  ];
  sortOrder!: number;

  sortField!: string;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    const { repo } = this.route.snapshot.params;

    this.githubService
      .getContributors(null, repo)
      .subscribe((contributors) => (this.contributors = contributors));

    this.sortOptions = [
      { label: 'Contributions High to Low', value: '!contributions' },
      { label: 'Contributions Low to High', value: 'contributions' },
    ];
  }

  onSortChange(event: any) {
    let value = event.value;
    console.log(value.indexOf('!'));

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  back(): void {
    this.location.back();
  }
}
