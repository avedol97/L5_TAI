import {Router, ActivatedRoute} from '@angular/router';
import {Component, EventEmitter, OnInit, Output} from
    '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText: string | undefined;

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){ }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter();
    });
  }

  sendFilter() {
    this.router.navigate(['/blog'], {queryParams: {name:
        this.filterText}});
    this.name.emit(this.filterText);
  }

}
