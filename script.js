document.addEventListener('DOMContentLoaded', function () {
    const nav_headers = document.querySelectorAll(".nav_header");
    const nav_logo = document.querySelector(".logo_container");
    nav_logo.classList.add("nav_appear");

    let delay = 0;

    nav_headers.forEach(element => {
        element.style.transitionDelay = `${delay}ms`;
        element.classList.add("nav_appear");
        delay += 100;
    })
});

// Navbar & Theme Button Animation

const navbar = document.querySelector('.navbar_wrapper');
const theme_button = document.querySelector('.theme_button');
const theme_texts = document.querySelectorAll('.theme_text');
let lastScrollPos = 0;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        navbar.classList.remove('hidden');
        theme_button.classList.remove('hidden');
        theme_texts.forEach(text => {
            text.classList.remove('hidden');
        })
    }
    else if (currentScrollPos > lastScrollPos) {
        navbar.classList.add('hidden');
        theme_button.classList.add('hidden');
        theme_texts.forEach(text => {
            text.classList.add('hidden');
        })
    }
    else {
        navbar.classList.remove('hidden');
        theme_button.classList.remove('hidden');
        theme_texts.forEach(text => {
            text.classList.remove('hidden');
        })
    }

    lastScrollPos = currentScrollPos;
});

// Theme Button

elements_gold = ['logo_grey', 'logo_blue', 'navbar_wrapper', 'cover_title', 'outline', 'cover_video_wrapper', 'diff_wrapper', 'location_content', 'location_title', 'location_para', 'block1_title', 'block1_info', 'block1_image_wrapper', 'block2_backgroundoverlay', 'block2_title', 'block2_content', 'block3_title', 'block3_para', 'about_title', 'about_vid_wrapper', 'about_text', 'about_info_section', 'about_text_section', 'about_info_content', 'jobs_text_wrapper', 'blog_container', 'blog_text', 'contact_image_wrapper', 'contact_title', 'contact_info', 'x', 'theme_button'];

multiple_elements_gold = ['line1', 'button', 'arrow', 'sliderblock', 'jobs_card_container', 'blog_carousel_card', 'blog_carousel_button', 'dot', 'crosslink_card_wrapper', 'block1_image img'];

const light_elements = document.querySelectorAll('.light_mode');
const dark_elements = document.querySelectorAll('.dark_mode');

const block1_image = document.querySelector('.block1_image_container');
const block2_image = document.querySelector('.block2_img_wrapper');
const block3_image = document.querySelector('.block3_img_container');

