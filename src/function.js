//  var { XMLHttpRequest } = require("xmlhttprequest");

function makeRequest(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(JSON.parse( xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const select = (selector) => document.querySelector(selector);

function ticket(xhr, cb){
  //  [ { id: 1, ticket: 'key1' }, { id: 2, ticket: 'key2' } ]
  var data = JSON.parse(xhr.responseText);
  var tickets=data.map(function(item){
    return item.ticket;
  });
  return cb(tickets);
}

 
// function filter(xhr,cb){
//     var data = JSON.parse(xhr.responseText);
//     var filter;
//     data.map(function(item){
//       filter=item.results.id;
//       filter=item.results.poster_path;
//       filter=item.results.title;
//     });
//     return cb(filter);
// }


// makeRequest('sdsd' , fultier);
//inas 


if (typeof module !== 'undefined') {
  module.exports = { makeRequest ,ticket ,select};
}


