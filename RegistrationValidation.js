var getCheckObject = function() {
        var tipP = tip = document.createElement("p");
        tip.appendChild(document.createTextNode("Invalid dassword"));
        var tipU = tip = document.createElement("p");
        tip.appendChild(document.createTextNode("Invalid username"));
 
        function addErrorTip(node, type) {
            node.className +=' ' + 'error' +' ';
            if(type =="username") {
                node.parentNode.appendChild(tipU); 
            } else if (type == "password") {
                node.parentNode.appendChild(tipP);
            }
             
        }
 
        function removeErrorTip(node, type) {
            node.className = "";               
            if(type ==="username") {                   
                node.parentNode.removeChild(tipU); 
            } else if (type === "password") {
                node.parentNode.removeChild(tipP);
            }
        }
 
        function isValidName(name) {
            return false;
        }
 
        function isValidPassword(password) {
            var lenIsEnough = password.length > 6; //longer than 6
            var hasDigital = /[/d]+/.test(password); //includes number
            var hasCharater = /[/w]+/.test(password); //other charactors     
            return lenIsEnough && hasDigital && hasCharater;
        }
        return {
            addErrorTip: addErrorTip,
            removeErrorTip: removeErrorTip,
            isValidName: isValidName,
            isValidPassword: isValidPassword
        };
    };
     
    var checkObj = getCheckObject();
    var form = document.forms['login-form'];
    var username = form['username'];//--name is keyword
    var password = form['password'];       
    form.addEventListener('submit', function(event){               
        if(!checkObj.isValidName(username.value)) {
            checkObj.addErrorTip(username,'username');
            event.preventDefault();    
        }
        if(!checkObj.isValidPassword(password.value)) {
            checkObj.addErrorTip(password,'password');                             
            event.preventDefault();
        }
    }, false);
 
    form.addEventListener('reset',function(event){
        checkObj.removeErrorTip(username,'username');
        checkObj.removeErrorTip(password,'password');
    },false);
 
    username.addEventListener('blur', function(event) {
        if (!checkObj.isValidName(username.value)) {
            checkObj.addErrorTip(username, 'username');
        }
    }, false)
    username.addEventListener('focus', function(event) {
        checkObj.removeErrorTip(username, 'username');
    }, false);
    password.addEventListener('blur', function(event) {
        if (!checkObj.isValidPassword(password.value)) {
            checkObj.addErrorTip(password, 'password');
        }
    }, false)
    password.addEventListener('focus', function(event) {
        checkObj.removeErrorTip(password, 'password');
    }, false);
