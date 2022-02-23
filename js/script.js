let areaBoxes = document.querySelector(".box-area");


for (index = 0; index <= 100; index++){
    areaBoxes.innerHTML += `<div class="box">${index}</div>`;
    console.log(index);
    if (index % 2 == 0){
        areaBoxes.innerHTML += `<div class="box">${index}</div>`;
    }
}