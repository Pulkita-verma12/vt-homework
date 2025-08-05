import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Myservice {
  constructor(private http: HttpClient) { }
  getMessage(): string {
    return 'Hello from myservice!';
  }

  getEmployees() {
    return [
      { "id": 1, "Name": "Priyal", "age": 19 },
      { "id": 2, "Name": "Shreyansh", "age": 20 },
      { "id": 3, "Name": "Garv", "age": 20 }
    ];
  }
  getData(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}


export class Rating {
  rate: number | undefined;
  count: number | undefined;
}

export class Product {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating: Rating | undefined;
}