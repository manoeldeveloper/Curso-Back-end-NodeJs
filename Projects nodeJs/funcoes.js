import { clientes } from "./AtividadeArray.js";
import readlineSync from 'readline-sync';

export function add() {
    var cliente = {
        id: clientes.length + 1, 
        nome: readlineSync.question("Digite o nome do cliente: "),
        email: readlineSync.question("Digite o email do cliente: ")
    };

    clientes.push(cliente);

    console.log("Cliente adicionado com sucesso!");

}

export function listar() {
    console.table(clientes);
}

export function remover() {
    var idRemover = parseInt(readlineSync.question("Digite o Id do cliente: "));
        let indexToRemove = clientes.findIndex(cliente => cliente.id === idRemover);
             if (indexToRemove !== -1) {
                clientes.splice(indexToRemove, 1);
        console.log(`Cliente com ID ${idRemover} removido com sucesso.`);
    } else {
        console.log(`Cliente com ID ${idRemover} não encontrado.`);
    }
}

export function att() {
    var idAtt = parseInt(readlineSync.question("Digite o Id do cliente: "));
        let indexToAtt = clientes.findIndex(cliente => cliente.id === idAtt);
        if (indexToAtt !== -1) {
            let novoNome = readlineSync.question("Digite o novo nome do cliente: ");
            clientes[indexToAtt].nome = novoNome;
            let novoEmail = readlineSync.question("Digite o novo e-mail do cliente: ");
            clientes[indexToAtt].email = novoEmail;
    
            console.log(`Cliente com ID ${idAtt} atualizado com sucesso.`);
        } else {
            console.log(`Cliente com ID ${idAtt} não encontrado.`);
        }
}

export function consultaId() {
    var idCons = parseInt(readlineSync.question("Digite o Id do cliente: "));
        
            for(var i = 0; i < idCons; i++) {
                if(idCons === clientes[i].id) {
                    console.table(clientes[i]);
                } else {
                    console.log("Não existe");
                }
            }    
}

export function sair() {
    process.exit(0);
}