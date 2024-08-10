document.querySelector(".login").addEventListener("click", function() {
    var card = document.querySelector(".wrapper");

    if (card.style.visibility === "hidden" || card.style.visibility === "") {
        card.style.visibility = "visible";
    } else {
        card.style.visibility = "hidden";
    }
    document.querySelector(".wrapper2").style.display="none";
});
document.querySelector(".icon-close").addEventListener("click", function() {
    var card = document.querySelector(".wrapper");
        card.style.visibility = "hidden";
});
document.querySelector(".register-link").addEventListener("click",function(){
    document.querySelector(".wrapper").style.visibility = "hidden";
    document.querySelector(".wrapper2").style.display="block";
})
document.querySelector(".wrapper2 .icon-close").addEventListener("click", function() {
    var card = document.querySelector(".wrapper2");
        card.style.display = "none";
});
document.querySelector(".wrapper2 .register-link").addEventListener("click",function(){
    document.querySelector(".wrapper2").style.display = "none";
    document.querySelector(".wrapper").style.visibility="visible";
})
document.getElementById("button1").addEventListener("click",function(){
    document.querySelector(".registration-form").style.display="block";
})