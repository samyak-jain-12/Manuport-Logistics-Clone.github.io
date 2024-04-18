document.addEventListener('DOMContentLoaded', function () {
    const nav_headers = document.querySelectorAll(".nav_header");
    const nav_logo = document.querySelector(".logo_container");
    nav_logo.classList.add("nav_appear");

    let delay = 0;

    nav_headers.forEach(element => {
        element.style.transitionDelay = `${delay}ms`;
        element.classList.add("nav_appear");
        delay+=100;
    })
});

// Navbar Animation

const navbar = document.querySelector('.navbar_wrapper');
let lastScrollPos = 0;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        navbar.classList.remove('hidden');
    }
    else if (currentScrollPos > lastScrollPos) {
        navbar.classList.add('hidden');
    }
    else {
        navbar.classList.remove('hidden');
    }

    lastScrollPos = currentScrollPos;
});

// Hamburger
const hamburger_button = document.querySelector(".hamburger")
const hamburger_close_button = document.querySelector(".hamburger_close");
const hamburger_open_button = document.querySelector(".hamburger_open");
const menu = document.querySelector(".mobile_menu");

let isMenuOpen = false;

hamburger_button.addEventListener('click', function () {
    hamburger_close_button.classList.toggle('hamburger_toggle');
    hamburger_open_button.classList.toggle('hamburger_toggle');
    menu.classList.toggle('open');

    isMenuOpen = !isMenuOpen;
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
})


// Different Section

let allContentContainers = document.querySelectorAll(".diff_content_title");
let allImageContainers = document.querySelectorAll(".diff_img_container");

function toggleClass(index) {
    allContentContainers.forEach((card, i) => {
        if (i === index) {
            card.classList.add("expanded");
            card.nextElementSibling.classList.add("expanded");
            allImageContainers[i].classList.add("expanded");
        } else {
            card.classList.remove("expanded");
            card.nextElementSibling.classList.remove("expanded");
            allImageContainers[i].classList.remove("expanded");
        }
    });
}

let currentIndex = 0;

function autoToggle() {
    toggleClass((currentIndex + 1) % allContentContainers.length);
    currentIndex = (currentIndex + 1) % allContentContainers.length;
}

toggleClass(0);


let autoToggleInterval = setInterval(autoToggle, 7000);

allContentContainers.forEach((card, index) => {
    card.addEventListener("click", function () {
        clearInterval(autoToggleInterval);
        toggleClass(index);
        currentIndex = index;
        autoToggleInterval = setInterval(autoToggle, 7000);
    });
});


// Location Slider

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top >= 0 &&
            rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.bottom >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
    );
}

let forwardsliders = document.querySelectorAll(".forwardslider");
let backwardsliders = document.querySelectorAll(".backwardslider");

let transitionmax = 20;

let m = transitionmax / (window.innerHeight + 70);

let forwardtopvalues = {};
let backwardtopvalues = {};

document.addEventListener("scroll", function () {
    forwardsliders.forEach(function (forwardslider) {
        if (isInViewport(forwardslider)) {
            if (!forwardtopvalues[forwardslider]) {
                forwardtopvalues[forwardslider] = window.pageYOffset;
            }

            forwardslider.style.transform = `translateX(-${(window.pageYOffset - forwardtopvalues[forwardslider]) * m
                }%)`;
        }
    });

    backwardsliders.forEach(function (backwardslider) {
        if (isInViewport(backwardslider)) {
            if (!backwardtopvalues[backwardslider]) {
                backwardtopvalues[backwardslider] = window.pageYOffset;
            }

            backwardslider.style.transform = `translateX(${(window.pageYOffset - backwardtopvalues[backwardslider]) * m
                }%)`;
        }
    });
});

// Parallax Image Effect

const block1_img = document.querySelector(".block1_image_wrapper");
const block2_img = document.querySelector(".block2_img_wrapper");
const block3_img = document.querySelector(".block3_img_wrapper");
const contact_img = document.querySelector(".contact_image_container");
let initial_block1 = 0;
let initial_block2 = 0;
let initial_block3 = 0;
let initial_contact = 0;

document.addEventListener("scroll", function () {
    if (isInViewport(block1_img)) {
        if( initial_block1 === 0) {
            initial_block1 = window.pageYOffset;
        }

        block1_img.style.transform = `translateY(-${(window.pageYOffset - initial_block1) * 0.1}px)`
    }

    if (isInViewport(block2_img)) {
        if( initial_block2 === 0) {
            initial_block2 = window.pageYOffset;
        }

        block2_img.style.transform = `translateY(-${(window.pageYOffset - initial_block2) * 0.1}px)`
    }

    if (isInViewport(block3_img)) {
        if( initial_block3 === 0) {
            initial_block3 = window.pageYOffset;
        }

        block3_img.style.transform = `translateY(-${(window.pageYOffset - initial_block3) * 0.1}px)`
    }

    if (isInViewport(contact_img)) {
        if( initial_contact === 0) {
            initial_contact = window.pageYOffset;
        }

        contact_img.style.transform = `translateY(${((window.pageYOffset - initial_contact) * 0.15)-100}px)`
    }
})

