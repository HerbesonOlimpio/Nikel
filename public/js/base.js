const nome ="Herbeson olimpio";
let nome2 = "Herbeson";
let pessoaDefault = {
    nome: "Herbeson Olimpio",
    idade: "33",
    trabalho: "voluntário"
}
let nomes = ["Herbeson olimpio","Maria silva", "Pedro Silva"];
let pessoasListavazia = [];
let pessoas = [
    {
        nome:"Herbeson olimpio",
        idade:"33",
        trabalho:"voluntário"
        
    },
    {
        nome:"Maria Silva",
        idade:"25",
        trabalho:"UX/UI Designer"
    }
];
function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}


function alterarnome(){
    nome2="Maria silva";
    console.log("valor alterados");
    console.log(nome2);    
}
function imprimirPessoa(pessoa){
 console.log("nome:");
 console.log(pessoa.nome);

 console.log("idade:");
 console.log(pessoa.idade);

 console.log("trabalho:");
 console.log(pessoa.trabalho);

}
function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}
function imprimirPessoas() {
    console.log("-----------IMPRIMIR PESSOAS-------------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.nome);
    })
}
imprimirPessoas();
adicionarPessoa( {
    nome:"Pedro Silva",
    idade: "28",
    trabalho:"porteiro"
});
console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa( {
   // nome: "Maria Silva",
    //idade: "25",
    //trabalho: "ux/ui Designer"
    //})
    





//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria silva");

//alterarnome();