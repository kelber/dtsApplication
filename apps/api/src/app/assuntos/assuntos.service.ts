import { Injectable } from '@nestjs/common';

export interface Assunto {
    id: string;
    title: string;
}

@Injectable()
export class AssuntosService {

    getAssuntos(): Assunto[] {
        return [
            { "id": "1", "title": "Orçamento" },
            { "id": "2", "title": "Dúvida" },
            { "id": "3", "title": "Elogio" },
            { "id": "4", "title": "Reclamação" },
        ];
    }

}
