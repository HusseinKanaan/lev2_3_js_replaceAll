
function searching() {
    let searchInput = document.getElementById("search-input").value;
    let artikelText = document.getElementById("artikelText1");

    searchInput = searchInput.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(`${searchInput}`, "gi");

    artikelText.innerHTML = artikelText.textContent.replace(pattern, match => `<mark>${match}</mark>`);


}