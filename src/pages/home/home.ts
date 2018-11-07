import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';
import firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comment;
  constructor(public navCtrl: NavController) {


      firebase.database().ref("comments/").on("value",(data: any)=>{
        let commentsinfor = data.val();
        console.log()

      })

  }

  comments() {

    alert("wotrking");

    var user = "NON7INb3OVgnI0xcMI4HlVKl05I3"
      var day = moment().format('MMMM Do YYYY, h:mm:ss a');
      firebase.database().ref('comments/' + "velRTmmC3JatACP25mFofaMUgfb2").push({
        comment: this.comment,
        uid: user,
        date: day,
       
      })
    
    };
 //------------------------------------------------------------------------------------





 

}
