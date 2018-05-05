

(function () {

    var doc = document,
        menu = doc.querySelector('.menu'),
        subMenu = doc.querySelector('.sub-menu'),
        context = doc.querySelector(".context");


    //show submenu
    var showMenu = function () {
        subMenu.setAttribute('class', 'sub-menu-show');
    }

    //hid submenu
    var hidMenu = function () {
        subMenu.setAttribute('class', 'sub-menu');
    }


    //show or hid context
    var showContext = function(){

        if(context.getAttribute('class') === 'context'){
            context.setAttribute('class', 'contextShow');
        }
        else{
            context.setAttribute('class', 'context');
        }



    }





    menu.addEventListener("mouseover", showMenu);
    menu.addEventListener("click", hidMenu);

    subMenu.addEventListener("click", showContext);









})();