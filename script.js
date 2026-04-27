// --- DATABASE MENU (50 ITEMS: 30 UNIQUE FOODS, 20 UNIQUE DRINKS) ---

const foodMenu = [
    { id: "f0", name: "Wagyu A5 Ribeye", price: 750, img: "images/Wagyu A5 Ribeye.jpg", desc: "Sapi Kagoshima A5, bawang putih hitam, mentega truffle." },
    { id: "f1", name: "Truffle Linguine", price: 320, img: "images/Truffle Linguine.jpg", desc: "Pasta artisan, krim truffle hitam, porcini, Parmigiano." },
    { id: "f2", name: "Beluga Caviar", price: 890, img: "images/Beluga Caviar.jpg", desc: "Telur sturgeon premium, blinis hangat, crème fraîche." },
    { id: "f3", name: "Roasted Peking Duck", price: 450, img: "images/Roasted Peking Duck.jpg", desc: "Bebek panggang madu, bumbu lima rempah, saus hoisin." },
    { id: "f4", name: "Lobster Thermidor", price: 680, img: "images/Lobster Thermidor.jpg", desc: "Lobster segar, saus mustard kognak, keju Gruyère." },
    { id: "f5", name: "Pan Seared Foie Gras", price: 550, img: "images/Pan Seared Foie Gras.jpg", desc: "Hati angsa bakar, selai buah ara, roti brioche." },
    { id: "f6", name: "Salmon Soufflé", price: 290, img: "images/Salmon Soufflé.jpg", desc: "Salmon liar, dill segar, saus mentega lemon putih." },
    { id: "f7", name: "Beef Wellington", price: 720, img: "images/Beef Wellington.jpg", desc: "Tenderloin sapi, puff pastry, duxelles jamur, ham parma." },
    { id: "f8", name: "Osso Buco", price: 380, img: "images/Osso Buco.jpg", desc: "Betis sapi muda masak lambat, gremolata jeruk." },
    { id: "f9", name: "Scallop Carpaccio", price: 310, img: "images/Scallop Carpaccio.jpg", desc: "Kerang Hokkaido iris, lime, bunga edibel." },
    { id: "f10", name: "Mushroom Risotto", price: 240, img: "images/Mushroom Risotto.jpg", desc: "Nasi Carnaroli, jamur liar campuran, minyak truffle." },
    { id: "f11", name: "Quail Supreme", price: 420, img: "images/Quail Supreme.jpg", desc: "Suprema puyuh isian, saus pengurangan jus anggur." },
    { id: "f12", name: "Seabass Carpaccio", price: 330, img: "images/Seabass Carpaccio.jpg", desc: "Ikan Seabass iris tipis, lime, minyak zaitun." },
    { id: "f13", name: "Duck Confit", price: 390, img: "images/Duck Confit.jpg", desc: "Paha bebek masak lambat, kentang tumis, jus thyme." },
    { id: "f14", name: "Venison Steak", price: 610, img: "images/Venison Steak.jpg", desc: "Steak daging rusa, buah berry, pengurangan wine." },
    { id: "f15", name: "Veal Milanese", price: 360, img: "images/Veal Milanese.jpg", desc: "Betis sapi goreng, salad arugula, tomat ceri." },
    { id: "f16", name: "Tuna Tartare", price: 280, img: "images/Tuna Tartare.jpg", desc: "Tuna Yellowfin, alpukat, jahe marinade." },
    { id: "f17", name: "Black Truffle Tart", price: 220, img: "images/Black Truffle Tart.jpg", desc: "Tart jamur liar, krim truffle hitam, puff pastry." },
    { id: "f18", name: "Rabbit Ballotine", price: 480, img: "images/Rabbit Ballotine.jpg", desc: "Kelinci Ballot isian, saus mentega thyme." },
    { id: "f19", name: "French Escargots", price: 190, img: "images/French Escargots.jpg", desc: "Siput Escargots, mentega bawang putih, peterseli segar." },
    { id: "f20", name: "Squid Ink Pasta", price: 270, img: "images/Squid Ink Pasta.jpg", desc: "Pasta tinta cumi, seafood campur, cabai segar." },
    { id: "f21", name: "Pigeon Pithivier", price: 530, img: "images/Pigeon Pithivier.jpg", desc: "Pithivier puyuh dalam puff pastry, jus thyme." },
    { id: "f22", name: "Cod Supreme", price: 340, img: "images/Cod Supreme.jpg", desc: "Suprema ikan Cod panggang, puree kembang kol." },
    { id: "f23", name: "Sautéed Scallops", price: 390, img: "images/Sautéed Scallops.jpg", desc: "Kerang Hokkaido tumis mentega, puree kacang." },
    { id: "f24", name: "Grilled Veal Chop", price: 580, img: "images/Grilled Veal Chop.jpg", desc: "Paha sapi muda bakar, puree kentang truffle." },
    { id: "f25", name: "Fresh Oyster Platte", price: 440, img: "images/Fresh Oyster Platte.jpg", desc: "Tiram segar Platte, mignonette saus, lime." },
    { id: "f26", name: "Duck Magret", price: 410, img: "images/Duck Magret.jpg", desc: "Magret paha bebek panggang, buah berry sauce." },
    { id: "f27", name: "Sole Meunière", price: 490, img: "images/Sole Meunière.jpg", desc: "Ikan Sole goreng Meunière, mentega lemon." },
    { id: "f28", name: "Classic Steak Tartare", price: 320, img: "images/Classic Steak Tartare.jpg", desc: "Daging sapi Tartare marinade, kuning telur." },
    { id: "f29", name: "Wild Mushroom Tart", price: 210, img: "images/Wild Mushroom Tart.jpg", desc: "Tart jamur liar campuran, krim truffle hitam." }
];

