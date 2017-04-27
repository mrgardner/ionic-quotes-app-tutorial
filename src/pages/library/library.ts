import {Component, OnInit} from '@angular/core';
import { IonicPage} from 'ionic-angular';
import quotes from '../../data/quotes';
import {Quote} from "../../data/quote.interface";
import {Quotes} from "../quotes/quotes";

/**
 * Generated class for the Library page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit{
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = Quotes;

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
