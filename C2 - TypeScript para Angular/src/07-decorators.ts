//decorators - Só exibi quem invocou ela 

function ExibirNome(target:any) {
    console.log(target);
}
@ExibirNome
class Funcionario {}

@ExibirNome
class Viaduto {}