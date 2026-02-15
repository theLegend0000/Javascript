const form = document.querySelector("form")

form.addEventListener("submit", function(e){

    e.preventDefault()  //don't submit initially

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    // This only allows values when submitted, to prevent by defalut empty values

    const result = document.querySelector("#results")

    if (height == "" | height < 0 || isNaN(height)){

        result.innerHTML = "Please provide a valid height"
    }
    else if (weight == "" | weight < 0 || isNaN(weight)){

        result.innerHTML = "Please provide a valid weight"
    }
    else{
        result.innerHTML = (weight / ((height*height)/10000)).toFixed(2)
        
    }
})