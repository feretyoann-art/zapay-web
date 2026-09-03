const urlParams = new URLSearchParams(window.location.search);

const amount = urlParams.get("amount");
const desc = urlParams.get("desc");
const merchant = urlParams.get("merchant");
const iban = urlParams.get("iban");
const bic = urlParams.get("bic");

document.getElementById("amount").innerText = amount;
document.getElementById("desc").innerText = desc;
document.getElementById("merchant").innerText = merchant;

// Intent SEPA
const sepaIntent = `bank://sepa?iban=${iban}&bic=${bic}&amount=${amount}&desc=${desc}`;

document.getElementById("payBtn").onclick = () => {
  window.location.href = sepaIntent;
};

// Fallback
document.getElementById("fallbackLink").href =
  `https://zapay-backend-1.onrender.com/sepa?amount=${amount}&desc=${desc}&iban=${iban}&bic=${bic}`;
