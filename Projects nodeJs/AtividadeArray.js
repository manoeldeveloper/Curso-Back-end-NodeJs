import { add } from './funcoes.js';
import { listar } from './funcoes.js';
import { remover } from './funcoes.js';
import { att } from './funcoes.js';
import { consultaId } from './funcoes.js';
import { sair } from './funcoes.js';

import readlineSync from 'readline-sync';

export var clientes = [];


inicio();

export function inicio() {
    var opt = parseInt(readlineSync.question("Escolha a opção: 1 - Adicionar, 2 - Listar, 3 - Remover, 4 - Atualizar, 5 - Consultar por Id, 6 - Sair "));

    switch (opt) {
        case 1:
            add();
            break;
        case 2:
            listar();
            break;
        case 3:
            remover();
            break;
        case 4:
            att();
            break;
        case 5:
            consultaId();
            break;
        case 6:
            sair();
            break;    
        default:
            console.log("Digite uma opção válida");
            inicio();
            break;
    }
    inicio();
}
