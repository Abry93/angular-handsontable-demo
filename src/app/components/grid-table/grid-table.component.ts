import {Component, DestroyRef, OnInit} from '@angular/core';
import Handsontable from 'handsontable';
import {GridTableDataService} from '../../services/grid-table-data.service';
import {HotTableModule} from '@handsontable/angular';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Product} from '../../models/product';

@Component({
  selector: 'app-grid-table',
  imports: [
    HotTableModule
  ],
  templateUrl: './grid-table.component.html',
  standalone: true
})
export class GridTableComponent implements OnInit {
  hotSettings: Handsontable.GridSettings = {
    colHeaders: ['Product Name', 'Sales', 'Region'],
    columns: [
      { data: 'productName', type: 'text' },
      { data: 'sales', type: 'numeric' },
      { data: 'region', type: 'text' },
    ],
    rowHeaders: true,
    width: '100%',
    licenseKey: 'non-commercial-and-evaluation',
  };

  hotData: Array<Product> = [
    { productName: 'Kostka Brukowa Deluxe', sales: 100, region: 'Gdynia' },
    { productName: 'Cegła Premium', sales: 200, region: 'Gdańsk' },
    { productName: 'Dachówka Solar', sales: 150, region: 'Sopot' },
  ];

  constructor(
    private dataService: GridTableDataService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.dataService.rowData$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((newRows) => {
      if (newRows.length > 0) {
        this.hotData.push(...newRows);
        this.hotData = [...this.hotData];
      }
    });
  }
}
