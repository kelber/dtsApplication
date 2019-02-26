import { Controller } from '@nestjs/common';
import { AssuntosService, Assunto} from './assuntos.service';


@Controller('assuntos')
export class AssuntosController {
    constructor(public readonly aS: AssuntosService) {}

    getAssuntos(): Assunto[] {
        return this.aS.getAssuntos();
    }

}
