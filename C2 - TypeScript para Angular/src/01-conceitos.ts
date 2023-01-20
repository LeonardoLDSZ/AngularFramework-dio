type hero ={
    name: string;
    aka:string;
};


function printObject(person:hero) {
    console.log(person);
}

printObject({
name:"Bruce Wayne",
aka: "Batman",

});



// ==== tipos primitivos: boolean, number, string ====
let ligado:boolean = false;
let nome:string = "leo";
let idade:number = 30;
let altura:number = 1.9;

// ==== Special types ====
//null
//undefined
let nulo:null = null;
let indefinido : undefined = undefined;

// ==== tipos abrangentes ==== 
    //any
        //void
let retorno:void
let retornoView:any = false

// ==== Objeto - sem previsibilidade ====
let produto:object = {
    name: "Leonardo",
    cidade: "Bnu",
    idade: "34",
};


// ==== Objeto tipado com previsibilidade ====
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: ProdutoLoja = {
    nome:"Tênis",
    preco:89.99,
    unidades: 5,
};

//==== arrays ====

let dados: string[] = ["felipe", "leonardo", "thiago"];
let dados2: Array<string> = ["felipe", "leonardo", "thiago"];
        
        //Pode guardar tanto numero quanto string

let infos: (string | number)[] = ["leonardo", 34]; 

//==== tuplas ====
//seguir exata ordem definida

let boleto:[string,number,number] = ["Conta agua", 199.90, 32142];

// ==== arrays métodos ====
dados.map

// ==== arrays métodos ====

let aniversario: Date = new Date("2023-01-17 20:00");
console.log(aniversario.toString());