// Image Infinite Loops

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.block1_image img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex);

    setInterval(changeImage, 2000);
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.block2_img_container img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex);

    setInterval(changeImage, 2000);
});


// Jobs Section Tilting Card Effect

const jobcards = document.querySelectorAll('.jobs_card_container');

function tiltCard(event, element, sheet) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (event.clientX - centerX) / (rect.width / 2);
    const offsetY = (event.clientY - centerY) / (rect.height / 2);

    element.style.setProperty("--rotateX", -offsetY * 11 + "deg");
    element.style.setProperty("--rotateY", offsetX * 11 + "deg");
    element.style.setProperty("--translateX", -offsetY * 11 + "px");
    element.style.setProperty("--translateY", offsetX * 11 + "px");

    sheet.style.setProperty("--alpha", (Math.abs(offsetX) + Math.abs(offsetY)) * 0.1);
    sheet.style.setProperty("--percent", (Math.abs(offsetX) + Math.abs(offsetY)) * 60 + "%");
}

jobcards.forEach(card => {
    const jobsinnerWrapper = card.querySelector('.jobs_card_innerwrapper');
    card.addEventListener("mousemove", (e) => {
        tiltCard(e, card, jobsinnerWrapper);
    });

    card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rotateX", "0deg");
        card.style.setProperty("--rotateY", "0deg");
        card.style.setProperty("--translateX", "0px");
        card.style.setProperty("--translateY", "0px");
        jobsinnerWrapper.style.setProperty("--alpha", "0");
        jobsinnerWrapper.style.setProperty("--percent", "0%");
    });
});

// Crosslink Section Tilting Card Effect

const crosscards = document.querySelectorAll('.crosslink_card_wrapper');

crosscards.forEach(card => {
    const crosssheet = card.querySelector('.crosslink_card_sheet');
    card.addEventListener("mousemove", (e) => {
        tiltCard(e, card, crosssheet);
    });

    card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rotateX", "0deg");
        card.style.setProperty("--rotateY", "0deg");
        card.style.setProperty("--translateX", "0px");
        card.style.setProperty("--translateY", "0px");
        crosssheet.style.setProperty("--alpha", "0");
        crosssheet.style.setProperty("--percent", "0%");
    });
});

// Carousel

const imageStack = document.querySelector('.blog_imagestack_container');
const dots = document.querySelectorAll('.blog_dots_wrapper .dot');
const leftButton = document.getElementById('left_button');
const rightButton = document.getElementById('right_button');

let currentPosition = 0;
let currentDot = 0;

rightButton.addEventListener("click", () => {
    leftButton.disabled = false;
    currentPosition -= 100;
    imageStack.style.transform = `translateX(${currentPosition}%)`;

    if (currentPosition === -200) {
        rightButton.disabled = true;
    }

    currentDot++;
    updateActiveDot(currentDot);
});

leftButton.addEventListener("click", () => {
    rightButton.disabled = false;
    currentPosition += 100;
    imageStack.style.transform = `translateX(${currentPosition}%)`;
    if (currentPosition === 0) {
        leftButton.disabled = true;
    }

    currentDot--;
    updateActiveDot(currentDot);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const pos = currentDot - index;
        currentPosition += pos * 100;
        currentDot = index;
        imageStack.style.transform = `translateX(${currentPosition}%)`;
        if (currentDot === 2) {
            rightButton.disabled = true;
            leftButton.disabled = false;
        }
        else if (currentDot === 0) {
            leftButton.disabled = true;
            rightButton.disabled = false;
        }
        else if (currentDot === 1) {
            leftButton.disabled = false;
            rightButton.disabled = false;
        }
        updateActiveDot(index);
    });
});

function updateActiveDot(activeIndex) {
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('selected');
        } else {
            dot.classList.remove('selected');
        }
    });
}


// Masking Contact

const contactContainer = document.querySelector(".contact_text_container");
const contactTitle = document.querySelector(".contact_title");

// Function to calculate and update the value of --whitePercent
function updateWhitePercentContact() {
    const viewportWidth = window.innerWidth;
    // console.log(viewportWidth);

    if (viewportWidth >= 900) {
        let contactStyles = window.getComputedStyle(contactContainer);
        let fraction = (parseFloat(contactStyles.width) - 2 * parseFloat(contactStyles.paddingLeft)) / 12;

        let whitePercentContact = (2 * fraction / parseFloat(contactTitle.offsetWidth)) * 100;
        contactTitle.style.setProperty('--whitePercentContact', whitePercentContact + '%');
    }

    else {
        contactTitle.style.setProperty('--whitePercentContact', 0 + '%');
    }
}

// Initial calculation
updateWhitePercentContact();

// Listen for window resize events and recalculate --whitePercent
window.addEventListener('resize', updateWhitePercentContact);


