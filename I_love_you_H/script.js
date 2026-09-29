const heart = document.querySelector("#heart");
const totalItems = 80;
const titolo = document.querySelector("#titolo");
const messaggio = document.querySelector("#testo");
const scala = 16;

// Messaggio

titolo.textContent = "Buon anniversario, amore mio";
messaggio.textContent = "Tiamo immensamente!";

// HEART 

for (let i = 1; i <= totalItems; i++) {
  const angolo = (i / totalItems) * 2 * Math.PI;
  const x = 16 * Math.pow(Math.sin(angolo), 3) * scala;
  const y =
    -(
      13 * Math.cos(angolo) -
      5 * Math.cos(2 * angolo) -
      2 * Math.cos(3 * angolo) -
      Math.cos(4 * angolo)
    ) * scala;
  let items = document.createElement("div");
  items.style.setProperty("--x", x);
  items.style.setProperty("--y", y);
  items.style.setProperty("--i", i);
  items.classList.add("love");
  let parola = document.createElement("p");
  parola.textContent = "I love U";
  items.appendChild(parola);
  heart.appendChild(items);
}
