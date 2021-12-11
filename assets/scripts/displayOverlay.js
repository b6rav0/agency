overlayContainer = document.querySelector('#overlay');

function displayOverlay() {
    // Gets the Element Clicked
    toggler = event.target

    // Element Container 
    togglerContainer = toggler.parentNode;

    
    content = togglerContainer.cloneNode(true)
    overlayContainer.classList.toggle('active');
    overlayContainer.appendChild(content);
}

window.onclick = function (event) {
    if (event.target == overlayContainer) {
        overlayContainer.removeChild(content);
        overlayContainer.classList.toggle('active');
    }
}