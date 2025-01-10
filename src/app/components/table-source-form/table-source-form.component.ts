import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {GridTableDataService} from '../../services/grid-table-data.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-table-source-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './table-source-form.component.html',
  standalone: true
})
export class TableSourceFormComponent {
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: GridTableDataService) {
    this.dataForm = this.fb.group({
      productName: ['', Validators.required],
      sales: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      region: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.dataForm.valid) {
      const newData = this.dataForm.value;
      this.dataService.updateData([newData]);
      this.dataForm.reset();
    }
  }
}
