import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MockDataService } from './mock-data.service';
import { Observable } from 'rxjs';
import { AddCommaPipe } from './add-comma.pipe'; // Import the pipe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCommaPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  mockedData$!: Observable<any[]>;
  data!: any;
  apiErr:any;  
  sortedTariffs: any[] | undefined;
  isLoading = true;
  title = 'insurance-challange';
  sortOrder:any;
  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.fetchData().subscribe(data => {
      this.data = data;
      this.sortedTariffs = [...data]; // Initial sorting

    },
    err =>
      this.apiErr= err
  );  
  }

  sortTariffsBy(attribute: string) {
    this.sortOrder = !this.sortOrder;
    this.sortedTariffs = this.data.sort((a:any, b:any) => {
      if (a[attribute] > b[attribute]) {
        return this.sortOrder ? 1 : -1;
      } else if (a[attribute] < b[attribute]) {
        return this.sortOrder ? -1 : 1;
      }
      return 0;
      
    });

    this.data = this.sortedTariffs;
  }

}
