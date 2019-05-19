import { Component, OnInit } from '@angular/core';
import { TodoElementService } from '../../todo-element.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { TodoElement } from '../../todo-element.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todoElements: TodoElement[];
  displayedColumns = ['name', 'description', 'status', 'actions'];

  constructor(private todoElementService : TodoElementService, private router : Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.fetchTodoElements();
  }

  fetchTodoElements(){
    this.todoElementService.getTodoElements().subscribe((data : TodoElement[]) => {
      this.todoElements = data;
      console.log('Data retrieved...');
    });
  }

  editTodoElement(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteTodoElement(id){
    this.todoElementService.deleteTodoElement(id).subscribe(() => {
      console.log('Deleted');
      this.fetchTodoElements();
      this.snackBar.open('Todo Deleted Successfully','OK',{
        duration: 3000
      });
    });
  }

}
