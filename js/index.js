const siteContent = {
  "nav": {
    "nav-item-1": "Home",
    "nav-item-2": "Services",
    "nav-item-3": "Product",
    "nav-item-4": "Vision",
    "nav-item-5": "Features",
    "nav-item-6": "About",
    "nav-item-7": "Contact",
    "nav-item-8": "Blog",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// NAV

// nav bar
let navBar = document.querySelector('nav');

let a1 = document.createElement('a');
a1.setAttribute('href', '#')
navBar.appendChild(a1);

let a2 = document.createElement('a');
a2.setAttribute('href', '#');
navBar.prepend(a2);

// add nav item content
let navItems = document.querySelectorAll('a');
// brute force
// navItems[0].textContent = "Services";
// navItems[1].textContent = "Product";
// navItems[2].textContent = "Vision";


// a better way to add all nav items from JSON object
for (let i = 0; i < navItems.length; i++) {
  navItems[i].classList.add(`nav-item-${i+1}`);
  navItems[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  navItems[i].classList.add('nav-item'); // task 3, add specific class to each nav-item to allow for easier styling
}



let navItem = document.querySelectorAll('.nav-item');
navItem.forEach(item => {
  item.style.color = 'green';
})



// CTA section

// add main heading 'DOM is awesome'
let mainHeading = document.querySelector('h1');
mainHeading.textContent = siteContent.cta['h1'];


// add header image
let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent.cta['img-src']);


// add main cta button text
let ctaBtn = document.querySelector('.cta .cta-text button');
ctaBtn.textContent = siteContent.cta['button'];


// Main Content Section

// top content
let mainContent = document.querySelectorAll('.main-content');
let topContent = mainContent[0].querySelectorAll('.top-content');

topContent[0].querySelectorAll('.text-content')[0].querySelectorAll('h4')[0].textContent = siteContent['main-content']['features-h4']; // add features heading
topContent[0].querySelectorAll('.text-content')[0].querySelectorAll('p')[0].textContent = siteContent['main-content']['features-content']; // add features paragraph

topContent[0].querySelectorAll('.text-content')[1].querySelectorAll('h4')[0].textContent = siteContent['main-content']['about-h4']; // add about heading
topContent[0].querySelectorAll('.text-content')[1].querySelectorAll('p')[0].textContent = siteContent['main-content']['about-content']; // add about paragraph


// set middle image
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


// set bottom content
let bottomContent = mainContent[0].querySelectorAll('.bottom-content');

// add services block
bottomContent[0].querySelectorAll('.text-content')[0].querySelectorAll('h4')[0].textContent = siteContent['main-content']['services-h4'];
bottomContent[0].querySelectorAll('.text-content')[0].querySelectorAll('p')[0].textContent = siteContent['main-content']['services-content'];

// add product block
bottomContent[0].querySelectorAll('.text-content')[1].querySelectorAll('h4')[0].textContent = siteContent['main-content']['product-h4'];
bottomContent[0].querySelectorAll('.text-content')[1].querySelectorAll('p')[0].textContent = siteContent['main-content']['product-content'];

// add vision block
bottomContent[0].querySelectorAll('.text-content')[2].querySelectorAll('h4')[0].textContent = siteContent['main-content']['vision-h4'];
bottomContent[0].querySelectorAll('.text-content')[2].querySelectorAll('p')[0].textContent = siteContent['main-content']['vision-content'];


// CONTACT section
let contact = document.querySelector('.contact');

contact.querySelectorAll('h4')[0].textContent = siteContent['contact']['contact-h4']; // contact header
contact.querySelectorAll('p')[0].textContent = siteContent['contact']['address']; // contact address
contact.querySelectorAll('p')[1].textContent = siteContent['contact']['phone']; // contact phone
contact.querySelectorAll('p')[2].textContent = siteContent['contact']['email']; // contact email


// FOOTER
let footer = document.querySelector('footer');

footer.querySelector('p').textContent = siteContent['footer']['copyright'];

// mvp complete 2/12/20 9:16pm 