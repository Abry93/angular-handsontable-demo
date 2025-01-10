import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TableSourceFormComponent } from './table-source-form.component';
import { GridTableDataService } from '../../services/grid-table-data.service';

describe('TableSourceFormComponent', () => {
  let component: TableSourceFormComponent;
  let fixture: ComponentFixture<TableSourceFormComponent>;
  let dataService: GridTableDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TableSourceFormComponent],
      providers: [GridTableDataService, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(TableSourceFormComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(GridTableDataService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.dataForm.value).toEqual({
      productName: '',
      sales: '',
      region: ''
    });
  });

  it('should validate required fields', () => {
    const productNameControl = component.dataForm.get('productName');
    productNameControl?.setValue('');
    expect(productNameControl?.valid).toBeFalse();
    expect(productNameControl?.hasError('required')).toBeTrue();
  });

  it('should validate numeric input for sales', () => {
    const salesControl = component.dataForm.get('sales');
    salesControl?.setValue('not-a-number');
    expect(salesControl?.valid).toBeFalse();
    expect(salesControl?.hasError('pattern')).toBeTrue();
  });

  it('should call GridTableDataService with valid form data on submission', () => {
    spyOn(dataService, 'updateData');
    component.dataForm.setValue({
      productName: 'Test Product',
      sales: 100,
      region: 'Test Region'
    });
    component.onSubmit();
    expect(dataService.updateData).toHaveBeenCalledWith([
      { productName: 'Test Product', sales: 100, region: 'Test Region' }
    ]);
  });

  it('should not call GridTableDataService if the form is invalid', () => {
    spyOn(dataService, 'updateData');
    component.dataForm.setValue({
      productName: '',
      sales: 'not-a-number',
      region: ''
    });
    component.onSubmit();
    expect(dataService.updateData).not.toHaveBeenCalled();
  });
});
