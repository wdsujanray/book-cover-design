# 📚 Back to School Book Cover Generator

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A dynamic, interactive web application that generates a personalized "Back to School" book cover pop-up based on user input. 

Inspired by vibrant school supplies and classic 3D typography, this project demonstrates how to combine HTML forms, CSS modal animations, and JavaScript DOM manipulation to create a fun, visual output.

<!-- Replace the link below with a screenshot of your actual project! -->
<!-- ![Project Screenshot](screenshot.png) -->

## ✨ Features

*   **Personalized Input:** Users enter their first and last name via a clean, accessible form.
*   **Pop-Up Modal:** The book cover appears as a smooth, animated pop-up (modal) overlay rather than cluttering the main page.
*   **Dynamic Typography:** The user's name is instantly injected into the design using JavaScript.
*   **3D "Sticker" Text Effect:** The "Back to School" title uses layered CSS `text-shadow` properties to mimic the thick, 3D cutout effect seen in classic school posters.
*   **Interactive Dismissal:** The pop-up can be closed via a close button (`X`), clicking the dark backdrop, or pressing the `Escape` key.
*   **Responsive Design:** The book cover scales elegantly to fit mobile and desktop screens.

## 🛠️ Technologies Used

*   **HTML5:** Semantic structure for the input form and the book cover modal.
*   **CSS3:** 
    *   Flexbox for centering the modal and layout.
    *   `text-shadow` layering for the 3D sticker typography.
    *   `clip-path` to create the jagged "to" ribbon.
    *   CSS `@keyframes` for smooth fade-in and zoom-in animations.
    *   Linear gradients to simulate the pencil border and book spine.
*   **JavaScript (Vanilla):** 
    *   DOM manipulation to read form inputs.
    *   Event listeners for click and keyboard interactions.
    *   Dynamic CSS style toggling to show/hide the modal.

## 📂 File Structure

This project is intentionally kept simple as a single-file application for easy deployment.

```text
├── index.html       # Contains HTML structure, CSS styles, and JavaScript logic
└── README.md        # Project documentation
