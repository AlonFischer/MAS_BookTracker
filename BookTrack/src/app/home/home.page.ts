import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
  
  addBook(title: string, author: string){
    console.log(title + " " + author);
  }
  
    
}
