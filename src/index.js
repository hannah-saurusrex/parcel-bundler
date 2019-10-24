import { bro } from './bro'
import './styles/main.scss'
import ScrollMagic from 'scrollmagic';

var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene ({
    duration: 500, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px

})

document.querySelector('h1').textContent = bro(`how's it going?`);