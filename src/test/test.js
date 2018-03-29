const tape = require("tape");
const { makeRequest ,ticket,filter } = require("../function");
const url ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/550&api_key=5bb2c5fa478415bd431d599cac1bd762";
let actual = 0;

// test function to check readyState equal 4
tape("insure readyState is equal 4", function(t) {
  const expected = 4;
  makeRequest(url, function(xhr) {
    actual = xhr.readyState;
    t.equal(actual, expected, "should readyState equal 4");
    t.end();
  });
});

// test function to check State equal 200

tape("insure Status is equal 200",function(t){
    const expected = 200;
    makeRequest(url,function(xhr){
        actual=xhr.status;
        t.equal(actual,expected,"should State equal 200");
        t.end();
    })
});

// test function to check return responseText 

tape("insure responseText is not response null ",function(t){
    const expected = null;
    makeRequest(url,function(xhr){
        actual=xhr.responseText;
        t.isNotEqual(actual,expected,'failed to retrive null');
        t.end();
    })
  
});

// test function to check return responseText 

tape("insure responseText retreve object  ",function(t){
    const expected = typeof({});
    makeRequest(url,function(xhr){
        actual=typeof(xhr.responseText);
        t.isNotEqual(actual,expected,'the responseText not retreve object');
        t.end();
    })
  
});


tape("test ticket   ",function(t){
    const urlticket="http://api.issc.co/public/ticket/";
    const expected = ['bnazmi', 'emanKhaledh', 'InassTubail', 'ishak52'];
    let actual;
    makeRequest(urlticket, function(response){
        ticket(response, function(data){
            actual = data;
            t.deepEqual(actual,expected,'the ticket not retreve data');
            t.end();    
        })
    });
});

tape("filter rsponse data   ",function(t){
    const urldata="http://www.omdbapi.com/?s=red&apikey=6245962e";
    const expected = ['bnazmi', 'emanKhaledh', 'InassTubail', 'ishak52'];
    let actual;
    makeRequest(urldata, function(response){
        filter(response, function(data){
            actual = data;
            t.deepEqual(actual,expected,'the ticket not retreve data');
            t.end();    
        })
    });
});

