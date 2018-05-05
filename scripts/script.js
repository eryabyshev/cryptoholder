

(function () {

    var doc = document,
        menu = doc.querySelector('.menu'),
        subMenu = doc.querySelector('.sub-menu'),
        context = doc.querySelector(".context"),
        falldown = doc.querySelector('.falldown');


    //show submenu
    var showMenu = function () {
        subMenu.setAttribute('class', 'sub-menu-show');
    };


    //show or hid submenu
    var showMenu = function () {
        if(subMenu.getAttribute('class') === 'sub-menu-show'){
            subMenu.setAttribute('class', 'sub-menu');
        }
        else{
            subMenu.setAttribute('class', 'sub-menu-show');
        }


    };


    //show or hid context
    var showContext = function(){

        if(context.getAttribute('class') === 'context'){
            context.setAttribute('class', 'contextShow');
        }
        else{
            context.setAttribute('class', 'context');
        }
    };





    menu.addEventListener("mouseover", showMenu);

    menu.addEventListener("click", showMenu);

    falldown.addEventListener("click", showContext);




    //
    // https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD/balance - btc
    //
    // https://api.blockcypher.com/v1/ltc/main/addrs/LNa6sL5isfJa9dBUw6MphEgKk6s7iH6Y62 -ltc
    //
    //https://api.blockcypher.com/v1/eth/main/addrs/0xe2C96bBFb9E76F55d1F43E4e2B0FC540023ADb10 -eth
    //
    //https://api.blockcypher.com/v1/dash/main/addrs/Xxw3eqm3GDxt5PYs6Npsg1ts8BxYi9Hg6E -dash
    //
    //







})();