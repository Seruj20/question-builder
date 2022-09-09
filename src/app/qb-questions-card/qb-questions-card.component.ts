import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Question } from '../app.models'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-qb-question-card',
  templateUrl: './qb-questions-card.component.html',
  styleUrls: ['./qb-questions-card.component.scss']
})
export class QbQuestionsCardComponent implements OnInit {
  @Input() public question: Question
  @Input() public listView: boolean = false
  @Output() public deleteQuestion: EventEmitter<number> = new EventEmitter<number>()
  @Output() public editQuestion: EventEmitter<number> = new EventEmitter<number>()
  @Output() public updateQuestion: EventEmitter<Question> = new EventEmitter<Question>()
  public formGroup: FormGroup
  public readonly: boolean = false

  constructor () { }

  ngOnInit (): void {
    this.readonly = this.question.isAnswered
    this.formGroup = new FormGroup({
      answer: new FormControl({ value: this.question.answer, disabled: this.readonly })
    })
  }

  public checkOptionSelected (option: string): boolean {
    return !!this.question.multipleAnswer?.includes(option)
  }

  public saveAnswer (): void {
    if (this.question.type !== 'MultipleChoice') {
      this.question.answer = this.formGroup.getRawValue().answer
    }
    this.question.isAnswered = true
    this.question.answerDate = new Date()
    this.updateQuestion.emit(this.question)
  }

  public handleDeleteQuestion (): void {
    this.deleteQuestion.emit(this.question.index)
  }

  public handleEditQuestion (): void {
    this.editQuestion.emit(this.question.index)
  }

  public toggleOption (opt: string): void {
    const index = this.question.multipleAnswer?.findIndex(a => a === opt)
    if (index) {
      if (index < 0) {
        this.question.multipleAnswer?.push(opt)
      } else {
        this.question.multipleAnswer?.splice(index, 1)
      }
    }
  }

  public deleteAnswer (): void {
    this.question.isAnswered = false
    this.question.answer = ''
    this.question.multipleAnswer = []
    this.updateQuestion.emit(this.question)
  }
}
