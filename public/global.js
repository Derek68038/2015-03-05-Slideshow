window.onload = function() {
  nextLink = document.getElementById("nextSlide");
  prevLink = document.getElementById("prevSlide");
  nextLink.addEventListener("click", findNextSlide);
  prevLink.addEventListener("click", findPrevSlide);
  nextLink.click = function() {return true};
  prevLink.click = function() {return true};
}

function findObject() {
var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/slides/find");
  js_req.send(new FormData(findForm));
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Here is the slide info - Id: " + r.id + ", Title: " + r.title + ", Text: " + r.text);
  }, false);
}

var x = 0

function findNextSlide() {
  var y = x += 1
  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/slides/find/" + y);
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
      var h2 = document.createElement("h2");
      var p1 = document.createElement("p");
      var p2 = document.createElement("p");
      var p3 = document.createElement("p");
      var everything = document.createElement("li");
      
      var id = document.createTextNode("ID: " + r.id);
      var studentName = document.createTextNode("Name: " + r.title);
      var age = document.createTextNode("Age: " + r.text);      

      everything.appendChild(h2.appendChild(id));
      everything.appendChild(p1.appendChild(studentName));
      everything.appendChild(p2.appendChild(age));
      
      document.getElementById("nextSlide").appendChild(everything); 
  }, false);
}

function findPrevSlide() {
  var z = x -= 1
  var js_req = new XMLHttpRequest;
  js_req.open("post", "http://localhost:4567/slides/find/" + z);
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
      var h2 = document.createElement("h2");
      var p1 = document.createElement("p");
      var p2 = document.createElement("p");
      var p3 = document.createElement("p");
      var everything = document.createElement("li");
      
      var id = document.createTextNode("ID: " + r.id);
      var studentName = document.createTextNode("Name: " + r.title);
      var age = document.createTextNode("Age: " + r.text);      

      everything.appendChild(h2.appendChild(id));
      everything.appendChild(p1.appendChild(studentName));
      everything.appendChild(p2.appendChild(age));
      
      document.getElementById("nextSlide").appendChild(everything); 
  }, false);
}