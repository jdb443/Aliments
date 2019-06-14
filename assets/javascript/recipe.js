
$(document).ready(function () {

    //adding click event listener
    $("#submit-button").on("click", function () {
        var app_id = "app_id=522e495c"
        var app_key = "app_key=7a10cb63e3cc3756fddfd774a4d1f20b"
        var cuisine = $("#search").val().trim();
        var url = `https://api.edamam.com/search?q=` + cuisine + `&` + app_id + `&` + app_key + `&from=0&to=10&calories=591-722&health=alcohol-free`
        //console.log(url);
        // create a var for the chicken (user input)

        //prevents page from reloading on form submit
        event.preventDefault();

        $.ajax({
            url: url,
            method: "GET",
            dataType: 'jsonp'
        }).done(function (response) {
            var hits = response.hits;
            console.log(response);
            // var image = hits.healthLabels.image;
            // var healthLabel = hits.ingredients.label;
            // var caution = hits.cautions;
            //var recipe = 
            hits.forEach(function (hit) {

                var imageUrl = hit.recipe.image;
                var healthLabel = hit.recipe.label;
                var caution = hit.recipe.cautions;
                var calories = Math.floor(hit.recipe.calories);
                var menuURL = hit.recipe.shareAs;
                // console.log(hits.recipe.ingredientLines);
                // console.log(hits.recipe.ingredientLines.length);
                var foodImage = $('<img>');
                foodImage.attr('src', imageUrl);
                foodImage.attr('alt', 'food image');
                //setting up the recipe links attribute
                var recipeLink = $('<a>');
                recipeLink.attr('src', menuURL);
                recipeLink.attr('alt', 'recipe');
                console.log(menuURL);
                //console.log(Url);
                // Create the new row
                var newRow = $('<tr class="inlineH s6">').append(
                    $('<td class="inlineH s2 center">').text(healthLabel),
                    $('<td class="inlineH s2 center">').html('<img class="api-image-smaller" src="' + imageUrl + '">'),
                    $('<td class="inlineH s2 center">').text(caution),
                    $('<td class="inlineH s2 center">').text(calories),
                    $('<td class="inlineH s2 center">').html('<a target="_blank" href="' + menuURL + '">Recipe</a>'),
                );
                console.log(newRow)
                // Append the new row to the table
                $('#recipe-table > tbody').prepend(newRow);
            });
        });
    });
});