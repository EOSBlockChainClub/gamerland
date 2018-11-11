

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.withCredentials = false;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('POST', url, true);
  xhr.send( null );
}

function loadWithData(url, callback, dataObj) {
  var xhr = new XMLHttpRequest();
  var data = JSON.stringify(  dataObj );

  xhr.withCredentials = false;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {

    	//console.log( xhr );
      callback(xhr.response);
    }
  }

  xhr.open('POST', url, true);
  xhr.send( data );
}


var issuer = "eosid";

var baseUrl = "http://127.0.0.1:7777/v1/";
var chainUrl = "http://127.0.0.1:7777/v1/chain/";


function getActions() {

   loadWithData( baseUrl + "history/get_actions", console.log, { pos:0, offset:0, account_name: 'eosio.token' } )

}