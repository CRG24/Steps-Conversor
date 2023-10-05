//the fun part:)

//Event Listener to trigger the function
document.querySelector(".calculate").addEventListener("click", function() {
      steps_conv()
      //hide output
      //document.getElementById("km").style.display = "none";
      //document.getElementById("calories").style.display = "none";
      //show loader animation
     // document.querySelector(".loader").style.display = "block";
     // setTimeout(steps_conv, 2000)
})

document.querySelector(".clear").addEventListener("click", clear)

//Calculate function

function steps_conv() {
    // declaring steps variable
    const steps = document.getElementById('steps').value;
    // conversion from steps to Km
    let index = (steps * 0.0008045).toFixed(2);
    // conversion from km to calories burned
    let index1 = (index *55).toFixed(2)
    //console.log("Your steps in Km: " + index)
    //console.log("Your calories burned :" + index1)

    if(steps != 0) {
        const km = document.getElementById("km");
        const calories = document.getElementById("calories");

        //displaying results on the screen
        km.innerHTML = "KM walked = " + index + "km";
        calories.innerHTML = "Calories burned = " + index1 + "Cal";

        //Hiding the loader and the output
        document.getElementById("km").style.display = "block";
        document.getElementById("Calories").style.display = "block";
        document.querySelector(".loader").style.display = "none";
    } else {
        function error() {
                document.getElementById("km").style.display = "block";
                document.getElementById("Calories").style.display = "block";
                document.querySelector(".loader").style.display = "none";
                //error
                document.getElementById("km").innerHTML = "Error: Eneter number of steps first"                
            }
    }

}

//clear function
function clear() {
    document.getElementById('steps').value = "";
    document.getElementById('km').innerHTML= "";
    document.getElementById('calories').innerHTML= "";
}


