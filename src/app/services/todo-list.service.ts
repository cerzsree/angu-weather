import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Item } from '../Item';

const todoListStorageKey :string ='Todo-List';

const defaultTodoList: Item[] = [
  { todo : "Sport", done:false },
  { todo : 'Go to work', done:false },
  { todo : 'Buy a mobile phone' , done:false },
  { todo : 'Meet Sandy' , done:false },
  { todo : 'Have dinner with ' , done:false }
  ];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Item[];

  constructor(private storageService:StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  getTodoList():Item[]{
    return this.todoList;
  }

  addItem(item : Item):void{
    if(this.todoList.indexOf(item) == -1){
      item.done = false;
      this.todoList.push(item);
      this.saveList();
    }
  }

  updateItem(item : Item, changes){
    const i = this.todoList.indexOf(item);
    this.todoList[i] = {...item, ...changes};
    this.saveList();
  }

  saveList(){
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  deleteItem(item: Item){
    const i = this.todoList.indexOf(item);
    this.todoList.splice(i, 1);
    this.saveList();
  }
}
