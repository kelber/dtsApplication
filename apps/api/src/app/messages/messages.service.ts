import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export class Message {
    id: number;
    name: string;
    email: string;
    assunto: string;
    phone: string;
    message: string;
    created: string;
}


@Injectable()
export class MessagesService {
    getMessages(): Message[] {
        return [
        { "id": 1, "name": "A", "email": "a@gmail.com", "assunto": "Elogio", "phone": "11111111", "message": "aaaaaaaaaaaaaa", "created": "10/10/01" },
        { "id": 2, "name": "B", "email": "a@gmail.com", "assunto": "Reclamacao", "phone": "11111111", "message": "aaaaaaaaaaaaaa", "created": "12/10/01" },
        { "id": 3, "name": "C", "email": "a@gmail.com", "assunto": "Elogio", "phone": "11111111", "message": "aaaaaaaaaaaaaa", "created": "15/10/01" },
        { "id": 4, "name": "D", "email": "a@gmail.com", "assunto": "Orçamento", "phone": "11111111", "message": "aaaaaaaaaaaaaa", "created": "20/10/01" },
        ];
    }


}
