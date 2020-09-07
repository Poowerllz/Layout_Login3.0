var counter = 1;

function ocultar1(){
    var element = document.getElementById("1Page");
          element.classList.add("hide");

          var element = document.getElementById("2Page");
          element.classList.remove("hide");
          alterapage2();
        }
        
        function mostrar1(){
            
            var element = document.getElementById("1Page");
            element.classList.remove("hide");
            var element = document.getElementById("2Page");
            element.classList.add("hide");   
          alterapage1();
}

function alterapage1() {

    document.getElementById("Page1").style.display = "flex";
    document.getElementById("Page2").style.display = "none";

    setTimeout(function(){ 
        document.getElementById("1Page").style.display = "flex";
         document.getElementById("2Page").style.display = "none";
    },700);

}

function alterapage2() {
    
    document.getElementById("Page1").style.display = "none";
    document.getElementById("Page2").style.display = "flex";

    setTimeout(function(){ 
        document.getElementById("1Page").style.display = "none";
        document.getElementById("2Page").style.display = "flex";
    },700);

}

function Keep() {
    var a = document.getElementById("Password");
    var b = document.getElementById("Username");
    counter = counter + 1;

    if(counter%2 == 0){

            a.setAttribute("readonly", "readonly");
            b.setAttribute("readonly", "readonly");
            
            document.getElementById("Username").style.backgroundColor = "rgba(250, 249, 155, 0.288)";
            document.getElementById("Password").style.backgroundColor = "rgba(250, 249, 155, 0.288)";
            console.log(counter)

    } else {

        a.removeAttribute("readonly", "readonly");
        b.removeAttribute("readonly", "readonly");
        
        document.getElementById("Username").style.backgroundColor = "rgba(250, 249, 255, 0.288)";
        document.getElementById("Password").style.backgroundColor = "rgba(250, 249, 255, 0.288)";
} 

}
 

