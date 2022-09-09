import { Component, OnInit } from '@angular/core'
import { QuestionsService } from '../services/questions.service'
import { Question } from '../app.models'
import { Router } from '@angular/router'

@Component({
  selector: 'app-qb-questions-list',
  templateUrl: './qb-questions-list.component.html',
  styleUrls: ['./qb-questions-list.component.scss']
})
export class QbQuestionsListComponent implements OnInit {
  public answeredQuestions: Question[] = []
  public unansweredQuestions: Question[] = []
  constructor (private readonly questionsService: QuestionsService, private readonly router: Router) { }

  ngOnInit (): void {
    this.getQuestionsLists()
  }

  public getQuestionsLists (): void {
    this.answeredQuestions = this.questionsService.questionsList?.filter(q => q.isAnswered).sort((q1, q2) => q2.index - q1.index)
    this.unansweredQuestions = this.questionsService.questionsList?.filter(q => !q.isAnswered).sort((q1, q2) => q2.answerDate - q1.answerDate)
  }

  public handleQuestionUpdate (question: Question): void {
    this.questionsService.updateQuestion(question)
    this.getQuestionsLists()
  }

  public moveToMainPage (): void {
    this.router.navigate(['']).then()
  }

  public handleDeleteQuestion (index: number): void {
    this.questionsService.deleteQuestion(index)
    this.getQuestionsLists()
  }

  public handleEditQuestion (index: number): void {
    this.questionsService.editQuestion(index)
  }
}
