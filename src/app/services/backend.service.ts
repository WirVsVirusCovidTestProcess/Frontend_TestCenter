import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() {}

  getUntriagedQueue(): User[] {
    return [
      {
        status: 'yellow',
        score: 543,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'green',
        score: 100,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'red',
        score: 800,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'yellow',
        score: 543,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'green',
        score: 100,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'red',
        score: 800,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'yellow',
        score: 543,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'green',
        score: 100,
        first_name: 'Max',
        last_name: 'Mustermann'
      },
      {
        status: 'red',
        score: 800,
        first_name: 'Max',
        last_name: 'Mustermann'
      }
    ];
  }
}

export interface BackendUser {
  score: number;
  first_name: string;
  last_name: string;
}

export interface User extends BackendUser {
  status: 'red' | 'yellow' | 'green';
}