const drinkMenu = [
    { id: "d0", name: "Red Wine Reserve", price: 150, img: "images/Red Wine Reserve.jpg", desc: "Anggur merah Pinot Noir elegan." },
    { id: "d1", name: "Château Margaux", price: 950, img: "images/Château Margaux.jpg", desc: "Bordeaux klasik dengan aroma violet." },
    { id: "d2", name: "Golden Espresso", price: 85, img: "images/Golden Espresso.jpg", desc: "Biji Kopi Arabika, lapisan emas 24k." },
    { id: "d3", name: "Crystal Mocktail", price: 65, img: "images/Crystal Mocktail.jpg", desc: "Sari bunga telang, lychee segar." },
    { id: "d4", name: "Blue Sapphire Gin", price: 120, img: "images/Blue Sapphire Gin.jpg", desc: "Gin aromatik, tonic water premium." },
    { id: "d5", name: "Vintage Macallan", price: 450, img: "images/Vintage Macallan.jpg", desc: "Wiski single malt 18 tahun." },
    { id: "d6", name: "Krug Champagne", price: 800, img: "images/Krug Champagne.jpg", desc: "Champagne Krug Vintage jernih." },
    { id: "d7", name: "Aged Tequila", price: 180, img: "images/Aged Tequila.jpg", desc: "Tequila Añejo, aroma vanila." },
    { id: "d8", name: "Espresso Martini", price: 95, img: "images/Espresso Martini.jpg", desc: "Vodka, Kahlúa, Espresso segar." },
    { id: "d9", name: "Hibiscus Mocktail", price: 60, img: "images/Hibiscus Mocktail.jpg", desc: "Sari bunga sepatu, sirup markisa." },
    { id: "d10", name: "Smoked Manhattan", price: 135, img: "images/Smoked Manhattan.jpg", desc: "Rye whiskey, vermouth manis." },
    { id: "d11", name: "Yuzu Sour", price: 85, img: "images/Yuzu Sour.jpg", desc: "Japanese Yuzu, Gin, sirup gula." },
    { id: "d12", name: "Classic Negroni", price: 110, img: "images/Classic Negroni.jpg", desc: "Gin, Campari, Vermouth manis." },
    { id: "d13", name: "Lavender Lemonade", price: 55, img: "images/Lavender Lemonade.jpg", desc: "Lemon juice, sirup lavender." },
    { id: "d14", name: "Pisco Sour", price: 105, img: "images/Pisco Sour.jpg", desc: "Pisco Peruvian, lime juice." },
    { id: "d15", name: "Ginger Mojito", price: 75, img: "images/Ginger Mojito.jpg", desc: "Rum putih, jahe segar, mint." },
    { id: "d16", name: "Rose Mocktail", price: 60, img: "images/Rose Mocktail.jpg", desc: "Sari bunga mawar, soda air." },
    { id: "d17", name: "Elderflower Spritz", price: 95, img: "images/Elderflower Spritz.jpg", desc: "Elderflower liqueur, Prosecco." },
    { id: "d18", name: "Mezcal Negroni", price: 125, img: "images/Mezcal Negroni.jpg", desc: "Mezcal, Campari, Vermouth." },
    { id: "d19", name: "Lychee Mocktail", price: 65, img: "images/Lychee Mocktail.jpg", desc: "Sari lychee jernih, soda." }
];

let cart = [];



// --- CORE UI ENGINE ---

function init() {

    renderMenu('food-container', foodMenu);

    renderMenu('drinks-container', drinkMenu);

}



