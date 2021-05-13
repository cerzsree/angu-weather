import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Item } from '../Item';
import { MessageService } from '../message.service';

const todoListStorageKey :string ='Todo-List';
const fakeTodoKey : string = 'Fake-Todo';

const fakeTodo: Item[] = [
  { todo : "One" , done : false },
  { todo : "Two"   , done : false }
]

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
  fakeItems: Item[];

  constructor(private storageService:StorageService, private messageServe:MessageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
    this.fakeItems = storageService.getData(fakeTodoKey) || fakeTodo;
  }

  getTodoList():Item[]{
    return this.todoList;
    console.log(this.todoList);
    this.messageServe.add("retriving the list");
  }

  deleteTheTodo():void{
    this.todoList = [];
    this.saveList();
    this.messageServe.add("Clearing the Todo items");
  }

  addItem(item : Item):void{
    for(let i = 0 ; i < this.todoList.length ;i++){
      if(this.todoList[i].todo == item.todo){
        return;
      }
    }
    
    this.todoList.push(item);
    this.saveList();
    
    this.messageServe.add("Added new Todo Item")
  }

  updateItem(item : Item, changes){
    const i = this.todoList.indexOf(item);
    this.todoList[i] = {...item, ...changes};
    this.saveList();
    this.messageServe.add("Updated Todo Item")
  }

  updateList(arr : Item[]){
    this.todoList = arr;
    this.saveList();
    this.messageServe.add("Updated the Todo List")
  }

  saveList(){
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  deleteItem(item: Item){
    const i = this.todoList.indexOf(item);
    this.todoList.splice(i, 1);
    this.saveList();
    this.messageServe.add("Deleted Todo Item");
  }
}
