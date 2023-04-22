var buyBtns =  document.querySelectorAll('.js-buy-tickets');
var modalElement = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');
var modalContainer = document.querySelector('.modal-container');


function showBuyTicket(){
    modalElement.classList.add('open')
}

for(var buyBtn of buyBtns){
    buyBtn.onclick = function(){
showBuyTicket()
    }
}

function hideBuyTicket(){
    modalElement.classList.remove('open');
}

modalClose.onclick = function(){
    hideBuyTicket();
}

modalElement.onclick = function(){
    hideBuyTicket();
}

modalContainer.onclick = function(event){
    event.stopPropagation();
}