import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { QbQuestionsContainerComponent } from './qb-questions-container/qb-questions-container.component'
import { QbQuestionsManagementComponent } from './qb-questions-management/qb-questions-management.component'
import { QbQuestionsCardComponent } from './qb-questions-card/qb-questions-card.component'
import { QbQuestionsCreatePageComponent } from './qb-questions-create-paga/qb-questions-create-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { QuestionsService } from './services/questions.service'
import { QbQuestionsEditPageComponent } from './qb-questions-edit-paga/qb-questions-edit-page.component'
import { QbQuestionsListComponent } from './qb-questions-list/qb-questions-list.component'
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [
    AppComponent,
    QbQuestionsContainerComponent,
    QbQuestionsManagementComponent,
    QbQuestionsCardComponent,
    QbQuestionsCreatePageComponent,
    QbQuestionsEditPageComponent,
    QbQuestionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
