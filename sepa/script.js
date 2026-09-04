const urlParams = new URLSearchParams(window.location.search);

const amount = urlParams.get("amount");
const desc = urlParams.get("desc");
const merchant = urlParams.get("merchant");
const iban = urlParams.get("iban");
const bic = urlParams.get("bic");

// Affichage
document.getElementById("amount").innerText = amount;
document.getElementById("desc").innerText = desc;
document.getElementById("merchant").innerText = merchant;

// Intent SEPA (GitHub Pages)
const sepaIntent =
  `https://feretyoann-art.github.io/zapay-web/sepa/?amount=${amount}&desc=${desc}&iban=${iban}&bic=${bic}`;

document.getElementById("payBtn").onclick = () => {
  window.location.href = sepaIntent;
};

// Fallback SEPA (GitHub Pages)
document.getElementById("fallbackLink").href = sepaIntent;
