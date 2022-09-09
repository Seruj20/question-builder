import { Component, OnInit } from '@angular/core'
import { Question } from '../app.models'
import { Router } from '@angular/router'
import { QuestionsService } from '../services/questions.service'

@Component({
  selector: 'app-qb-questions-container',
  templateUrl: './qb-questions-container.component.html',
  styleUrls: ['./qb-questions-container.component.scss']
})
export class QbQuestionsContainerComponent implements OnInit {
  public questions: Question[] = []
  constructor (public readonly router: Router, private readonly questionsService: QuestionsService) {

  }

  ngOnInit (): void {
    this.questions = this.questionsService.questionsList?.sort((q1, q2) => q2.index - q1.index)
  }

  public handleDeleteQuestions (index: number): void {
    this.questionsService.deleteQuestion(index)
  }

  public handleEditQuestions (index: number): void {
    this.questionsService.editQuestion(index)
  }
}
