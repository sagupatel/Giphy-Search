var topicsArr = ["Happy", "Confused", "Sad", "Angry", "Blah"];
console.log(topicsArr);

var apiKey = "SEGhca3zIjmy34cupmnB3kz6M54i9pJe"

$("button").on("click", function() {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + apiKey + "2&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log(response)
      var results = response.data
      for (let i = 0; i < results.length; i++) {
        var topicDiv = $("<div>");
        var rating = results[i].rating;
         var p = $("<p>").text("Rating: " + rating);
         var topicImage = $("<img>");
         topicImage.attr("src", results[i].images.fixed_height.url)
            topicImage.attr("data-state")
            topicImage.attr("data-still")
            topicImage.attr("data-animate")
        topicDiv.append(p);
        topicDiv.append(topicImage);
        $("#gif-add").prepend(topicDiv);
      }
})
})
var newTopicArr = []
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < newTopicArr.length; i++) {
      var topicBtn = $("<button>");
      topicBtn.text(newTopicArr[i]);
      topicBtn.attr("class", "topic-btn");
      topicBtn.attr("data-topic", newTopicArr[i])
      $("#buttons-view").append(topicBtn)
    }
  }
  $(document).on("click", ".topic-btn", function (e) {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic+ "&api_key=W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V2&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        console.log(response.data)
        var img= response.data
        for (let i = 0; i < img.length; i++) {
            var topicDiv2 = $("<div>");
            var rating = img[i].rating;
             var p = $("<p>").text("Rating: " + rating);
             var topicImage = $("<img>");
             topicImage.attr("src", img[i].images.fixed_height.url);
             topicDiv2.append(p);
            topicDiv2.append(topicImage);
        $("#gif-add").prepend(topicDiv2);
    }
      })
  })
  
  $("#add-topic").on("click", function (event) {
    event.preventDefault();
    var userTopic = $("#topic-input").val();
    newTopicArr.push(userTopic)
    renderButtons();
  });
  renderButtons();
    