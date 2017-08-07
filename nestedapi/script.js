var myUrl = "https://randomuser.me/api/";
var countryCodes = "https://restcountries.eu/rest/v2/alpha?codes=nl";
$.ajax({
    url: myUrl,
}).done(function(data){
    console.log(data);
    var user = data.results[0];
    var photo = user.picture.large;
    var title = user.name.title;
    var firstName = user.name.first;
    var lastName = user.name.last;
    var sex = user.gender;
    var email = user.email;
    var birth = user.dob;
    var phone = user.cell;
    var a = user.location.state;
    var b = user.location.city;
    var c = user.location.street;
    var d = user.location.postcode
    $('body').append("<img src= "+ photo +">")
    $('body').append("<h2> Title: "+ title +"</h2>" )
    $('body').append("<h2> First Name: "+ firstName +"</h2>" )
    $('body').append("<h2> Last Name: "+ lastName +"</h2>" )
    $('body').append("<h2> Gender: "+ sex +"</h2>" )
    $('body').append("<h2> Date of Birth: "+ birth +"</h2>" )
    $('body').append("<h2> E-mail: "+ email +"</h2>" )
    $('body').append("<h2> Number: "+ phone +"</h2>" )
    $('body').append("<h2> State: "+ a +"</h2>" )
    $('body').append("<h2> City: "+ b +"</h2>" )
    $('body').append("<h2> Address: "+ c +"</h2>" )
    $('body').append("<h2> Zipcode: "+ d +"</h2>" )
})
$.ajax({
    url: countryCodes,
}).done(function(data){
    console.log(data);
    var date = data;
    var country = date.alpha2Code;
    $('body').append("<h2> Country: "+ country +"</h2>");
});
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}