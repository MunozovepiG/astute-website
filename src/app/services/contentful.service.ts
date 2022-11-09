import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() {
   }

   private client = createClient({
    space:'49fe8t7i3dwf',
    accessToken:'6AjHmDuju94cTgj6kZIypKHzKg1-08nu3lI3IS2GCSs'
   });

   getAllEntries(){
    const promise = this.client.getEntries()
    return from(promise);
   }


getEntryById(id:string){
  const promise = this.client.getEntry(id)
  return from(promise);
}
}