function renderMenu(containerId, data) {

    const el = document.getElementById(containerId);

    el.innerHTML = data.map(item => `

        <div class="group cursor-pointer" onclick="openDetail('${item.id}')">

            <div class="relative overflow-hidden rounded-2xl aspect-square mb-4">

                <img src="${item.img}" class="object-cover w-full h-full transition duration-700 group-hover:scale-110">

                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>

            </div>

            <h3 class="font-serif text-lg">${item.name}</h3>

            <p class="text-[#b4924a] font-bold text-sm tracking-widest mt-1">${item.price}k</p>

            <p class="text-gray-400 text-[10px] uppercase tracking-tighter mt-1 line-clamp-1">${item.desc}</p>

        </div>

    `).join('');

}



// --- MODAL SYSTEM (REPAIRED & ELEGANT) ---

function showModal(contentHtml) {

    const modal = document.getElementById('main-modal');

    const overlay = document.getElementById('global-overlay');

    const container = document.getElementById('modal-content');

   

    container.innerHTML = contentHtml;

    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');

    document.body.style.overflow = 'hidden';

    lucide.createIcons();

}



function closeModal() {

    document.getElementById('main-modal').classList.add('hidden');

    document.getElementById('global-overlay').classList.add('hidden');

    document.body.style.overflow = 'auto';

}



function openDetail(id) {

    const item = [...foodMenu, ...drinkMenu].find(i => i.id === id);

    let qty = 1;



    const content = `

        <button onclick="closeModal()" class="absolute top-6 right-6 z-10 bg-white/80 p-2 rounded-full hover:bg-white"><i data-lucide="x" class="w-5 h-5"></i></button>

        <img src="${item.img}" class="w-full h-64 object-cover">

        <div class="p-8">

            <div class="flex justify-between items-start mb-4">

                <div>

                    <h2 class="text-2xl font-serif mb-1">${item.name}</h2>

                    <p class="text-gray-400 text-xs uppercase tracking-widest italic">${item.desc}</p>

                </div>

                <span class="text-xl font-bold text-[#b4924a]">${item.price}k</span>

            </div>

           

            <div class="mb-6">

                <label class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Special Request</label>

                <textarea id="modal-note" class="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#b4924a] outline-none h-20 resize-none" placeholder="Allergies, preferences, or notes..."></textarea>

            </div>



            <div class="flex items-center justify-between">

                <div class="flex items-center bg-gray-100 rounded-2xl p-1">

                    <button onclick="updateModalQty(-1)" class="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition">-</button>

                    <span id="modal-qty-val" class="w-12 text-center font-bold">1</span>

                    <button onclick="updateModalQty(1)" class="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition">+</button>

                </div>

                <button onclick="addToCart('${item.id}')" class="bg-[#1a1a1a] text-white px-8 py-4 rounded-2xl text-[10px] font-bold tracking-[0.2em] hover:bg-[#b4924a] transition duration-500">ADD TO BAG</button>

            </div>

        </div>

    `;

    showModal(content);

}



// --- LOGIC FUNCTIONS ---

window.updateModalQty = (val) => {

    let el = document.getElementById('modal-qty-val');

    let current = parseInt(el.innerText);

    let next = current + val;

    if (next < 1) return;

    if (next > 20) {

        if (!confirm(`Are you sure you want to order ${next} servings?`)) return;

    }

    el.innerText = next;

};



window.addToCart = (id) => {

    const item = [...foodMenu, ...drinkMenu].find(i => i.id === id);

    const qty = parseInt(document.getElementById('modal-qty-val').innerText);

    const note = document.getElementById('modal-note').value;



    if (!note && !confirm("No notes provided. Are you sure?")) return;



    cart.push({ ...item, qty, note, cartId: Date.now(), takeaway: false });

    updateCartUI();

    closeModal();

};



function updateCartUI() {

    const badge = document.getElementById('cart-badge');

    badge.innerText = cart.reduce((s, i) => s + i.qty, 0);

    badge.classList.toggle('hidden', cart.length === 0);

}



