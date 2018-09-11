let searchResultTemplateString = document.getElementById('search-results-template').innerHTML;
let renderResults = Handlebars.compile(searchResultTemplateString);


$('.loader').css('opacity','0');

$('form').on('submit', function(event){
  event.preventDefault();
  //$('#results').html('Loading...');



  let search = $('#keywords').val();

  let url = `https://www.reddit.com/r/${search}.json`;

  let promise = $.ajax ({
    type: 'GET',
    url: url
  });
  $('.loader').css('opacity','1');

  promise.then(function(response){
    console.log(response);

    let renderedResults = renderResults({
      item: response
    }); //i don't know what to put inside the renderResults!!

    let html = '';
    $('.loader').hide();

    $('#results').append(renderedResults);

  }, function(error){
    console.log('error', error);
  });

})
