import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //locally stored booklist with placeholder books
  books = [
    {
      name: "Lord of the Rings",
      author: "Tolkien"
    },
    {
      name: "Computer Networking",
      author: "Kurose"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
