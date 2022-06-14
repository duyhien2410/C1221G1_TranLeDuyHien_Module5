import {Injectable} from '@angular/core';
import {IWord} from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [];

  constructor() {
    this.words.push({word: 'hello', mean: 'xin chào'});
    this.words.push({word: 'where', mean: 'ở đâu'});
    this.words.push({word: 'what', mean: 'cái gì'});
    this.words.push({word: 'monday', mean: 'thứ hai'});
    this.words.push({word: 'tuesday', mean: 'thứ ba'});
    this.words.push({word: 'sunday', mean: 'chủ nhật'});
  }

  getAll(): IWord[] {
    return this.words;
  }

  translate(word: string) {
    for (const word1 of this.words) {
      // tslint:disable-next-line:no-conditional-assignment
      if (word1.word = word) {
        return word1;
      }
    }
  }
}
