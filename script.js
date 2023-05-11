function slider() {
    let sliderValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + sliderValue + "% 0," + sliderValue + "% 100%, 0 100%)";

    console.log("polygon(0 0," + sliderValue + "% 0," + sliderValue + "% 100%, 0 100%)")
}