var count = 0;


    var plus = document.querySelector(".dec").addEventListener("click", function(){
        if (count > 0) {
            document.querySelector(".quantity").innerHTML = --count;}
    });

    var min = document.querySelector(".inc").addEventListener("click", function(){
        document.querySelector(".quantity").innerHTML = ++count;
    });



