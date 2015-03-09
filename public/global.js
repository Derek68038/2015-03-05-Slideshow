window.onload = function() {
  nextLink = document.getElementById("nextSlide");
  prevLink = document.getElementById("prevSlide");
  nextLink.addEventListener("click", findNextSlide);
  prevLink.addEventListener("click", findPrevSlide);
  nextLink.click = function() {return false};
  prevLink.click = function() {return false};
}

var num = 0  // Beginning the counter for the slide order

function findNextSlide() {
  if (num === 3) {
    alert("Sorry, you've reached the end of the slideshow.")
  } else {
    var order = num += 1  // Increments slide order by 1 when clicking next
    var js_req = new XMLHttpRequest;
    js_req.open("post", "http://localhost:4567/slides/find/" + order);
    js_req.send();
    js_req.addEventListener("load", function(){
      r = JSON.parse(js_req.response);
      document.getElementById("title").innerHTML=r.title;
      document.getElementById("text").innerHTML=r.text; 
       
    }, false);
  }
}

function findPrevSlide() {
  if (num === 1) {
    alert("You are at the beginning of the slideshow.")
  } else {
    var order = num -= 1  // Decrements slide order by 1 when clicking previous
    var js_req = new XMLHttpRequest;
    js_req.open("post", "http://localhost:4567/slides/find/" + order);
    js_req.send();
    js_req.addEventListener("load", function(){
      r = JSON.parse(js_req.response);
      document.getElementById("title").innerHTML=r.title;
      document.getElementById("text").innerHTML=r.text; 
    }, false);
  }
}