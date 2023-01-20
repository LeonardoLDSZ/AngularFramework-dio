//Funções

function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name:string): string { //": string" - deixa de maneira explicita o tipo de returno
    return `Hello ${name}`;
}

function CallToPhone(phone:number | string):number | string{
    return phone;
}

async function getDatabase (id: number): Promise<number | string> {
    return "Leonardo";    
}

let soma: number = addNumber(4,7);

console.log(soma);
console.log(addToHello("Nicolle"));
console.log(CallToPhone("33251151"));
console.log(CallToPhone(456112314));