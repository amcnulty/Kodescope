window.onload = function() {
    
    function load() {
        
    }
    
    function scroll() {
        if (window.scrollY > pagescroll && window.scrollY > 200) {
            document.getElementById("nav").style.top = "4.9em";
        }
        else {
            document.getElementById("nav").style.top = "8.9em";
        }
        pagescroll = window.scrollY;
    }

    var pagescroll;

    window.addEventListener("scroll", scroll);

    load();
}