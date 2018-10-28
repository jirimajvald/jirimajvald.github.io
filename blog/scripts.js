let counter = 0;
$('#newItem').on('click', (event) => {
    event.preventDefault()
    let newUsersTitle = $("#newTitle").val();
    let newUsersArticle = $("#newArticle").val();
    let path = "posts/" + counter;
    counter = counter + 1;
    let dataToSave = {
        title: newUsersTitle,
        text: newUsersArticle
    };
    fb.ref(path).set(dataToSave);
    $('.articles').append("<div class=newPostTitle>" + "<h2>" + $("#newTitle").val() + "</h2>" + "</div>");
    $('.articles').append("<div class=newPostArticle>" + "<p>" + $("#newArticle").val() + "</p>" + "</div>");
})

let number = 0;
$('#button').on('click', (event) => {
    number = number + 1;
    $('#number').text(number);
})

let initialData = [
    {
        title: "First post",
        text: "Text of first one."
    }, {
        title: "Second",
        text: "Wow, here is next article."
    }]

initialData.forEach(post => {
    $('.articles').append("<div class=newPostTitle>" + "<h2>" + post.title + "</div>" + "</h2>");
    $('.articles').append("<div class=newPostArticle>" + "<p>" + post.text + "</p>" + "</div>");
})

let newUsersTitle = $("#newTitle").val();
let newUsersArticle = $("#newArticle").val();

let path = "posts/1";
let dataToSave = {
    title: newUsersTitle,
    text: newUsersArticle
};
fb.ref(path).set(dataToSave);

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    savedPosts.forEach(post => {
        $('.articles').append("<div class=newPostTitle>" + "<h2>" + post.title + "</div>" + "</h2>");
        $('.articles').append("<div class=newPostArticle>" + "<p>" + post.text + "</p>" + "</div>");
    })
  });