import { Component , Input , Output , EventEmitter} from '@angular/core';
import { TodoStyle } from './todoStyle.component';

@Component({
    template:`
    <div class="btns">
    <h2>Todo Goes Here</h2>
    <h3>Create Todo List</h3>
    </div>`
})

export class Empty implements TodoStyle{

    @Input() data: any;

    constructor(){}
}