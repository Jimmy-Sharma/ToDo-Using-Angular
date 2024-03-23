import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  http=inject(HttpClient)

  constructor() { }

  addTask(task:String){
    return this.http.post("http://localhost:3000/todos",{
      title:task
    })
  }
  getAllTasks(){
    return this.http.get("http://localhost:3000/todos")
  }
}
