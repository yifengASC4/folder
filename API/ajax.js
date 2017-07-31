var myID = "f467a420";

var myKey = "17eced2093d2e10dd1111ff66e8ed64c";

var myUrl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + myID + "&appKey=" + myKey;

$.ajax( {

    url:myUrl,
    success: function(data) {
        // console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $('body').append("<h2> This "+ name +" has " + cals + " kcals !!!!!</h2>");
    }
})