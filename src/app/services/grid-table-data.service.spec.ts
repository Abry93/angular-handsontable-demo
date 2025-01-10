import { TestBed } from '@angular/core/testing';
import { GridTableDataService } from './grid-table-data.service';

describe('GridTableDataService', () => {
  let service: GridTableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridTableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with an empty data stream', (done: DoneFn) => {
    service.rowData$.subscribe(data => {
      expect(data).toEqual([]);
      done();
    });
  });

  it('should add new rows to the data stream', (done: DoneFn) => {
    const newRow = [{ productName: 'New Product', sales: 200, region: 'New Region' }];
    service.updateData(newRow);

    service.rowData$.subscribe(data => {
      expect(data).toEqual(newRow);
      done();
    });
  });

  it('should update the data stream with multiple updates', (done: DoneFn) => {
    const firstRow = [{ productName: 'First Product', sales: 300, region: 'First Region' }];
    const secondRow = [{ productName: 'Second Product', sales: 400, region: 'Second Region' }];

    service.updateData(firstRow);
    service.updateData(secondRow);

    service.rowData$.subscribe(data => {
      expect(data).toEqual(secondRow);
      done();
    });
  });
});
