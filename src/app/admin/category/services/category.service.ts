import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryRef!: AngularFireObject<any> | AngularFireList<any>;

  constructor(private firestore: AngularFirestore) { }

  createCategory(category: Category) {
    if (category.categoryId == undefined) {
      category.setNewCategory();
    }

    return this.firestore.collection('category/').doc(category.categoryId).set((JSON.parse(JSON.stringify(category)))

    );



  }


}
