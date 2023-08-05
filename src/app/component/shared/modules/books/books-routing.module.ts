import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '@app/component/books/books.component';
import { Layouts } from '@app/app.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { layout: Layouts.Main },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
