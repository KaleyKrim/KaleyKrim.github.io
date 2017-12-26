var notFirstSearch = false;
var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');
var recommendation = document.getElementById('recommendation');

function setUrl(searchTerms){
  var url = `http://www.omdbapi.com/?t=${searchTerms}&apikey=a6e776ca`;
  return url;
}

function makeDiv(text, data, moreText, parentDiv){
  var div = document.createElement('div');
  div.className = 'recommendation-text';
  div.innerHTML = text + ' ' + data + moreText;
  parentDiv.appendChild(div);
}

function renderPoster(url, parentDiv){
  var div = document.createElement('div');
  div.style.height = "400px";
  div.style.width = "300px"
  div.style.backgroundImage = `url('${url}')`;
  parentDiv.appendChild(div);
}

function renderRecommendation(obj){

  if(notFirstSearch){
    recommendation.removeChild(recommendation.childNodes[0]);
  }
  var judgment = null;

  if (obj.average > 80){
    judgment = 'Ooh yeah girl, u should watch it. Its average internet rating is'
  }else if (obj.average > 60){
    judgment = 'I mean, u can, if u want. Its average internet rating is'
  }else{
    judgment = `Oh girl, I wouldn't. Its average internet rating is`;
  }

  var results = document.createElement('div');
  recommendation.appendChild(results);

  makeDiv('Oh girl, u want to watch', obj.title, '?', results);
  renderPoster(obj.poster, results);
  makeDiv(judgment, obj.average, '/100, lol', results);
  notFirstSearch = true;
  searchInput.value = "";

}

function makeObject(jsonData){
  var title = jsonData.Title;
  var poster = jsonData.Poster;
  var average = null;

  if(!jsonData.Ratings[1]){
    var imdb = (jsonData.Ratings[0].Value.replace(/\/10/g,""))*10;
    average = imdb;
  }else if(!jsonData.Ratings[2]){
    var imdb = (jsonData.Ratings[0].Value.replace(/\/10/g,""))*10;
    var rotten = parseInt(jsonData.Ratings[1].Value.replace(/\%/g,""));
    average = Math.round((imdb + rotten)/2);
  }else{
    var imdb = (jsonData.Ratings[0].Value.replace(/\/10/g,""))*10;
    var rotten = parseInt(jsonData.Ratings[1].Value.replace(/\%/g,""));
    var meta = parseInt(jsonData.Ratings[2].Value.replace(/\/100/g,""));
    average = Math.round((imdb + rotten + meta)/3);
  }
  return{
    title: title,
    poster: poster,
    average: average
  }
}

function getData(){
  var data = JSON.parse(this.responseText);
  var movieStatObject = makeObject(data);
  renderRecommendation(movieStatObject);
}


function makeRequest(url){
  var req = new XMLHttpRequest();
  req.addEventListener('load', getData);
  req.open("GET", url);
  req.send();
}

function startAction(){
  var searchTerms = searchInput.value.toLowerCase().replace(/\ /g,"+");
  makeRequest(setUrl(searchTerms));
}

searchButton.addEventListener('click', startAction);