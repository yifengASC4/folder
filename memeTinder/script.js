$.ajax({
    url: "https://api.imgflip.com/get_memes",
}).done(function(data){
    console.log(data)
    var photo = data.memes
//     var meme = memes.name.first;
    $('.mememe').append("<iframe src= "+ photo +" >");
    // var results = data.results;
    // var userFirstName = /
})
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