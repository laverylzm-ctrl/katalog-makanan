const catalog = [
  {
    id: 1,
    title: "Classic Wagyu Burger",
    category: "makanan",
    price: "Rp 115.000",
    desc: "Daging wagyu dengan keju cheddar dan roti brioche.",
    img: "images/ClassicWagyuBurger.png",
  },
  {
    id: 2,
    title: "Cold Brew Tonic",
    category: "minuman",
    price: "Rp 42.000",
    desc: "Kopi ekstraksi dingin dengan campuran air tonik segar.",
    img: "images/ColdBrewTonic.png",
  },
  {
    id: 3,
    title: "Salmon Mentai Rice",
    category: "makanan",
    price: "Rp 95.000",
    desc: "Nasi panggang dengan topping salmon segar dan saus mentai.",
    img: "images/SalmonMentaiRice.png",
  },
  {
    id: 4,
    title: "Midnight Berry Smoothies",
    category: "minuman",
    price: "Rp 48.000",
    desc: "Campuran blueberry, blackberry, dan yoghurt Yunani.",
    img: "images/MidnightBerrySmoothies.png",
  },
  {
    id: 5,
    title: "Truffle Fries",
    category: "makanan",
    price: "Rp 55.000",
    desc: "Kentang goreng renyah dengan minyak truffle dan parmesan.",
    img: "images/TruffleFries.png",
  },
];

const menuContainer = document.getElementById("menu-container");
const filterBtns = document.querySelectorAll(".btn-filter");

function displayMenu(items) {
  let htmlContent = items
    .map((item) => {
      return `
            <article class="menu-item">
                <img src="${item.img}" class="menu-img" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x250?text=Gambar+Tidak+Ada'">
                <div class="menu-info">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span class="price">${item.price}</span>
                </div>
            </article>
        `;
    })
    .join("");

  menuContainer.innerHTML = htmlContent;
}

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(catalog);
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const category = e.currentTarget.dataset.id;

    if (category === "all") {
      displayMenu(catalog);
    } else {
      const filteredMenu = catalog.filter((item) => item.category === category);
      displayMenu(filteredMenu);
    }
  });
});
