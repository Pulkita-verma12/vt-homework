import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Myservice, Product } from '../myservice';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  providers: [Myservice],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  
  constructor(private myservice: Myservice) {}

  product: Product[] = [];
  selectedProduct: Product | null = null;
  msg: any;
  loading: boolean = false;
  error: string | null = null;

  ngOnInit() {
    console.log('Dashboard - component initialized');
    this.msg = this.myservice.getMessage();
    this.loading = true;
    this.error = null;
    
    this.myservice.getData().pipe(
      catchError(error => {
        console.error('API Error:', error);
        this.error = 'Failed to load products from API. Showing sample data.';
        this.loading = false;
        return of(this.getMockData()); // Return mock data on error
      })
    ).subscribe(data => {
      console.log('Data from Myservice:', data);
      this.product = data;
      this.loading = false;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  // Mock data as fallback
  getMockData(): Product[] {
    return [
      {
        id: 1,
        title: "Sample Product 1",
        price: 29.99,
        description: "This is a sample product description.",
        category: "electronics",
        image: "https://via.placeholder.com/300x300?text=Product+1",
        rating: { rate: 4.5, count: 120 }
      },
      {
        id: 2,
        title: "Sample Product 2", 
        price: 19.99,
        description: "Another sample product for demonstration.",
        category: "clothing",
        image: "https://via.placeholder.com/300x300?text=Product+2",
        rating: { rate: 4.2, count: 85 }
      }
    ];
  }
}
