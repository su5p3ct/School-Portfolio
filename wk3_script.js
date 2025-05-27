    window.onload = function() {
        console.log("document.onload", Date.now());
 
        var myBtn = document.querySelector("#myBtn");
        myBtn.addEventListener("click", openForm, false);
 
        var close = document.querySelector("#close");
        close.addEventListener("click", closeMe, false);
 
        var myForm = document.querySelector("#myForm");
 
        function openForm() {
            //Unhide form
            myForm.style.display = "block";
        }
 
        function closeMe() {
            //Hide form
            myForm.style.display = "none";
        }
    }
    window.addEventListener("load", function() {
        console.log("window.onload", Date.now());
    });