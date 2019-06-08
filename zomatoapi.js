//zomato api   

$(document).ready(function () {

    //adding click event listener
    $("#submit-button").on("click", function () {
        var cuisine = $("#cuisine-type").val().trim();
        // var cuisine = $(this).attr("#cuisine-type");
        console.log(cuisine); 
        //   var location = $(this).attr("#location");
        //   var cuisine = "chinese"
        //   var location = "nyc"
        //curl -X GET --header "Accept: application/json" --header "user-key: 7eab08941dfd95b142f6e1dd717a131b" "https://developers.zomato.com/api/v2.1/categories"
       
        https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=pizza&count=10

        var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q="
        var cuisineType = cuisine;
        var searchCount = "10";
        var searchURL = queryURL + cuisineType + "&count=" + searchCount;

        // `https://developers.zomato.com/api/v2.1/cuisine?q=${cuisine}&start=0&count=20`;

      
        // var searchKey = cuisine;

        // var searchCount = "&start=0&count=20";

        // var searchURL = queryURL + {searchKey} + searchCount;

        //prevents page from reloading on form submit

        event.preventDefault();


        //make ajax request to the API
        $.ajax({

            url: searchURL,
            method: "GET",
            // mode: 'cors',

            
            headers: {
                'Accept': 'application/json',
                'user-key': '7eab08941dfd95b142f6e1dd717a131b',
            },

        }).then(function (response) {
            console.log(response);
        });


    });
});