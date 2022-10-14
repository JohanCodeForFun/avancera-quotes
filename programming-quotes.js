fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  .then((response) => response.json())
  .then((data) => {
    let content = "";

    content += `
      <p class="randomQoute"><em>"${data.en}"</em></p>
      <p class="author"><em>-${data.author}</em></p>
      `;
    document.querySelector("#quotes").innerHTML = content;
  });

// FETCH Programming Qoutes
// How to install:
// 1) Add <div id="qoutes"></div> to your index.html.
// 2) Add <script src="programming-qoutes.js" defer></script> inside head or body tag.
// 3) Add programming-qoutes.js to your main folder.
// 4) Enjoy!
//
// Qoutes from, https://github.com/skolakoda/programming-quotes-api
// Made by Johan Hellberg, JSU22.
