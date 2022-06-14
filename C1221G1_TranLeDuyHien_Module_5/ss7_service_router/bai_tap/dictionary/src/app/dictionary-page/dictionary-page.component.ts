import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/i-word';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words: IWord[] = [];
  word: IWord;

  constructor(private dictionaryService: DictionaryService) {
    this.words = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

  detailWord(word: IWord) {
    this.word = word;
  }

}
