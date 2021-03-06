import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatIconModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { MatSelectModule, MatAutocompleteModule, MatInputModule, MatOptionModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    ContactTableComponent,
    FooterComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatRadioModule,
    MatCardModule,
    MatSortModule,
    FlexLayoutModule,
    MatExpansionModule,
    RouterModule.forRoot([
      { path: '', component: OptionsComponent }
    ])
  ],
  exports: [
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
