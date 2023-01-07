let valorPedido = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoDoce = 0;
let nomeprato = "";
let nomebebida = "";
let nomedoce = "";
function selecionarItem(categoria) {
     return function () {
         // se ja estiver marcado volta.
         if (this.classList.contains('selected')) { return; }
         // desmarcar itens
         const itens = document.querySelectorAll(`.${categoria} .caixa.selected`);
         itens.forEach(item => {item.classList.remove('selected');});
         // marca o item clicado.
         this.classList.add('selected');
         this.querySelector("ion-icon").classList.add('selected');
         const hold = this.querySelector('.preco').innerHTML.replace("R$ ", "").replace(',', '.');// ta retornando somente o valor numerico
        // console.log(hold) 
         if (categoria === 'pratos') {
             precoPrato = Number(hold);
             nomeprato = this.querySelector('.nome').innerHTML;
         }
         if (categoria === 'bebidas') {
             precoBebida = Number(hold);             
             nomebebida = this.querySelector('.nome').innerHTML;
         }
         if (categoria === 'doces') {
             precoDoce = Number(hold);             
             nomedoce = this.querySelector('.nome').innerHTML;
         }
         if (precoPrato !== 0 && precoBebida !== 0 && precoDoce !== 0) {
             valorPedido = (precoBebida + precoDoce + precoPrato);

             const fecharpedido = document.querySelector('.finalpedido').classList.add('fecharpedido');
             document.querySelector('.fecharpedido').innerHTML = "Fechar pedido";
             document.querySelector('.fecharpedido').removeAttribute('disabled');
             
    valorPedido = Number(valorPedido);
    valorPedido = valorPedido.toFixed(2).toString().replace("R$ ", "").replace('.', ',');
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
    if (precoPrato == 0 && precoBebida == 0 && precoDoce == 0) {
        return;
    }
   const encrypted = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n    - Prato: ${nomeprato}  \n    - Bebida: ${nomebebida}  \n    - Sobremesa: ${nomedoce} \n    Total: R$ ${valorPedido} \n`);
    window.open(`https://api.whatsapp.com/send?phone=5541111111111&text=${encrypted}`,"_blank");


selecionarItem();
}