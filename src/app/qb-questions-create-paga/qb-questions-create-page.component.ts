import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { QuestionsService } from '../services/questions.service'

@Component({
  selector: 'app-qb-questions-create-page',
  templateUrl: './qb-questions-create-page.component.html',
  styleUrls: ['./qb-questions-create-page.component.scss']
})
export class QbQuestionsCreatePageComponent implements OnInit {
  constructor (private readonly fb: FormBuilder, private readonly router: Router, private readonly questionsService: QuestionsService) { }
  public createQuestionForm: FormGroup =
    new FormGroup({
      type: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      answerOptions: new FormArray([])
    })

  public get answerOptions (): FormArray {
    return this.createQuestionForm.get('answerOptions') as FormArray
  }

  ngOnInit (): void {
  }

  public addAnswerOption (): void {
    this.answerOptions.push(this.fb.control(''))
    this.answerOptions.addValidators([Validators.required, Validators.minLength(1)])
  }

  public deleteOption (i: number): void {
    this.answerOptions.removeAt(i)
  }

  public checkFormValidation (): boolean {
    let ret = !this.createQuestionForm.invalid
    if (this.createQuestionForm.get('type')?.value !== 'Open') {
      ret = this.answerOptions.controls.length >= 2
    }
    return ret
  }

  public moveToMainPage (): void {
    this.router.navigate(['']).then()
  }

  public saveQuestion (): void {
    this.questionsService.addQuestion(this.createQuestionForm.getRawValue())
    this.createQuestionForm.reset()
    this.answerOptions.clear()
    this.moveToMainPage()
  }
}
