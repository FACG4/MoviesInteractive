var popUrl = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=5bb2c5fa478415bd431d599cac1bd762";

// var off=select('.on-off');

// off.addEventListener('click', function(){
//
// })

// var imgRes=select('#poster');
//
// imgRes.addEventListener('click', function(){
//
//   var id=imgRes.alt;
//
//
//   var url1="http://api.themoviedb.org/3/movie/" +id+ "/videos?api_key=5bb2c5fa478415bd431d599cac1bd762";
//   console.log(url1);
//
// })


function displayPop(response) {
  //  console.log(response);
  var popularImage;
    response.results.map(function(repo) {
       popularImage= "http://image.tmdb.org/t/p/w185/" + repo.poster_path;
       var popularfigure = document.createElement("figure");
       popularfigure.classList.add('figure');
       var DOM_img = document.createElement("img");
       var figcaption = document.createElement("figcaption");
       DOM_img.src = popularImage;
       DOM_img.alt= repo.id;
       figcaption.textContent=repo.overview;
       figcaption.classList.add('figcaption');
       figcaption.classList.add('disappear');
       DOM_img.addEventListener("mouseover",function(){
        figcaption.classList.toggle('disappear'); 
        
       });
       DOM_img.addEventListener("mouseout",function(){
        figcaption.classList.toggle('disappear'); 

       })
       var a=select('#popular');
       a.appendChild(popularfigure);
       popularfigure.appendChild(DOM_img);
       popularfigure.appendChild(figcaption);
       DOM_img.addEventListener('click', function(){
         var screen=select('#screen');
         screen.textContent = "";

         var id=DOM_img.alt;

         var urlKey="http://api.themoviedb.org/3/movie/" +id+ "/videos?api_key=5bb2c5fa478415bd431d599cac1bd762";

        makeRequest(urlKey, function(response) {

          var youtubeKey=response.results[0].key;
            var youtubeUrl="https://www.youtube.com/embed/"+youtubeKey;

             var video = document.createElement("iframe");
                  video.src=youtubeUrl;


                  screen.appendChild(video);
                  screen.classList.toggle('disappear');

        });

    

       });

    });

  };


  
  makeRequest(popUrl, displayPop);
  window.onload=search();

  function connect(url,callback) {
      console.log(url)
      var xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function() {
          if(xhr.readyState==4 && xhr.status==200){
              var response = JSON.parse(xhr.responseText);
              console.log(response)
              callback(response);
          };
      };
      xhr.open("GET",url,true);
      xhr.send();
  }

  function search(cb) {
      var result = document.querySelector(".search-reasult");
  var btn =document.querySelector("#search-button");


      btn.addEventListener("click", function(event){
          var input = document.querySelector("#search-index").value;
          var url =`http://www.omdbapi.com/?s=${input}&apikey=6245962e`;
          result.innerHTML="";


      connect(url, function(res) {
          event.preventDefault();
         res.Search.map(function(i){
          var sub_result = document.createElement("div");
          sub_result.className="mov_list";
          result.appendChild(sub_result);
              var title = document.createElement("h4");
              var year = document.createElement("p");
              var poster=document.createElement("img");
              sub_result.appendChild(poster);
              var y=i.Poster;
              if(y !="N/A"){
                  poster.src=y;
                }else{
                    poster.src='../public/image/notFound.jpg';
                }
              var imgId = i.imdbID;
              poster.setAttribute("alt", imgId);
              poster.setAttribute("id", 'poster');
              sub_result.appendChild(title);
              var x =i.Title;
              title.textContent=x;
              sub_result .appendChild(year);
              var z = i.Year;
              year.textContent=z;
          });

          select("#search-reasult").scrollIntoView();

      });
     
  });
 
  }

 
  select('#search-button').addEventListener("click", function(event){
    event.preventDefault;
    var selectHead=select("#search-reasult").appendChild(document.createElement('h2'));
    selectHead.textContent='Search Ruslt';
  });

  select('.on-off').addEventListener("click", function(event){
    var x=select('.screen');
    x.classList.toggle('disappear');
  });

//   this.select('.figure')[0].onmouseover( function(event){
//     var figcaption=select('.figcaption');
//     figcaption.classList.toggle('disappear');
//   });
  
//  console.log(this.select('.figure')[0]);

// var loading = document.createElement("span");
// loading.textContent='loading ...'
// select('.fullScreen').appendChild('loading');
//  var screen=select('#screen');