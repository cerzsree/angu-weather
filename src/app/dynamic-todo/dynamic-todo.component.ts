import { Component, OnInit , Input , ComponentFactoryResolver , ViewChild } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-dynamic-todo',
  templateUrl: './dynamic-todo.component.html',
  styleUrls: ['./dynamic-todo.component.scss']
})
export class DynamicTodoComponent implements OnInit {

  loaded: boolean = false;
  currentState : string = "Todo";

  constructor(private todoListService : TodoListService) {}

  ngOnInit() {
    console.log(this.todoListService.getTodoList().length == 0);
    if(this.todoListService.getTodoList().length !== 0){
      this.changeStateTodo();
    }else{
      this.changeStateEmpty();
    }
  }

  changeStateTodo():void{
    this.currentState = "Todo";
  }

  changeStateEmpty():void{
    this.currentState = "Empty";
    this.todoListService.deleteTheTodo();
  }

}
