import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { QuestionsService } from '../services/questions.service'
import { Question } from '../app.models'

@Component({
  selector: 'app-qb-questions-edit-page',
  templateUrl: './qb-questions-edit-page.component.html',
  styleUrls: ['./qb-questions-edit-page.component.scss']
})
export class QbQuestionsEditPageComponent implements OnInit {
  public question: Question
  constructor (private readonly fb: FormBuilder, private readonly router: Router, private readonly questionsService: QuestionsService) {
    this.question = this.questionsService.editingQuestion
    this.question.answerOptions?.forEach(o => {
      this.answerOptions.push(this.fb.control(o))
    })
  }

  public editingQuestionForm: FormGroup =
    new FormGroup({
      type: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      answerOptions: new FormArray([])
    })

  public get answerOptions (): FormArray {
    return this.editingQuestionForm.get('answerOptions') as FormArray
  }

  ngOnInit (): void {
    this.editingQuestionForm.patchValue(this.question)
  }

  public addAnswerOption (): void {
    this.answerOptions.push(this.fb.control(''))
    this.answerOptions.addValidators([Validators.required, Validators.minLength(1)])
  }

  public deleteOption (i: number): void {
    this.answerOptions.removeAt(i)
  }

  public checkFormValidation (): boolean {
    let ret = !this.editingQuestionForm.invalid
    if (this.editingQuestionForm.get('type')?.value !== 'Open') {
      ret = this.answerOptions.controls.length >= 2
    }
    return ret
  }

  public moveToMainPage (): void {
    this.router.navigate(['']).then()
  }

  public saveQuestion (): void {
    this.questionsService.updateQuestion(this.editingQuestionForm.getRawValue(), this.question.index)
    this.editingQuestionForm.reset()
    this.answerOptions.clear()
    this.moveToMainPage()
  }
}
