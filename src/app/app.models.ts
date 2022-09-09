export class Question {
  constructor (data: QuestionData) {
    this.type = data.type
    this.text = data.text
    this.isAnswered = false
    this.creationDate = new Date()
    this.index = (new Date()).valueOf()
    if (data.answer?.length) {
      if (data.type === QuestionType.MultipleChoice) {
        this.answer = data.answer?.join(', ')
      } else {
        this.answer = data.answer[0]
      }
    }
    if (data.type !== QuestionType.Open) {
      this.answerOptions = data.answerOptions
    }
  }

  text?: string
  type?: string
  answer?: string
  multipleAnswer?: string[] = []
  creationDate: Date
  answerDate?: Date
  answerOptions?: string[]
  index: number
  isAnswered: boolean
}
export class QuestionData {
  type?: string
  text?: string
  answer?: string[]
  answerOptions?: string[]
}

export enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice',
  Open = 'Open',
}