theme_button.addEventListener('click', () => {
    document.body.classList.toggle('gold');

    light_elements.forEach(ele => {
        ele.classList.toggle('light_change_opacity');
    })

    dark_elements.forEach(ele => {
        ele.classList.toggle('dark_change_opacity');
    })

    for (let i = 0; i < elements_gold.length; i++) {
        const elementclass = elements_gold[i];
        const element = document.querySelector(`.${elementclass}`);
        element.classList.toggle('gold');
    }

    for (let i = 0; i < multiple_elements_gold.length; i++) {
        const multiple_elementsclass = multiple_elements_gold[i];
        console.log(multiple_elementsclass)
        const multiple_elements = document.querySelectorAll(`.${multiple_elementsclass}`);
        multiple_elements.forEach(elements => {
            elements.classList.toggle('gold');
        })
    }

    if (theme_button.classList.contains("gold")) {

        block1_image.innerHTML = `<div class="block1_image gold">
        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Barging-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Rail-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Truck-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Plane-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Ship-Gold.png&w=1720&q=75" alt="">
    </div>`;

        block2_image.innerHTML = `<div class="block2_img_container gold">
        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FSteel-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FConsumer-Goods-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FMinerals-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FProjectCargo-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FBuilding-Materials-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FWindmill-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FSugar-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FRenewables-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FGlass-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FWood-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FChemical-Gold.png&w=1720&q=75" alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FFlooring-Gold.png&w=1720&q=75" alt="">
    </div>`

        block3_image.innerHTML = `<img alt="Manuport logistics" loading="lazy" width="536" height="624" decoding="async" data-nimg="1" class="CtaBlock_image__ZWyx1 Image_storyblok-image__oDocz Image_is-loaded__RCqPL" style="color: transparent;" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcset="https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/96x112/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/128x149/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/256x298/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/320x373/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/384x447/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/450x524/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/600x699/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/768x894/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/1024x1192/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/1360x1583/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/1720x2002/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1080x622/f641113c23/screen_gold.png/m/1720x2002/filters:quality(95):focal()">`

        const block1images = document.querySelectorAll(".block1_image img");
        var currentImageIndex = 0;

        function showImage1(index) {
            block1images.forEach(img => img.classList.remove('active'));
            block1images[index].classList.add('active');
        }

        function changeImage1() {
            currentImageIndex = (currentImageIndex + 1) % block1images.length;
            showImage1(currentImageIndex);
        }

        showImage1(currentImageIndex);

        setInterval(changeImage1, 2000);

        const block2images = document.querySelectorAll('.block2_img_container img');
        var currentIndex = 0;

        function showImage2(index) {
            block2images.forEach(img => img.classList.remove('active'));
            block2images[index].classList.add('active');
        }

        function changeImage2() {
            currentIndex = (currentIndex + 1) % block2images.length;
            showImage2(currentIndex);
        }

        showImage2(currentIndex);

        setInterval(changeImage2, 2000);

    } else {
        block1_image.innerHTML = `<div class="block1_image">
        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Plane-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Truck-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Barging-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Ship-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Rail-Business.png&w=1720&q=75"
            alt="">
    </div>`;

        block2_image.innerHTML = `<div class="block2_img_container">
        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FProjectCargo-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FWood-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FWindmill-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FSteel-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FRenewables-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FMinerals-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FConsumer-Goods-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FChemical-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FBuilding-Materials-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FGlass-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FSugar-Business.png&w=1720&q=75"
            alt="">

        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FFlooring-Business.png&w=1720&q=75"
            alt="">
    </div>`

        block3_image.innerHTML = `<img alt="Manuport logistics" loading="eager" width="536" height="624" decoding="async"
        data-nimg="1" style="color: transparent;"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
        srcset="https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/96x112/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/128x149/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/256x298/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/320x373/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/384x447/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/450x524/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/600x699/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/768x894/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1024x1192/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1360x1583/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1720x2002/filters:quality(95):focal() 1720w"
        src="https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1720x2002/filters:quality(95):focal()">`

        const block1images = document.querySelectorAll(".block1_image img");
        var currentImageIndex = 0;

        function showImage1(index) {
            block1images.forEach(img => img.classList.remove('active'));
            block1images[index].classList.add('active');
        }

        function changeImage1() {
            currentImageIndex = (currentImageIndex + 1) % block1images.length;
            showImage1(currentImageIndex);
        }

        showImage1(currentImageIndex);

        setInterval(changeImage1, 2000);

        const block2images = document.querySelectorAll('.block2_img_container img');
        var currentIndex = 0;

        function showImage2(index) {
            block2images.forEach(img => img.classList.remove('active'));
            block2images[index].classList.add('active');
        }

        function changeImage2() {
            currentIndex = (currentIndex + 1) % block2images.length;
            showImage2(currentIndex);
        }

        showImage2(currentIndex);

        setInterval(changeImage2, 2000);
    }

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
        if (initial_block1 === 0) {
            initial_block1 = window.pageYOffset;
        }

        block1_img.style.transform = `translateY(-${(window.pageYOffset - initial_block1) * 0.1}px)`
    }

    if (isInViewport(block2_img)) {
        if (initial_block2 === 0) {
            initial_block2 = window.pageYOffset;
        }

        block2_img.style.transform = `translateY(-${(window.pageYOffset - initial_block2) * 0.1}px)`
    }

    if (isInViewport(block3_img)) {
        if (initial_block3 === 0) {
            initial_block3 = window.pageYOffset;
        }

        block3_img.style.transform = `translateY(-${(window.pageYOffset - initial_block3) * 0.1}px)`
    }

    if (isInViewport(contact_img)) {
        if (initial_contact === 0) {
            initial_contact = window.pageYOffset;
        }

        contact_img.style.transform = `translateY(${((window.pageYOffset - initial_contact) * 0.15) - 100}px)`
    }
})

// Image Infinite Loops

document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll(".block1_image img");
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
