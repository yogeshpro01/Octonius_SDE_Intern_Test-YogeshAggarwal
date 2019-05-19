import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoElementService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getTodoElements(){
    return this.http.get(`${this.url}/api/v1/todos`);
  }
  getTodoElementById(id){
    return this.http.get(`${this.url}/api/v1/todo/${id}`);
  }
  addTodoElement(name, description){
    const todo = {
      name: name,
      description: description,
      status: "Open"
    };
    return this.http.post(`${this.url}/api/v1/todo/new`, todo);
  }
  updateTodoElement(id, name, description, status){
    const todo = {
      name: name,
      description: description,
      status: status
    }
    return this.http.put(`${this.url}/api/v1/todo/${id}`, todo);
  }
  deleteTodoElement(id){
    return this.http.get(`${this.url}/api/v1/todo/delete/${id}`);
  }
}
