function searchProducts(){
    let searchString = document.getElementById("search-input").value;
    if (searchString.includes("ue") || searchString.includes("mega") || searchString.includes("boom")){
        window.location.href = "megaboom.html";
    }
    else{
        window.location.href = "noresults.html";
    }
}
function dropdownMenu(){
    var dropdown = document.getElementById("menu-dropdown");
    if (dropdown.className == "collapsed") {
        dropdown.className = "open"
    } else {
        dropdown.className = "collapsed"
    }
}
function homepageSelectFeatured(){
    var featuredLine = document.getElementById("homepage-featured-line");
    var bestsellingLine = document.getElementById("homepage-bestselling-line");
    var newLine = document.getElementById("homepage-new-line");
    featuredLine.className = "homepage-products-selector-line";
    bestsellingLine.className = "homepage-products-selector-line-unselected";
    newLine.className = "homepage-products-selector-line-unselected";
}
function homepageSelectBestselling(){
    var featuredLine = document.getElementById("homepage-featured-line");
    var bestsellingLine = document.getElementById("homepage-bestselling-line");
    var newLine = document.getElementById("homepage-new-line");
    featuredLine.className = "homepage-products-selector-line-unselected";
    bestsellingLine.className = "homepage-products-selector-line";
    newLine.className = "homepage-products-selector-line-unselected";
}
function homepageSelectNew(){
    var featuredLine = document.getElementById("homepage-featured-line");
    var bestsellingLine = document.getElementById("homepage-bestselling-line");
    var newLine = document.getElementById("homepage-new-line");
    featuredLine.className = "homepage-products-selector-line-unselected";
    bestsellingLine.className = "homepage-products-selector-line-unselected";
    newLine.className = "homepage-products-selector-line";
}
function addBlackToCart(){
    sessionStorage.setItem("black", 1);
}
function addBlueToCart(){
    sessionStorage.setItem("blue", 1);
}
function removeBlackFromCart(){
    sessionStorage.setItem("black", 0);
}
function removeBlueFromCart(){
    sessionStorage.setItem("blue", 0);
}
function goToCart(){
    if (sessionStorage.getItem("black") == 1){
        if (sessionStorage.getItem("blue") == 1){
            window.location.href = "cart-both.html";
        }
        else{
            window.location.href = "cart-black.html";
        }
    }
    else if (sessionStorage.getItem("blue") == 1){
        window.location.href = "cart-blue.html";
    }
    else{
        window.location.href = "cart-empty.html";
    }
}