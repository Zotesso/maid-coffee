import { Injectable } from '@angular/core';
import { SchoolTask } from '../shared/school-task.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  schoolTasks: SchoolTask[] = [
    {
      name: 'Estudar',
      neededEnergy: 12,
      rewards: {
        knowledge: 100,
        reliability: 100
      }
    },
    {
      name: 'Estudar Mais Ainda',
      neededEnergy: 30,
      rewards: {
        knowledge: 500,
        reliability: 150
      }
    },
    {
      name: 'Limpar a quadra',
      neededEnergy: 50,
      rewards: {
        knowledge: 10,
        reliability: 300
      }
    }
   ];

   getTasks(): SchoolTask[]{
    return this.schoolTasks;
  }

  constructor() { }
}
