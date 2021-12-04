function readMore() {
    // Gets the Element Clicked
    toggler = event.target
    // console.log(toggler)

    // Changing the Button Text
    if (toggler.textContent == "Read More") {
        toggler.textContent = "Read Less"
    } else {
        toggler.textContent = "Read More"
    }

    // Element Container 
    togglerContainer = toggler.parentNode;
    // console.log(togglerContainer);

    // The Secondary Content inside the Container
    moreContent = togglerContainer.querySelector('.hidden-by-default');
    // console.log(moreContent)

    moreContent.classList.toggle('shown');

}