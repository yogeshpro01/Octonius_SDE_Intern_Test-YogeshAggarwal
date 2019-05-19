import { TestBed } from '@angular/core/testing';

import { TodoElementService } from './todo-element.service';

describe('TodoElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoElementService = TestBed.get(TodoElementService);
    expect(service).toBeTruthy();
  });
});
