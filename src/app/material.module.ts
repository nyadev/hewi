import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  ScrollDispatchModule,
  MatTableModule
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule {}
