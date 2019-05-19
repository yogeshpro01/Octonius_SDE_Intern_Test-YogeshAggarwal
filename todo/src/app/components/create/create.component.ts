import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoElementService } from '../../todo-element.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm : FormGroup;

  constructor(private todoElementService : TodoElementService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ''
    });
  }

  addTodoElement(name, description){
    this.todoElementService.addTodoElement(name, description).subscribe(() => {
      console.log('New Todo Added');
      this.router.navigate(['/list']);
      this.snackBar.open('Todo Added Successfully','OK',{
        duration: 3000
      });
    });
  }

  ngOnInit() {
  }

}
