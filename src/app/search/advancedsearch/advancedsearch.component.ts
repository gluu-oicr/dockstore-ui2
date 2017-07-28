import { AdvancedSearchObject } from './../../shared/models/AdvancedSearchObject';
import { AdvancedSearchService } from './advanced-search.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  NOTFilter: string;
  ANDNoSplitFilter: string;
  ANDSplitFilter: string;
  ORFilter: string;
  constructor(private advancedSearchService: AdvancedSearchService) { }

  ngOnInit() {
    this.advancedSearchService.advancedSearch$.subscribe((advancedSearch: AdvancedSearchObject) => {
      this.ANDNoSplitFilter = advancedSearch.ANDNoSplitFilter;
      this.ANDSplitFilter = advancedSearch.ANDSplitFilter;
      this.ORFilter = advancedSearch.ORFilter;
      this.NOTFilter = advancedSearch.NOTFilter;
    });
  }

  advancedSearch(): void {
    const advancedSearch: AdvancedSearchObject = {
      ANDNoSplitFilter: this.ANDNoSplitFilter,
      ANDSplitFilter: this.ANDSplitFilter,
      ORFilter: this.ORFilter,
      NOTFilter: this.NOTFilter,
      toAdvanceSearch: true
    };
    this.advancedSearchService.setAdvancedSearch(advancedSearch);
  }

  clearAll(): void {
    const advancedSearch: AdvancedSearchObject = {
      ANDNoSplitFilter: '',
      ANDSplitFilter: '',
      ORFilter: '',
      NOTFilter: '',
      toAdvanceSearch: false
    };
    this.advancedSearchService.setAdvancedSearch(advancedSearch);
  }
}