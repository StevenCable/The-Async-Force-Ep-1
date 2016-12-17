/*jshint esversion: 6*/

console.log('check yoself befo you wreck yoself, bruh');;
// (function(window) {

  function reqListener(){
    let person = JSON.parse(this.responseText);
    let person4Name = person.name;
    document.getElementById('person4Name').innerHTML = person4Name;
    
    function reqListenerHome(){
      let person4HomeWorldObject = JSON.parse(this.responseText);
      let person4HomeWorld = person4HomeWorldObject.name;
      document.getElementById('person4HomeWorld').innerHTML = person4HomeWorld; 
    }
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListenerHome);
    oReq.open('GET', person.homeworld);
    oReq.send();
  }


  //get films







  const personReq = new XMLHttpRequest();
  personReq.addEventListener('load', reqListener);
  personReq.open('GET', 'http://swapi.co/api/people/4/');
  personReq.send();

  let filmList = document.getElementById('filmList');

  const filmsReq = new XMLHttpRequest();
  filmsReq.addEventListener('load', function(){
  let filmsArray = JSON.parse(this.responseText);
    for (let i = 0, len = filmsArray.results.length; i<len; i++){

    let filmListItem = document.createElement('li');
    let filmTitleHeader = document.createElement('h2');
    filmTitleHeader.innerHTML = filmsArray.results[i].title;
    filmListItem.appendChild(filmTitleHeader);
    filmList.appendChild(filmListItem);
    
      //for every film get all planets that were listed in this film (new HXR request for each film and for each planet)
    }

  });
  filmsReq.open('GET', "http://swapi.co/api/films/");
  filmsReq.send();
// }(window));