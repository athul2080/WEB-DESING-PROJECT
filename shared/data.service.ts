import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

    
    addstudent(student : Student){
      student.id = this.afs.createId();
      return this.afs.collection('/students').add(student);

    }

    getAllstudents(){
      return this.afs.collection('/students').snapshotChanges();
    }


    deletestudent(student : Student){
      return this.afs.doc('/students/'+student.id).delete();

    }

    updatestudent(student :Student){
      this.deletestudent(student);
      this.addstudent(student);
    }


}
