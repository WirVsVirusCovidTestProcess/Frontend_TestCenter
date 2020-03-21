import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() {}

  getUntriagedQueue(): Observable<User[]> {
    return of(
      this.addAdditionalProperties([
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 100,
          Location: '02994'
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 600,
          Location: '02994'
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 100,
          Location: '02994'
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 100,
          Location: '02994',
          TestResult: true
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 400,
          Location: '02994'
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 100,
          Location: '02994'
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 700,
          Location: '02994'
        },
        {
          id: 1234,
          assigned: false,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 100,
          Location: '02994'
        },
        {
          id: 3333,
          assigned: true,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 400,
          TrackingId: '453453453',
          Location: '02994'
        },
        {
          id: 2222,
          assigned: true,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          RiskScore: 800,
          Location: '02994'
        },
        {
          id: 4445,
          assigned: true,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          TrackingId: '453453453',
          RiskScore: 400,
          Location: '02994',
          TestResult: true
        },
        {
          id: 4444,
          assigned: true,
          DateTimeOffset: '17:00',
          TestcenterAddress: 'Charite',
          TrackingId: '453453453',
          RiskScore: 400,
          Location: '02994',
          TestResult: false
        }
      ])
    );
  }

  public addAdditionalProperties(user: BackendUser[]): User[] {
    return user.map(u => {
      return {
        ...u,
        status: u.RiskScore < 300 ? 'green' : u.RiskScore < 600 ? 'yellow' : 'red',
        queue: this.getQueue(u)
      };
    });
  }

  private getQueue(u: BackendUser): Queue {
    if (u.assigned == false) {
      return Queue.Untriaged;
    }
    if (u.TrackingId == null) {
      return Queue.Waiting;
    }
    if (u.TestResult == null) {
      return Queue.Lab;
    }
    return Queue.Result;
  }
}

export interface BackendUser {
  id: number;
  assigned: boolean;
  DateTimeOffset: string;
  TestcenterAddress: string;
  RiskScore: number;
  /**
   * this ist the PLZ
   */
  Location: string;
  TestResult?: boolean;
  /**
   * Tracking Id for connecting the probe to an assignement
   */
  TrackingId?: string;
}

export interface User extends BackendUser {
  status: 'red' | 'yellow' | 'green';
  queue: Queue;
}

export enum Queue {
  Untriaged,
  Waiting,
  Lab,
  Result
}
