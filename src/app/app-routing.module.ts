import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { QbQuestionsContainerComponent } from './qb-questions-container/qb-questions-container.component'
import { QbQuestionsCreatePageComponent } from './qb-questions-create-paga/qb-questions-create-page.component'
import { QbQuestionsEditPageComponent } from './qb-questions-edit-paga/qb-questions-edit-page.component'
import { QbQuestionsListComponent } from './qb-questions-list/qb-questions-list.component'

const routes: Routes = [
  { path: '', component: QbQuestionsContainerComponent },
  { path: 'create-page', component: QbQuestionsCreatePageComponent },
  { path: 'list', component: QbQuestionsListComponent },
  { path: ':index', component: QbQuestionsEditPageComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
