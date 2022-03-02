import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public places: Place[] = [
    new Place(
      1,
      'Manhattan',
      'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      'Experience Manhattan in an elegant way.',
      500
    ),
    new Place(
      2,
      'Queens',
      'https://images.unsplash.com/photo-1612388936941-21f5530b8457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2224&q=80',
      'Come to Queens for a great time.',
      500
    ),
    new Place(
      3,
      'Brooklyn',
      'https://images.unsplash.com/photo-1573261658953-8b29e144d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'Fuggedaboutit!!!!',
      500
    ),
    new Place(
      4,
      'Staten Island',
      'https://images.unsplash.com/photo-1608476674619-3cbb17e1c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      'Borough of Parks in NYC.',
      500
    ),
    new Place(
      5,
      'Bronx',
      'https://images.unsplash.com/photo-1554254950-3667414ee579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      'Home of the Bronx Zoo.',
      500
    ),
  ];
  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: number) {
    return { ...this.places.find((item) => item.id === id) };
  }
}

export class Place {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public description: string,
    public price: number
  ) {}
}
