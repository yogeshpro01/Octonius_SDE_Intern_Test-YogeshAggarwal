import { Component, OnInit } from '@angular/core';
import { TodoElementService } from '../../todo-element.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { MatSnackBar } from '@angular/material';
import { TodoElement } from '../../todo-element.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  todoElement: any = {};
  updateForm: FormGroup;

  constructor(private todoElementService : TodoElementService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      status: '' 
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.todoElementService.getTodoElementById(this.id).subscribe(res => {
        this.todoElement = res;
        this.updateForm.get('name').setValue(this.todoElement.name);
        this.updateForm.get('description').setValue(this.todoElement.description);
        this.updateForm.get('status').setValue(this.todoElement.status);
      });
    });
  }

  updateTodoElement(name, description, status){
    this.todoElementService.updateTodoElement(this.id, name, description, status).subscribe(() => {
      console.log('Edited..');
      this.snackBar.open('Todo has been updated', 'OK', {
        duration: 3000
      });
      this.router.navigate(['/list']);
    });
  }

}
