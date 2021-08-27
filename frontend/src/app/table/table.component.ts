import { TableService } from './services/table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'genre1', 'genre2', 'year'];
  dataSource: Array<any> = []

  constructor(private TableService: TableService) { }

  fetchData(query?: string) {
    return this.TableService.get(query).subscribe(res => {
      this.dataSource = res
    })
  }

  sortByYear() {
    this.fetchData('sortBy=year')
  }

  sortByGenre1() {
    this.fetchData('sortBy=genre1')
  }

  sortByGenre2() {
    this.fetchData('sortBy=genre2')
  }

  ngOnInit(): void {
    this.fetchData()
  }

}
