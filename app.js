// làm form mua vé

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


// làm chức năng ẩn hiện menu

var header = document.querySelector('#header');

var isMenu = document.querySelector('.menu');

var heightHeader = header.clientHeight
isMenu.onclick = function(event){

    var isClose = header.clientHeight === heightHeader

    if(isClose){
        header.style.height = 'auto'
    }else{
        header.style.height = null

    }
}

// tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i]
    var menuItem = menuItems[i]
    .onclick = function(event){
        header.style.height = null
    }
}

