imageContainer = document.querySelector('#image-container');

function readMore() {
    // Gets the Element Clicked
    toggler = event.target
    // console.log(toggler)

    // Element Container 
    togglerContainer = toggler.parentNode;
    // console.log(togglerContainer);

    // The Secondary Content inside the Container
    moreContent = togglerContainer.querySelector('.hidden-by-default');
    // console.log(moreContent)
    imageContainer.classList.toggle('expand')
    moreContent.classList.toggle('shown');

    // Changing the Button Text
    if (toggler.textContent.includes("More")) {
        toggler.textContent = "Read Less"
    } else {
        toggler.textContent = "Read More"
    }

}