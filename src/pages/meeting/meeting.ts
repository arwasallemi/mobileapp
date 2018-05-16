import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, MenuController } from 'ionic-angular';
import { mobiscroll } from 'mobiscroll-angular';
import { AngularFireDatabase } from "Angularfire2/database";
import { AlertListService } from '../../services/alert-list/alert-list.service';
import { Alerts } from '../../models/alerts';




var lapsNr = 1;
function format(ms) {
    var minutes = Math.floor(ms / (1000 * 60)),
        seconds = Math.floor((ms - minutes * 1000 * 60) / 1000),
        hours = Math.floor(minutes/60),
        fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

    return hours+ 'h'+ minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.' + (fract < 10 ? '0' : '') + fract;
}
mobiscroll.settings = {
  theme: 'ios-dark',
  lang: 'en-UK',
};
@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
    alert:Alerts={
        code:"QA",
        date:new Date().toISOString(),
    };
  constructor(private alerts:AlertListService,public navCtrl: NavController, public navParams: NavParams ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');

  }
  addAlert(alert:Alert){
    this.alerts.addAlert(alert);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingPage');
  }
///////////////////timer
timer: number;
/*timerSettings: any = {
    lang: 'En',
    theme: 'ios-dark',
    display: 'inline',
    step: 0.01,
    rows: 3,
    mode: 'stopwatch',
    onReset: function () {
        document.getElementById('laps').innerHTML = "";
        lapsNr = 1;
    },
    onLap: function (event, inst) {
        var cont = document.getElementById('laps'),
            temp = document.createElement('tr');

        temp.innerHTML = '<td>#' + lapsNr + '</td><td> - ' + format(event.lap) + ' - </td><td>' + format(event.ellapsed) + '</td>';
        cont.appendChild(temp);

        lapsNr++;
    }
};*/
timerSettings: any = {
  display: 'inline',
  targetTime: 10,
  maxWheel: 'hours',
  minWidth: 100,
  onFinish: function () {
      mobiscroll.alert({
          title: "Countdown finished",
          message: "Yup, that's right, time's up. <br> Restart it by setting a new time."

      });

  }
};



}

