const counter = document.querySelector('.counter');
const loadingBar = document.querySelector('.loading-bar-front');
const container = document.querySelector('.container');

let idx = 0;
updatenum();

function updatenum() {
    counter.innerHTML = idx + "%";
    loadingBar.style.width = idx + "%";
    idx++;

    if (idx <= 100) {
        setTimeout(updatenum, 30);
    } else {
        console.log("loaded");
        setTimeout(fadeOutContainer, 1000);
    }
}

function fadeOutContainer() {
    container.classList.add('fade-out');
    setTimeout(hideLoading, 1000); 
}

function hideLoading() {
    container.style.display = "none";
    console.log("Container hidden");
}

