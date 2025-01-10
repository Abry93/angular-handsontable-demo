import { Component } from '@angular/core';
import {GridTableComponent} from './components/grid-table/grid-table.component';
import {TableSourceFormComponent} from './components/table-source-form/table-source-form.component';

import { registerAllModules } from 'handsontable/registry';
registerAllModules();

@Component({
  selector: 'app-root',
  imports: [GridTableComponent, TableSourceFormComponent],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
}
