import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LibrosService } from '../../services/libros.services';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
libros = [];
@ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public librosServices : LibrosService) {
    this.librosServices.getlibros().subscribe(libros=> {
      this.libros=libros;
  });
  }

  public gotoDetalle(id){
    this.navCtrl.push(DetallePage, {id: id});
  }
  public createLibro(){
    this.navCtrl.push(DetallePage, {id:0 });
  }
}
