# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). 

## Table of contents

- [Table of contents](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Gli utenti dovrebbero essere in grado di:

- Visualizza il layout ottimale per l'interfaccia in base alle dimensioni dello schermo del dispositivo:
  - Mobile: 375px
  - Desktop: 1440px
- Visualizza gli stati al passaggio del mouse e di messa a fuoco per tutti gli elementi interattivi sulla pagina

### Screenshot

![Desktop 1440px](screenshot/Screenshot_Desktop%201440px.png)
![Mobile 375px](screenshot/Screenshot_Mobile%20375px.png)
![Mobile 375px open menu](screenshot/Screenshot_Mobile%20375px%20openMenu.png)

### Links

- Solution URL: [Add solution URL here](https://my-solution-url.com)
- Live Site URL: [https://gialloblink.github.io/News-homepage](https://gialloblink.github.io/News-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

Per questo progetto ho utilizzato le CSS Custom Properties, chiamate anche CSS Variables, così da rendere il codice più leggibile e individuare gli errori più velocemente.

```css
:root {
    /*  Primary */
    --orange: hsl(35, 77%, 62%);
    --red: hsl(5, 85%, 63%);

    /* Neutral */
    --white: hsl(36, 100%, 99%);
    --Grayish: hsl(233, 8%, 79%);
    --DarkGrayish: hsl(236, 13%, 42%);
    --black: hsl(240, 100%, 5%);
}
```
Nella parte mobile, per far apparire il menu, ho utilizzato JavaScript, nello specifico il metodo addEventListener in ascolto del click sul button "burger", in modo da richiamare una funzione che esegue il toggle della classe "show" precedentemente scritta nel file CSS.

```js
openButton.addEventListener('click',toggleMenu);
function toggleMenu () {
    sfondo.classList.toggle("show");
    closeButton.classList.toggle("show");
    menu.classList.toggle("show");
}
```

## Author

- Website - [Giovanni Polidoro](https://www.giovannipolidoro.eu)
- Frontend Mentor - [@gialloblink](https://www.frontendmentor.io/profile/gialloblink)
- GitHub - [@gialloblink](https://github.com/gialloblink)