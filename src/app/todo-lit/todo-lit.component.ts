import { Component, OnInit , Injectable } from '@angular/core';
import { Item } from '../Item';
import { TodoListService } from '../services/todo-list.service';
import { CdkDragDrop , moveItemInArray , transferArrayItem } from '@angular/cdk/drag-drop';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todo-lit',
  templateUrl: './todo-lit.component.html',
  styleUrls: ['./todo-lit.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity:0 }),
        animate('1500ms', style({ opacity : 1 }))
      ]),
      transition(':leave',[
        animate('1500ms',style({opacity : 0})),
      ])
    ])
  ]
})

export class TodoLitComponent implements OnInit {

  todoListStorageKey = 'todo-list';
  lastId : number = 0;
  newItem?: string;
  listItems : Item[];

  constructor( private todoListService : TodoListService ) {}

  ngOnInit() {
    this.listItems = this.todoListService.getTodoList();
  }

  addItem(value : string){
    this.newItem = null;
    this.todoListService.addItem({todo : value});
  }

  deleteItem(item : Item){
    this.todoListService.deleteItem(item);
  }

  setDone(item : Item){
    this.todoListService.updateItem(item,{done:true});
  }

  onDrop(event : CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.todoListService.updateList(this.listItems);
      }else{
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      
    }
  }
}
