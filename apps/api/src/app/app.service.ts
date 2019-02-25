import { Injectable } from '@nestjs/common';


export interface Ticket {
  id: number;
  title: string;
}

@Injectable()
export class AppService {
  getData(): string {
    return 'Welcome to api!';
  }

  getTickets(): Ticket[] {
    return [
      { id: 1, title: 'Fix my computer!' },
      { id: 2, title: 'Fix my desk' }
    ];
  }

}
