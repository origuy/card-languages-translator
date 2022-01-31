# Dogs Breed Card With Translate

landing page of 3 dogs breeds with info and the ability to change the language of the site
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size (desktop and Mobile)
- mobile first approach
- implement different languages for the website
- work with JS classes, navigator, arrow functions and event inside addEventListener
- implement the ability to add languages to the site using JS.

### Screenshot

![screenshot of the website](./images/mobile.gif)

### Links

- Live Site URL: [ Click to See the Site](https://equalizerlandingpageoriguy.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap5
- SCSS custom properties
- Flexbox and Grid
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

the project was very insightful for me i've learned:

- how to adjust to different layout
- how to work with positioning
- how to work with JS classes
- how to work with onload function
- how to work with bootstrap5
- work with switch statment
- impliment the thinking that and code and the site should be adjustable (for example the ability to add languages and edit the translate data with out changing the HTML only with JS)

```JavaScript
document.addEventListener('click', (e) => {
    let lang = e.target.innerHTML;
}
```

```JavaScript
let start = () =>{
    switch (browserLang) {
        case 'he':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = heArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = heArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = heArray[i].info;

            }
	}
```
```JavaScript
class Lang {
    constructor(title,subTitle,info){
        this.title = title;
        this.subTitle = subTitle;
        this.info = info;
    }
}
```

### Continued development

I will continue to focus on:

- more organized code.
- deeper understating of background and positioning
- get use to the approach of mobile first

### Useful resources

- [https://sass-lang.com/](https://sass-lang.com/) - this site help me understand the Scss semantics
- [https://www.w3schools.com/](https://www.w3schools.com/) - this site is my defult site to aquire knowlage about html, css and javascript
- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/) - this site if amazing if i eand to take a deeper dive to understand properties bout html, css and javascript

## Author

- Website - [Ori Guy](https://github.com/origuy)
