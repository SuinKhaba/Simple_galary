
const data = [
    { id: 1, title: 'Mountain Trip', category: 'Nature', caption: 'Snowy peaks', image: 'mountain_trip.jpg' },
    { id: 2, title: 'City Lights', category: 'Urban', caption: 'Skyscrapers', image: 'city_light.jpeg' },
    { id: 3, title: 'Forest Walk', category: 'Nature', caption: 'Green trees', image: 'forest_walk.jpeg' },
    { id: 4, title: 'Modern Art', category: 'Design', caption: 'Abstract shapes', image: 'morder_art.jpeg' },
    { id: 5, title: 'Old Town', category: 'Urban', caption: 'Streets', image: 'old_town.jpeg' },
    { id: 6, title: 'Minimal Poster', category: 'Design', caption: 'Typography', image: 'minimal_poster.jpg' }
];

const categories = ["All", ...new Set(data.map(d => d.category))];

const categoriesEl = document.getElementById("categories");
const galleryEl = document.getElementById("gallery");
const template = document.getElementById("card-template");

let active = "All";

function renderCategories() {
    categoriesEl.innerHTML = "";
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "cat-btn" + (cat === active ? " active" : "");
        btn.textContent = cat;

        btn.addEventListener("click", () => {
            active = cat;
            renderCategories();
            renderGallery();
        });

        categoriesEl.appendChild(btn);
    });
}


function renderGallery() {
    galleryEl.innerHTML = "";

    const filtered = data.filter(
        item => active === "All" || item.category === active
    );

    filtered.forEach(item => {
        const card = template.content.cloneNode(true);

        card.querySelector(".title").textContent = item.title;
        card.querySelector(".caption").textContent = item.caption;

        const thumb = card.querySelector(".thumb");
        thumb.style.backgroundImage = `url('${item.image}')`;
        thumb.style.backgroundSize = "cover";
        thumb.style.backgroundPosition = "center";

        galleryEl.appendChild(card);
    });
}

// Initial load
renderCategories();
renderGallery();
