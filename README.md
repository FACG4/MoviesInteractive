# MoviesInteractive

![movies](http://www.bestfon.info/images/joomgallery/originals/3d_3/movietime_20160720_1353878622.jpg)

#### About:
The basic idea of the site is to write the movie's name you want to search for,
after clicking search, the information of all the possible results will be grabbed and
appear as a search results

when you choose any Movie you want, the page will be updated the movie's details which includes:
  1. The movies title
  2. The movies release date .
  3. The movie's trailer.
  4. The movie's poster.


### The file structure:
1. index.html "The main page".
2. style.css "page style"
3. index.js and function.js "main and API functions and DOM"

### How ?
1. The user choose the movie that he want from the populars movies list to start watching the trailer of the movie in the screen.
2. When the user type the name of the movie in the search text field and choose to search, a request to Movies Data base API is sent and the response presents all the matching movies with it's details.
3. when you click on the Movies that appeared in the results field the trailer will also run in the screen.

### Splitting the Work:
   . In the first day we made a sketch of our site and decided the functions and our API's.   
   . Then we started the TDD Part to our functions.
   . Then we started to design the html, dom and API's parts.
   . In the second day we completed the dom and API then made the style of our work.

### API's that we used:
  .(api.themoviedb.org/3)"https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=5bb2c5fa478415bd431d599cac1bd762".
  .(OMDB) `http://www.omdbapi.com/?s=${input}&apikey=6245962e`.

### How to run?

#### use this url:

  . (https://facg4.github.io/MoviesInteractive/public/index.html).

#### or run locally:
  .$ git clone https://github.com/ORG/PROJECT.git
  .$ cd MoviesInteractive
  .$ npm install

###### This project is done by:
        Abdallah, Inas, Ishak and Eman.
