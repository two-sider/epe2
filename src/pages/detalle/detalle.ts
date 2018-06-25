import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LibrosService } from '../../services/libros.services';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  libro : any = {id: null, title: null, author: null, date: null};
  id : any = null;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController, public navParams: NavParams, public libroServices : LibrosService) {
  this.id = navParams.get('id');  
  if(this.id != 0 ){
    libroServices.getlibro(this.id)
    .valueChanges().subscribe(libro =>{
      console.log(libro)          
      this.libro = libro});
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
  addLibro(){
    if(this.id != 0 ){
      this.libroServices.editlibro(this.libro); 
      const toast = this.toastCtrl.create({
       message: 'Libro editado exitosamente',
       duration: 3000
     });
     toast.present();
      

    }else{
    this.libro.id = Date.now();
   this.libroServices.createlibro(this.libro); 
   const toast = this.toastCtrl.create({
    message: 'Libro añadido exitosamente',
    duration: 3000
  });
  toast.present();
   
  }
  this.navCtrl.push(HomePage);
}
deleteLibro(){
  this.libroServices.deletelibro(this.libro);
  const toast = this.toastCtrl.create({
    message: 'Libro eliminado exitosamente',
    duration: 3000
  });
  toast.present();
  this.navCtrl.push(HomePage);
}
}
