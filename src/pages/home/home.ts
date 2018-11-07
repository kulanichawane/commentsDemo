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
  arr=[];
  index =0;
  constructor(public navCtrl: NavController) {


      firebase.database().ref("comments/"+"velRTmmC3JatACP25mFofaMUgfb2").on("value",(data: any)=>{
        let commentsinfor = data.val();
        
        console.log(commentsinfor)
        var keys = Object.keys(commentsinfor);
        
        for(let i = 0; i< keys.length;++i){
          let k = keys[i];

          let obj = { 
            comment: commentsinfor[k].comment,
            uid:"NON7INb3OVgnI0xcMI4HlVKl05I3",
            date: moment(commentsinfor[k].date, 'MMMM Do YYYY, h:mm:ss a').startOf('minutes').fromNow(),

                    }

                    this.index=1+ i;
                   
                    this.arr.push(obj);
                    this.arr.reverse();
                    console.log(this.arr);

               
                
        }

      })

  }

  comments() {
    this.arr = [];
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
