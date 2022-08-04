import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { BookSearchComponent } from "./book-search/book-search.component";
import { BookComponent } from "./book/book.component";

const routes: Routes = [
    {
        path: '', component: BookComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: '', component: BookSearchComponent}
        ]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule {}
