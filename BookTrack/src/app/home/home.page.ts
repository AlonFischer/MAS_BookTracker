import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'New Book',
      subHeader: 'Add a book to your list.',
      inputs: [
        {
          name: 'title',
          type: 'text',
          id: 'title-id',
          placeholder: 'title'
        },
        {
          name: 'author',
          type: 'text',
          id: 'author-id',
          placeholder: 'author'
        }],

      buttons: [
        {
          text: 'Submit',
          role: 'submit',
          handler: data => {
            this.addBook(data.title, data.author)
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]

    });

    await alert.present();
  }
  
  //called when "submit" is clicked to add a new book
  addBook(newTitle: string, newAuthor: string){
    console.log(newTitle + " " + newAuthor);
    this.books.push({name: newTitle, author: newAuthor})
  }

  ngOnInit() {
  }

}
