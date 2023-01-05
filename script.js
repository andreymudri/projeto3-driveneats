let valorPedido = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoDoce = 0;
let valorfinal = 0;
function selecionarItem(categoria) {
     return function () {
         // se ja estiver marcado volta.
         if (this.classList.contains('selected')) return;
         // desmarcar itens
         const itens = document.querySelectorAll(`.${categoria} .caixa.selected`);
         itens.forEach(item => {item.classList.remove('selected');});
         // marca o item clicado.
         this.classList.add('selected');
         hold = this.querySelector('.preco').innerHTML.replace(',', '.');// ta retornando somente o valor numerico
        // console.log(hold) 
         if (categoria === 'pratos') {
             precoPrato = Number(hold);
         }
         if (categoria === 'bebidas') {
            precoBebida = Number(hold);
         }
         if (categoria === 'doces') {
            precoDoce = Number(hold);
         }
         if (precoPrato !== 0 && precoBebida !== 0 && precoDoce !== 0) {
             valorPedido = (precoBebida + precoDoce + precoPrato);

             let fecharpedido = document.querySelector('.finalpedido').classList.add('fecharpedido');
         }
     };
}
// click pratos
const pratos = document.querySelectorAll('.pratos .caixa');

pratos.forEach(prato=> {
    prato.addEventListener('click', selecionarItem('pratos'))
});

//click bebida 
const bebidas = document.querySelectorAll('.bebidas .caixa');
bebidas.forEach(bebida => {
bebida.addEventListener('click', selecionarItem('bebidas'));
});

//click doce
const doces = document.querySelectorAll('.doces .caixa');
doces.forEach(doce => {
    doce.addEventListener('click',selecionarItem('doces'));
});
//finalizar pedido
function fazerpedido() {
    valorPedido = Number(valorPedido);
    console.log(valorPedido);
    valorPedido = valorPedido.toFixed(2).toString().replace('.', ',');
    console.log(valorPedido);






}