

(function () {

    var doc = document,
        menu = doc.querySelector('.menu'),
        subMenu = doc.querySelector('.sub-menu'),
        context = doc.querySelector(".context"),
        falldown = doc.querySelector('.falldown'),
        main = doc.querySelector('.main'),


        addButton = doc.querySelector('#add'),
        addressInput = doc.querySelector('.newAddress');



    //show or hid submenu
    var showMenu = function () {
        if(subMenu.getAttribute('class') === 'sub-menu-show'){
            subMenu.setAttribute('class', 'sub-menu');
            main.setAttribute('class', 'Up');
        }
        else{
            subMenu.setAttribute('class', 'sub-menu-show');
            main.setAttribute('class', 'Down');
        }
    };


    //show or hid context
    var showContext = function(){

        if(context.getAttribute('class') === 'context'){
            context.setAttribute('class', 'contextShow');
            main.setAttribute('class', 'DownDown');
        }
        else{
            context.setAttribute('class', 'context');
            main.setAttribute('class', 'Down');
        }
    };




    //menu handlers
    menu.addEventListener("mouseover", showMenu);

    menu.addEventListener("click", showMenu);

    falldown.addEventListener("click", showContext);


    var itBtc = function(address){
        if(address.length === 34 && Number(address[0])){
            return true;
        }
        return false;
    };


    var itEth = function(address){
        if(address.length === 42){
            return true;
        }
        return false;
    };

    var itDash = function(address){
        if(address[0] === 'X'){
            return true;
        }
        return false;
    };

    var itLtc = function(adddress){
        if(adddress[0] === 'L'){
            return true;
        }
        else{
            return false;
        }
    };



    var whatCurrency = function(address){

        if(itBtc(address)){
            return "btc";
        }
        else if(itEth(address)){
            return "eth";
        }
        else if(itDash(address)){
            return "dash";
        }
        else if(itLtc(address)){
            return "ltc";
        }
        else{
            return false;
        }
    };




    var crateBlock = function (currency,balance, inDollar, number, walletName ) {

        var block =
            "<div class = 'information " + currency + "'>\n" +
            "\n" +
            "            <div class = 'currency" + currency + " currency location'></div>\n" +
            "            <div class=\"more\">\n" +
            "\n" +
            "                <div class = 'money'>\n" +
            "                    <span class = 'balanc'>" + balance + " " + currency + "</span><br><br>\n" +
            "                    <span class ='dollar'>" + inDollar + "$</span>\n" +
            "                </div>\n" +
            "\n" +
            "\n" +
            "                <div class = 'info'>\n" +
            "                    <span class='name'>" + walletName + "</span><br><br>\n" +
            "                    <span class='number'>" + number + "</span>\n" +
            "\n" +
            "                </div>\n" +
            "\n" +
            "\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"refresh currency currencyR" + currency + "\">\n" +
            "                <div class=\"ch-info\">\n" +
            "\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n";
        return block;
    };









    var addNewBlock = function(){

        addressInput.setAttribute('placeholder', 'Введите номер кошелька (BTC, ETH, DASH, LTC)');

        if(!addressInput.value){
            return;
        }

        var address = addressInput.value.split(" ")[0];

        var currency = whatCurrency(address);

        if(!currency){
            addressInput.value = "";
            addressInput.setAttribute('placeholder', 'Ошибка! Введите номер кошелька (BTC, ETH, DASH, LTC)');
        }

        var walletName = addressInput.value.split(" ")[1];

        if(!walletName){
            walletName = currency + " " + address;
        }

        var balanceObj = JSON.parse(httpGet("https://api.blockcypher.com/v1/" + currency + "/main/addrs/" + address));

        var balance = 0;

        if(currency !== 'eth'){
            balance = balanceObj.final_balance * 1e-8;
        }
        else{
            balance = balanceObj.final_balance * 1e-18;
        }

        var inDollarObj = JSON.parse(httpGet("https://api.cryptonator.com/api/ticker/" + currency +"-usd"));

        var inDollar = inDollarObj.ticker.price * balance;

        var block = crateBlock(currency, balance, inDollar, address, walletName);

        main.innerHTML += block;



    };


    addButton.addEventListener('click', addNewBlock);



    function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }


    //console.log(httpGet("https://api.cryptonator.com/api/ticker/btc-usd"));


















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