import {Injectable} from '@angular/core';
import { functions } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class LibrosService{
    constructor(public afDB: AngularFireDatabase){}
    libros = [];
public getlibros(){
    //return this.libros;
    return this.afDB.list('libros/').valueChanges();
}
public getlibro(id){
    return this.afDB.object('libros/'+id);
    //return this.libros.filter(function(e, i){return e.id == id})[0] || {id: null,title:null, author:null, date:null};
}
public createlibro(libro){
    this.afDB.database.ref('libros/'+libro.id).set(libro);
    //this.libros.push(libro);
}
public editlibro(libro){
    this.afDB.database.ref('libros/'+libro.id).set(libro);
//for(let i=0; i<this.libros.length; i++){
//   if(this.libros[i] == libro.id){
//        this.libros[i] = libro;
//    }
//}

}
public deletelibro(libro){
    /*for(let i=0; i<this.libros.length; i++){
        if(this.libros[i].id == libro.id){
            this.libros.splice(i,1);
        }
    }*/
    this.afDB.database.ref('libros/'+libro.id).remove();
}
}