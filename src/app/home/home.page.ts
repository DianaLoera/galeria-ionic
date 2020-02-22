import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  contacts:Array<any>;
  div:boolean = false;
  name:String = "";
  phone:String = "";
  email:String = "";
  notes:String = "";
  id=null;
  genre:boolean = null;
  constructor(public alertCtrl: AlertController) {
    this.contacts=[];
  }

  ngOnInit(){
  }

  switchDiv(){
    this.div = !this.div;
  }
   //aqui se guarda el contacto
  async guardar(name,phone,email,notes) {
    const alert = await this.alertCtrl.create({
      header: 'Sucess',
      message: "The contact was added",
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
           
          }
        }
      ]
    });
    
    this.contacts.push({"name":name,"phone":phone,"email":email,"notes":notes,"genero":this.genre});
    console.log(this.contacts);
    await alert.present();
  }
 //alerta d eliminar el contacto
  async eliminarAlert(id) {
    const alert = await this.alertCtrl.create({
      header: '¿Eliminar contacto',
      message: this.contacts[id].name + "?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, 
        {
          text: 'Eliminar',
          handler: () => { 
              this.contacts.splice(id,1);
              console.log(this.contacts.length);
            
          }
        }
        
      ]
    });
    await alert.present();
  }
  //generos 
  woman(){
    this.genre=false;
    console.log(this.genre);

  }
  man(){
    this.genre=true;
    console.log(this.genre);
  }
  //para seleccionar el tipo de genero
  
   chg(){     
     if(this.genre==true){
    document.getElementById('genero').innerHTML="Man";
     }
   else{
   document.getElementById('genero').innerHTML="Woman";
   }
   }

}