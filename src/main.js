$(document).ready(function() {
  $('#createTheme').on('click', function() {
    name = $('#name').val();
    messages = $('#message').val();
    $.ajax({
      data: {
        author_name: name,
        content: messages
      },
      type: 'POST',
      dataType: 'json',
      url: 'http://private-anon-7df87ec8eb-foroapi.apiary-proxy.com/topics',
    })
      .done(function(msg) {
        $('.card').prepend(`<div class="card-body">
          <p class="card-text">${msg.content}</p>
          <a href="#" class="card-link">${msg.author_name}</a>
          <a href="#" class="card-link" id="response-post">${msg.responses_count}</a>
          <div id="container-response">
            <!-- contiene respuestas -->
          </div>
        </div>`);
      });
  });
  $.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'GET',
    contentType: 'application/json',
    crossOrigin: true,
    success: function(response) {
      console.log(response);
      $.each(response, function(i, data) {
        let listForum = `<div class="card-body">
          <p class="card-text">${data.content}</p>
          <a href="#" class="card-link">
          
          </a>
          <a href="#" class="card-link" id="response-post">${data.responses_count}</a>
          <div id="container-response">
            <!-- contiene respuestas -->
          </div>
        </div>`;
        $('.card').append(listForum);
      });
    },
    fail: function(request) { }
  });
  $('#search-foro').on('click', function(event) {
    $('.card').empty();
    var searchForo = $('#textSearch-foro').val();
    event.preventDefault();
    $.getJSON('https://examen-laboratoria-sprint-5.herokuapp.com/topics', function(find) {
      var findFilter = find.filter(function(find) {
        return find.content.toLowerCase().indexOf(searchForo) >= 0;
      });
      console.log(findFilter);
      $.each(findFilter, function(i, data) {
        let themeFind = `<div class="card-body">
          <p class="card-text">${data.content}</p>
          <a href="#" class="card-link">${data.author_name}</a>
          <a href="#" class="card-link" id="response-post">${data.responses_count}</a>
          <div id="container-response">
            <!-- contiene respuestas -->
          </div>
        </div>`;
        $('.card').append(themeFind);
      });
    });
  });
});
