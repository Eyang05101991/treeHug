var linkContainer = document.getElementsByClassName("navbar-nav");
var links = document.getElementsByClassName("nav-item");

for(var i = 1; i <= links.length; i++){
    links[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");  
        if(current.length > 0){
            current[0].className = current[0].className.replace(" active", ""); 
        }
        this.className += " active"; 
    }); 
}