import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GridTableDataService {

  private rowDataSource = new BehaviorSubject<Array<Product>>([]);
  rowData$ = this.rowDataSource.asObservable();

  updateData(newData: Array<Product>) {
    this.rowDataSource.next(newData);
  }
}
