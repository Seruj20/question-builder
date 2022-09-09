import { Injectable } from '@angular/core'
import { Question, QuestionData } from '../app.models'
import { Router } from '@angular/router'
const key = 'questions'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private readonly localStorage: Storage
  public questionsList: any[] = []
  public editingQuestion: Question

  constructor (
    private readonly router: Router
  ) {
    this.localStorage = window.localStorage
    this.getQuestionsList()
  }

  public addQuestion (questionData: QuestionData): void {
    const question = new Question(questionData)
    this.questionsList.unshift(question)
    this.set(this.questionsList)
  }

  public updateQuestion (questionData: QuestionData | Question, index?: number): void {
    const i = index || (questionData as Question).index
    this.questionsList = this.questionsList.map(q => {
      let ret = q
      if (q.index === i) {
        ret = { ...q, ...questionData }
      }
      return ret
    })
    this.set(this.questionsList)
  }

  public getQuestionsList (): void {
    // @ts-expect-error
    this.questionsList = JSON.parse(this.localStorage.getItem(key))
    if (!this.questionsList) {
      this.questionsList = []
    }
  }

  public deleteQuestion (i: number): void {
    this.questionsList = this.questionsList.filter(q => q.index !== i)
    this.set(this.questionsList)
  }

  public editQuestion (i: number): void {
    this.editingQuestion = this.questionsList.find(q => q.index === i)
    this.router.navigate([`${i}`]).then()
  }

  public set (value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value))
    this.getQuestionsList()
  }

  public remove (): void {
    this.localStorage.removeItem(key)
    this.getQuestionsList()
  }
}
