function changeColor(color, name) {

    document.body.style.backgroundColor = color;

    document.getElementById("preview").style.backgroundColor = color;

    document.getElementById("colorCode").innerText = color;

    document.getElementById("selectedColor").innerText =
        "Selected: " + name;
}

function randomColor() {

    let random = Math.floor(Math.random() * 16777215);

    let color = "#" + random.toString(16).padStart(6, "0");

    changeColor(color, "Random Color");
}

function resetColor() {

    document.body.style.backgroundColor = "#101322";

    document.getElementById("preview").style.backgroundColor =
        "#101322";

    document.getElementById("colorCode").innerText = "#101322";

    document.getElementById("selectedColor").innerText =
        "Selected: Default";
}
