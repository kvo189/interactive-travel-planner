import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, combineLatest, filter, map, tap } from 'rxjs';
import { Destination, TravelServiceService } from 'src/app/services/travel-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm$ = new BehaviorSubject<string>('');
  sortBy$ = new BehaviorSubject<"" | 'asc' | 'desc'>('asc');

  destinationForm = this.fb.group({
    name: [''],
    date: ['']
  });
  destinations$ = combineLatest([
    this.travelService.destinations$,
    this.searchTerm$,
    this.sortBy$
  ]).pipe(
    map(([dests, term, sortBy]) => {
      return dests
        .filter(dest => dest.name.toLowerCase().includes(term.toLowerCase()))
        .sort((a, b) => {
          if (!sortBy) return 0;
          // return sortBy === 'asc'
          //   ? a.name.localeCompare(b.name)
          //   : b.name.localeCompare(a.name);
          return sortBy === 'asc'
            ? new Date(a.date).getTime() - new Date(b.date).getTime()
            : new Date(b.date).getTime() - new Date(a.date).getTime();
        })
    }),
    tap((dests) => console.log(dests))
  );

  constructor(
    private travelService: TravelServiceService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.travelService.getDestinations().subscribe();
  }

  addDestination() {
    if (!this.name || !this.date) {
      return;
    }
    this.travelService.addDestination({
      name: this.name,
      date: this.date,
    })
    this.destinationForm.reset();
  }

  removeDestination(id: number) {
    this.travelService.removeDestination(id);
  }

  onSearchTermChange(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchTerm$.next(searchTerm);
  }

  onSort(event: Event) {
    const sort = (event.target as HTMLSelectElement).value;
    this.sortBy$.next(sort === 'asc' ? 'asc' : 'desc');
  }

  get name() {
    return this.destinationForm.get('name')?.value || '';
  }

  get date() {
    return this.destinationForm.get('date')?.value || '';
  }


}
