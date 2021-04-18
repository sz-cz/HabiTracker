import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.less']
})

export class QuoteBoxComponent implements OnInit, AfterViewInit {
  quoteContent
  quoteAuthor
  quotesAPI : string = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1";

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
      this.quoteAuthor = data[0].title.rendered;
      this.quoteContent = this.cutQuote(data[0].excerpt.rendered);
      console.log(data[0].content)
    })
  }
  cutQuote = (quote) => quote.substring(3, quote.length - 5)

}
