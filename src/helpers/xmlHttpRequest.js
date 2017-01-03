
var $http = function (url) {

    var core = {
        ajax: function (method, url, args) {
            return new Promise(function (resolve) {                

                url = 'http://localhost:50870/Api/' + url;

                if (args != undefined) {
                    switch(expression) {
                        case 'GET':
                            url += "?" + serialize(args);
                            break;
                        case 'POST':
                        case 'PUT':
                             data = JSON.stringify(args);
                            break;                       
                    }
                }    

                var client = new XMLHttpRequest();
                client.open(method, url, true);
                client.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                client.setRequestHeader('Accept', 'application/json; charset=utf-8');
                client.setRequestHeader("Cache-Control", "no-cache");  

                client.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            resolve(JSON.parse(this.response));
                        } else {
                            alert(JSON.stringify(this.response));
                        }
                    }
                };               

                client.send(data);
            });
        }
    };
   
    return {
        'get': function (args) {
            return core.ajax('GET', url, args);
        },
        'post': function (args) {
            return core.ajax('POST', url, args);
        },
        'put': function (args) {
            return core.ajax('PUT', url, args);
        },
        'delete': function (args) {
            return core.ajax('DELETE', url, args);
        }
    };   
};

serialize = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}