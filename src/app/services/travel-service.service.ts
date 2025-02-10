import { Injectable } from '@angular/core';
import { Observable, of, delay, BehaviorSubject, tap } from 'rxjs';

export interface Destination {
  id: number;
  name: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TravelServiceService {

  private _destinations = new BehaviorSubject<Destination[]>([]);
  destinations$ = this._destinations.asObservable();

  constructor() { }

  getDestinations(): Observable<Destination[]> {
    return of([
      { id: 1, name: "Paris", date: "2024-06-15" },
      { id: 2, name: "Tokyo", date: "2024-07-20" },
      { id: 3, name: "New York", date: "2024-05-10" }
    ]).pipe(
      delay(1000),  // Simulate API delay
      tap((dests) => this._destinations.next(dests))
    );
  }

  addDestination(destination: Pick<Destination, 'name' | 'date'>){
    const dests = this._destinations.value;
    const id = dests.length ? dests[dests.length - 1].id + 1 : 1;
    this._destinations.next([...this._destinations.value, { ...destination, id }]);
  }

  removeDestination(id: number) {
    this._destinations.next(this._destinations.value.filter(dest => dest.id !== id));
  }
}
