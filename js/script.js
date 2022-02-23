let areaBoxes = document.querySelector(".box-area");


for (index = 1; index <= 100; index++){
    if (index % 3 == 0){
        areaBoxes.innerHTML += `<div class="box green">fizz</div>`;
    } else if (index % 5 == 0){
        areaBoxes.innerHTML += `<div class="box yellow">buzz</div>`;
    } else if (index % 15 == 0){
        areaBoxes.innerHTML += `<div class="box red">fizzbuzz</div>`;
    } else {
        areaBoxes.innerHTML += `<div class="box">${index}</div>`;
    }
}

