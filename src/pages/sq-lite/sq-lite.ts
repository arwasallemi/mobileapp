import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME : string ='data.db';
@IonicPage()
@Component({
  selector: 'page-sq-lite',
  templateUrl: 'sq-lite.html',
})
export class SqLitePage {
  //private db : SQLiteObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }
/*private createDatabaseFile(){
this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {
    console.log('Bdd crée ! ') ;
this.db = db;

  })
  .catch(e => console.log(e));
}


private createTables(): void {
  this.db.executeSql('create table parametres (name VARCHAR(32))',{})
  .then(() =>  console.log('Executed sql'))
   .catch(e => console.log(e));
   
}
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SqLitePage');
  }


*/

}
