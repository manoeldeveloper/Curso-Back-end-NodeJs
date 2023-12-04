import readlineSync from 'readline-sync';

export class Funcoes {
    constructor() {
        this.clientes = [];
    }

    inicio() {    
        var opt = parseInt(readlineSync.question("Escolha a opção: 1 - Adicionar, 2 - Listar, 3 - Remover, 4 - Atualizar, 5 - Consultar por Id, 6 - Sair "));
    
        switch (opt) {
            case 1:
                this.add();
                break;
            case 2:
                this.listar();
                break;
            case 3:
                this.remover();
                break;
            case 4:
                this.att();
                break;
            case 5:
                this.consultaId();
                break;
            case 6:
                this.sair();
                break;    
            default:
                console.log("Digite uma opção válida");
                this.inicio();
                break;
        }
    }

    add() {
        var cliente = {
            id: this.clientes.length + 1, 
            nome: readlineSync.question("Digite o nome do cliente: "),
            email: readlineSync.question("Digite o email do cliente: ")
        };

        this.clientes.push(cliente);
        console.log("Cliente adicionado com sucesso!");
        teste.inicio();
    }

    listar() {
        console.table(this.clientes);
        teste.inicio();
    }

    remover() {
        var idRemover = parseInt(readlineSync.question("Digite o Id do cliente: "));
        let indexToRemove = this.clientes.findIndex(cliente => cliente.id === idRemover);
        if (indexToRemove !== -1) {
            this.clientes.splice(indexToRemove, 1);
            console.log(`Cliente com ID ${idRemover} removido com sucesso.`);
        } else {
            console.log(`Cliente com ID ${idRemover} não encontrado.`);
        }
        teste.inicio();
    }

    att() {
        var idAtt = parseInt(readlineSync.question("Digite o Id do cliente: "));
        let indexToAtt = this.clientes.findIndex(cliente => cliente.id === idAtt);
        if (indexToAtt !== -1) {
            let novoNome = readlineSync.question("Digite o novo nome do cliente: ");
            this.clientes[indexToAtt].nome = novoNome;
            let novoEmail = readlineSync.question("Digite o novo e-mail do cliente: ");
            this.clientes[indexToAtt].email = novoEmail;
    
            console.log(`Cliente com ID ${idAtt} atualizado com sucesso.`);
        } else {
            console.log(`Cliente com ID ${idAtt} não encontrado.`);
        }
        teste.inicio();
    }

    consultaId() {
        var idCons = parseInt(readlineSync.question("Digite o Id do cliente: "));
        let clienteEncontrado = this.clientes.find(cliente => cliente.id === idCons);
        
        if (clienteEncontrado) {
            console.table(clienteEncontrado);
        } else {
            console.log("Cliente não encontrado.");
        }
        teste.inicio();
    }

    sair() {
        process.exit(0);
    }
}

const teste = new Funcoes();
teste.inicio();
