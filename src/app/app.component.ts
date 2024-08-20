import { Component, signal, computed } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material';
import { CommonModule } from '@angular/common';

// Datos ficticios para la tabla
export interface Element {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];


export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

    // Columnas que se mostrarán en la tabla
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
    // Datos para la tabla
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
    // Estadísticas de usuario
    completedTasks: number = 42; // Número ficticio de tareas completadas
    pendingTasks: number = 8;    // Número ficticio de tareas pendientes
  
    // Método para manejar la acción del botón flotante
    onFabClick() {
      alert('Botón de acción flotante presionado');
    }
  

  title = 'U2Lab1_ChicaJhosue';

  readonly panelOpenState = signal(false);

  readonly task = signal<Task>({
    name: 'Parent task',
    completed: false,
    subtasks: [
      { name: 'Child task 1', completed: false },
      { name: 'Child task 2', completed: false },
      { name: 'Child task 3', completed: false },
    ],
  });

  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });

  update(completed: boolean, index?: number) {
    this.task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return { ...task };
    });
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

}
