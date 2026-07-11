# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [GitHub Repository](https://github.com/gsnezana7/advice-generator-vue)
- Live Site URL: [GitHub Pages Demo](https://gsnezana7.github.io/advice-generator-vue/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties & variables
- Flexbox
- Mobile-first workflow
- Modern CSS Nesting
- [Vue 3](https://vuejs.org) - JS Framework (Composition API via CDN)
- Fetch API & Async/Await

### What I learned

During this challenge, I learned how to integrate Vue 3 into a project using a CDN link and manage the application state effectively without complex build tools. I also practiced working with asynchronous requests and handling API caching.

I am proud of this approach to dynamic image swapping directly in modern CSS based on screen resolution:

```css
@media (min-width: 576px) {
  .advice-card__divider img {
    content: url("./images/pattern-divider-desktop.svg");
  }
}
```

And this clean implementation of an async data fetch in Vue 3 that handles the loading animation trigger:

```js
const fetchAdvice = async () => {
  isLoading.value = true;
  try {
    const response = await fetch("https://adviceslip.com" + Date.now());
    const data = await response.json();
    adviceId.value = data.slip.id;
    adviceText.value = data.slip.advice;
  } catch (error) {
    adviceText.value = "Oops! Something went wrong...";
  } finally {
    isLoading.value = false;
  }
};
```

### Continued development

In future projects, I want to focus more on advanced Vue 3 concepts, state management, and transitioning from CDN implementation to professional project bundling using Vite.

### AI Collaboration

I used an AI assistant as a collaborative peer and technical mentor during this project.

- **Tools used:** AI Assistant.
- **How it was used:** For code reviews, troubleshooting network request syntax bugs, and structuring the Vue 3 Composition API architecture.
- **What worked well:** The AI was excellent at explaining complex concepts like `async/await` and reactive states using simple terms and practical metaphors.

## Author

- GitHub - [Snezana](https://github.com/gsnezana7/)
- Frontend Mentor - [@gsnezana7](https://www.frontendmentor.io/solutions/advice-generator-app-using-vue-3-and-fetch-R8uQoeg_Tf)
