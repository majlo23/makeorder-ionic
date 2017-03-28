import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data : any;
  fetchdata : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {

      this.data = {};
      this.data.username = '';
      this.data.response = '';

      this.http = http;
  }

 submit() {

      var data = JSON.stringify({username: this.data.username});
    var link = "https://makeorder.000webhostapp.com/register.php";

    this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json()._body;

        }, error => {
            console.log("Oooops!");
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
