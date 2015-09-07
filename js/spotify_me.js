$(document).ready(function() {

console.log('hello')

var selectCriteria = $('#search-criteria')

var searchBox =$('#input');

var searchString;

var searchType;

var searchButton = $('#search');

selectCriteria.on('change',getResults);
searchBox.on('change', getSearchString);
searchButton.on('click',getResults);

function getSearchString() {
  searchString = searchBox.val().toLowerCase();
  console.log(searchString);
}

function getSearchType() {
  searchType = selectCriteria.val();
  console.log('Search type =' + searchType)
}

function getResults() {

  $('#results').empty();

  getSearchType();  

  $.get('https://api.spotify.com/v1/search?q='+searchString+'&type='+searchType, function(response){

  var items =  response[searchType+'s']['items']

  console.log(items);

  $.each(items, function(index, item) {
    console.log(items[index]['name']);

    $('#results').append("<p>"+items[index]['name']+"</p>")
  })
  // $.each(response[searchType+'s']['items'];

  })



}


});