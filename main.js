document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAV MENU ================= */
    const navLinks = document.getElementById("navLinks");

    window.showMenu = () => {
        if (navLinks) navLinks.style.right = "0";
    };

    window.hideMenu = () => {
        if (navLinks) navLinks.style.right = "-200px";
    };

    /* ================= SCROLL ANIMATION ================= */
    const animatedElements = document.querySelectorAll(".animate");

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        animatedElements.forEach(el => observer.observe(el));
    }

    /* ================= HEADER SLIDESHOW ================= */
    const headerSlides = document.querySelectorAll(".header-slideshow1 .slide");
    let headerIndex = 0;

    if (headerSlides.length > 0) {
        setInterval(() => {
            headerSlides[headerIndex].classList.remove("active");
            headerIndex = (headerIndex + 1) % headerSlides.length;
            headerSlides[headerIndex].classList.add("active");
        }, 3000);
    }

    /* ================= GALLERY PAGE ================= */
    const serviceCards = document.getElementById("serviceCards");
    const services = JSON.parse(localStorage.getItem("services")) || [];

    if (serviceCards && services.length > 0) {
        services.forEach(service => {
            const card = document.createElement("div");
            card.className = "card animate fade-up";
            card.innerHTML = `
                <a href="${service.link}">
                    <img src="${service.image}" alt="${service.title}">
                    <h3>${service.title}</h3>
                    <p>${service.desc}</p>
                </a>
            `;
            serviceCards.appendChild(card);
        });
    }

});

/* ================= BATTERY MODAL ================= */
const batteryData = {
    reliance: { title: "Reliance Solar Batteries", points: ["High energy storage capacity","Long backup time","Made in India","Low maintenance","Compatible with inverters","Strong build","Overcharge protection","Long life","Home & commercial use"] },
    waaree: { title: "Waaree Solar Batteries", points: ["Cost-effective","Good efficiency","Reliable backup","Durable casing","Easy installation","Low discharge","Stable output","Warranty support"] },
    tata: { title: "Tata Solar Batteries", points: ["Premium quality","High cycle life","Advanced safety","Fast charging","Stable power","Weather resistant","Long warranty","Low maintenance"] },
    vikram: { title: "Vikram Solar Batteries", points: ["Global standards","High efficiency","Strong design","Advanced protection","Long life","Hybrid compatible"] }
};

function openBatteryModal(company) {
    const modal = document.getElementById("batteryModal");
    const title = document.getElementById("batteryTitle");
    const list = document.getElementById("batteryPoints");

    if (!modal || !batteryData[company]) return;

    title.innerText = batteryData[company].title;
    list.innerHTML = "";

    batteryData[company].points.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p;
        list.appendChild(li);
    });

    modal.style.display = "block";
}

function closeBatteryModal() {
    const modal = document.getElementById("batteryModal");
    if (modal) modal.style.display = "none";
}

/* ================= INVERTER MODAL ================= */
const inverterData = {
    reliance: { title: "Reliance Solar Inverter", points: ["High efficiency","Hybrid support","Smart management","Low power loss","Safety protection","Long life"] },
    waaree: { title: "Waaree Solar Inverter", points: ["Cost-effective","Grid & off-grid","Compact design","Easy install","Low maintenance"] },
    tata: { title: "Tata Solar Inverter", points: ["Premium build","High efficiency","Smart app","Weather resistant","Strong support"] },
    vikram: { title: "Vikram Solar Inverter", points: ["Global quality","Heavy-duty","Advanced protection","Stable output","Long service life"] }
};

function openInverterModal(company) {
    const modal = document.getElementById("inverterModal");
    const title = document.getElementById("inverterTitle");
    const list = document.getElementById("inverterPoints");

    if (!modal || !inverterData[company]) return;

    title.innerText = inverterData[company].title;
    list.innerHTML = "";

    inverterData[company].points.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p;
        list.appendChild(li);
    });

    modal.style.display = "block";
}

function closeInverterModal() {
    const modal = document.getElementById("inverterModal");
    if (modal) modal.style.display = "none";
}

/* ================= SOLAR PANEL MODAL ================= */
const solarData = {
    reliance: { title: "Reliance Solar Panels", points: ["Mono PERC","Made in India","25+ years life","Low degradation","Strong frame"] },
    waaree: { title: "Waaree Solar Panels", points: ["Largest manufacturer","Cost-effective","High output","25-year warranty"] },
    tata: { title: "Tata Solar Panels", points: ["Premium quality","High efficiency","Low maintenance","Weather resistant"] },
    vikram: { title: "Vikram Solar Panels", points: ["Global standard","High efficiency","Robust build","PID resistant"] }
};

function openModal(company) {
    const modal = document.getElementById("infoModal");
    const title = document.getElementById("modalTitle");
    const list = document.getElementById("modalPoints");

    if (!modal || !solarData[company]) return;

    title.innerText = solarData[company].title;
    list.innerHTML = "";

    solarData[company].points.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p;
        list.appendChild(li);
    });

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("infoModal");
    if (modal) modal.style.display = "none";
}

    // Fetch services from localStorage
    const gallery = document.getElementById("gallery");
    let services = JSON.parse(localStorage.getItem("services")) || [];

    services.forEach(service => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div class="card-body">
                <h3>${service.title}</h3>
                
                <a href="${service.link}"></a>
            </div>
        `;

        gallery.appendChild(card);
    });
document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.getElementById("gallery");
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="card-body">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 60)}...</p>
            </div>
        `;

        card.addEventListener("click", () => openProjectModal(project));
        gallery.appendChild(card);
    });
});
function openProjectModal(project) {
    document.getElementById("modalTitle").innerText = project.title;
    document.getElementById("modalDesc").innerText = project.description;

    const imagesDiv = document.getElementById("modalImages");
    imagesDiv.innerHTML = "";

    project.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        imagesDiv.appendChild(img);
    });

    document.getElementById("projectModal").style.display = "block";
}

function closeProjectModal() {
    document.getElementById("projectModal").style.display = "none";
}
