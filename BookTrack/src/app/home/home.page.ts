import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { NavController } from '@ionic/angular';
import { MapPage } from '../map/map.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //locally stored booklist with placeholder books
  books = [];
  constructor(
    private alertController: AlertController,
    private apiService: APIService,
    public navCtrl: NavController,
    ) {}

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
    Auth.currentAuthenticatedUser().then((user) => {
     this.apiService.CreateTodo({
        title: newTitle,
        author: newAuthor,
        owner: user.username
      }).then((book) => { this.books.push({name: newTitle, author: newAuthor, id: book.id}) });
      
    });
  }

  deleteBook(id: string) {
    this.apiService.DeleteTodo({
      id: id
    });
    console.log(this.books);
    this.books = this.books.filter(function(e) { return e.id !== id })
  }

  ionViewWillEnter() {
    this.books = [];
    this.apiService.ListTodos().then((evt) => {
      Auth.currentAuthenticatedUser().then((user) => {
        evt.items.forEach((item) => {
          if (item.owner == user.username) {
           this.books.push({name: item.title, author: item.author, id: item.id});
         }
        });
      });
    });
  }

  ngOnInit() {}

}
