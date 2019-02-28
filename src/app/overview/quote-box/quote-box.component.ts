import { Component, OnInit, AfterViewInit } from '@angular/core';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.less']
})

export class QuoteBoxComponent implements OnInit, AfterViewInit {
  quoteContent
  quoteAuthor
  quotesAPI : string = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.getQuote()
  }

  getQuote() {
    fetch(this.quotesAPI)
    .then(response => response.json())
    .then(data => {
      this.quoteAuthor = data[0].title;
      this.quoteContent = this.cutQuote(data[0].content);
      console.log(data[0].content)
    })
  }
  cutQuote = (quote) => quote.substring(3, quote.length - 5)

}
