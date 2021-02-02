import { Component } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

import { Platform, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';

import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  todos: Array<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private apiService: APIService,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'New Book',
      subHeader: 'Add a book to your list.',
      inputs: [
        {
          name: 'Title',
          type: 'text',
          id: 'title-id',
          placeholder: 'title'
        },
        {
          name: 'Author',
          type: 'text',
          id: 'author-id',
          placeholder: 'author'
        }],

      buttons: ['Submit', 'Cancel']
    });

    await alert.present();
  }
  createTodo() {
    this.apiService.CreateTodo({
      name: 'ionic',
      description: 'testing'
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.apiService.ListTodos().then((evt) => {
        this.todos = evt.items;
      });
      this.apiService.OnCreateTodoListener.subscribe((evt) => {
        const data = (evt as any).value.data.onCreateTodo;
        this.todos = [...this.todos, data];
      });
    });
  }
}
