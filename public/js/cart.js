const cartContainer = document.querySelector(".cart");
const ul = document.querySelector(".list-group");
var items = ul.getElementsByTagName("li");
var total = ul.lastElementChild;
const checkout = document.querySelector(".checkout-badge");

cartContainer.addEventListener("click", async (e) => {
  const tar = e.target;
  // console.log(checkout);
  const id = e.target.getAttribute("product-id");
  const name = e.target.getAttribute("product-name");
  const price = e.target.getAttribute("product-price");

  if (tar.classList.contains("fa-minus")) {
    if (Number(tar.parentElement.nextElementSibling.innerText) === 1) {
      tar.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";

      var count = checkout.children[1].innerText;
      checkout.children[1].innerHTML = `<span class="badge bg-danger">${count - 1}</span>`;

      for (var i = 0; i < items.length - 1; i++) {
        if (items[i].children[0].outerText.includes(name)) {
          items[i].style.display = "none";

          total.children[0].innerText = Number(total.children[0].innerText) - Number(price);
        }
      }

      if (Number(total.children[0].innerText) === 0) {
        total.style.display = "none";
        total.parentElement.nextElementSibling.style.display = "none";
        const section = document.createElement("section");
        var x = document.createElement("img");
        x.setAttribute("src", "https://shop.millenniumbooksource.com/static/images/cart1.png");
        x.setAttribute("alt", "Empty Cart");
        x.style.width = "max-content";
        x.style.height = "max-content";
        section.append(x);
        section.style.justifyContent = "center";
        section.style.display = "flex";
        document.body.append(section);
      }

      const res = await axios.delete(`/user/${id}/cart`);
    } else {
      tar.parentElement.nextElementSibling.innerText = Number(tar.parentElement.nextElementSibling.innerText) - 1;

      if (tar.parentElement.nextElementSibling.innerText === "1") {
        tar.classList.add("fa-trash");
      }

      for (var i = 0; i < items.length - 1; i++) {
        if (items[i].children[0].outerText.includes(name)) {
          let quan = Number(items[i].children[1].innerText);

          quan -= 1;

          items[i].children[1].innerText = quan;

          total.children[0].innerText = Number(total.children[0].innerText) - Number(price);
        }
      }

      const res = await axios.post(`/user/${id}/dec/cart`);
    }
  } else if (tar.classList.contains("fa-plus")) {
    //For changing the input of inc and dec span
    tar.parentElement.previousElementSibling.innerText = Number(tar.parentElement.previousElementSibling.innerText) + 1;

    if (Number(tar.parentElement.previousElementSibling.innerText) >= 2) {
      tar.parentElement.previousElementSibling.previousElementSibling.children[0].classList.remove("fa-trash");
    }
    //For total amount change and quantity change
    for (var i = 0; i < items.length - 1; i++) {
      if (items[i].children[0].outerText.includes(name)) {
        let quan = Number(items[i].children[1].innerText);

        quan += 1;

        items[i].children[1].innerText = quan;

        total.children[0].innerText = Number(total.children[0].innerText) + Number(price);
      }
    }

    const res = await axios.post(`/user/${id}/inc/cart`);
  }
});