window.toggleCartModal = () => {

    if (cart.length === 0) return alert("Your bag is empty.");

   

    let total = cart.reduce((s, i) => s + (i.price * i.qty), 0);

    const content = `

        <div class="p-8 max-h-[80vh] flex flex-col">

            <div class="flex justify-between items-center mb-8">

                <h2 class="text-2xl font-serif italic">Your Selections</h2>

                <button onclick="closeModal()"><i data-lucide="x"></i></button>

            </div>

            <div class="overflow-y-auto flex-grow space-y-6 pr-2">

                ${cart.map(item => `

                    <div class="flex items-center space-x-4 border-b border-gray-50 pb-6">

                        <img src="${item.img}" class="w-16 h-16 rounded-xl object-cover">

                        <div class="flex-grow">

                            <h4 class="font-serif text-sm">${item.name}</h4>

                            <p class="text-[#b4924a] text-xs font-bold">${item.price}k</p>

                        </div>

                        <div class="flex items-center space-x-2">

                            <button onclick="updateCartQty(${item.cartId}, -1)" class="w-6 h-6 border rounded-lg">-</button>

                            <span class="text-xs font-bold w-4 text-center">${item.qty}</span>

                            <button onclick="updateCartQty(${item.cartId}, 1)" class="w-6 h-6 border rounded-lg">+</button>

                        </div>

                        <button onclick="toggleTakeaway(${item.cartId})" class="${item.takeaway ? 'text-[#d4af37]' : 'text-gray-300'}"><i data-lucide="package" class="w-4 h-4"></i></button>

                    </div>

                `).join('')}

            </div>

            <div class="mt-8 pt-6 border-t border-gray-100">

                <div class="flex justify-between mb-6">

                    <span class="text-gray-400 uppercase text-[10px] tracking-widest">Investment</span>

                    <span class="font-bold text-xl">${total}k</span>

                </div>

                <button onclick="checkout()" class="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl font-bold text-[10px] tracking-[0.3em] hover:bg-[#b4924a] transition">CHECKOUT</button>

            </div>

        </div>

    `;

    showModal(content);

};



window.updateCartQty = (cartId, val) => {

    let idx = cart.findIndex(i => i.cartId === cartId);

    if (cart[idx].qty === 1 && val === -1) {

        if (!confirm("Remove this item?")) return;

        cart.splice(idx, 1);

    } else {

        cart[idx].qty += val;

    }

    if (cart.length === 0) closeModal();

    else toggleCartModal();

    updateCartUI();

};



window.toggleTakeaway = (cartId) => {

    let idx = cart.findIndex(i => i.cartId === cartId);

    if (confirm("Switch to Takeaway?")) {

        cart[idx].takeaway = !cart[idx].takeaway;

        toggleCartModal();

    }

};



window.checkout = () => {

    const content = `

        <div class="p-10 text-center">

            <h2 class="text-2xl font-serif mb-8">Settlement Method</h2>

            <div class="grid grid-cols-2 gap-4">

                <button onclick="finishOrder('CASH')" class="border-2 border-gray-100 p-6 rounded-3xl hover:border-[#b4924a] transition group">

                    <i data-lucide="banknote" class="mx-auto mb-2 text-gray-400 group-hover:text-[#b4924a]"></i>

                    <span class="text-[10px] font-bold tracking-widest">CASH</span>

                </button>

                <button onclick="finishOrder('QRIS')" class="border-2 border-gray-100 p-6 rounded-3xl hover:border-[#b4924a] transition group">

                    <i data-lucide="qr-code" class="mx-auto mb-2 text-gray-400 group-hover:text-[#b4924a]"></i>

                    <span class="text-[10px] font-bold tracking-widest">QRIS</span>

                </button>

            </div>

            <button onclick="closeModal()" class="mt-8 text-gray-400 text-[10px] tracking-widest uppercase">Go Back</button>

        </div>

    `;

    showModal(content);

};



window.finishOrder = (type) => {

    if (type === 'CASH') {

        showModal(`

            <div class="p-10 text-center">

                <div class="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">

                    <i data-lucide="check" class="w-10 h-10"></i>

                </div>

                <h2 class="text-2xl font-serif mb-2">Order Confirmed</h2>

                <p class="text-gray-400 text-sm mb-6">Order ID: LPR-${Date.now().toString().slice(-6)}</p>

                <p class="text-xs uppercase tracking-widest text-[#b4924a]">Please settle at the cashier</p>

                <button onclick="location.reload()" class="mt-8 bg-[#1a1a1a] text-white px-8 py-3 rounded-xl text-[10px] tracking-widest">FINISH</button>

            </div>

        `);

    } else {

        showModal(`

            <div class="p-10 text-center">

                <h2 class="text-2xl font-serif mb-6">Scan QRIS</h2>

                <div class="bg-white p-4 border-2 border-gray-50 rounded-3xl inline-block mb-6">

                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=LOPIER-PAY" class="w-48 h-48">

                </div>

                <div class="flex flex-col space-y-3">

                    <button onclick="alert('Saving to gallery...')" class="bg-gray-100 text-[10px] font-bold py-3 rounded-xl tracking-widest uppercase">Download QR</button>

                    <button onclick="location.reload()" class="text-red-400 text-[10px] font-bold py-3 tracking-widest uppercase">Cancel Order</button>

                </div>

                <p class="mt-6 text-[9px] text-gray-400 italic">Auto-processing in 10 seconds...</p>

            </div>

        `);

        setTimeout(() => { alert("Payment Successful. Bon Appétit!"); location.reload(); }, 10000);

    }

};



init();