import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Question } from '../app.models'

@Component({
  selector: 'app-qb-questions-management',
  templateUrl: './qb-questions-management.component.html',
  styleUrls: ['./qb-questions-management.component.scss']
})
export class QbQuestionsManagementComponent implements OnInit {
  @Input() public questions: Question[]
  @Output() public handleDeleteQuestion: EventEmitter<number> = new EventEmitter<number>()
  @Output() public handleEditQuestion: EventEmitter<number> = new EventEmitter<number>()
  constructor () { }

  ngOnInit (): void {
  }
}
