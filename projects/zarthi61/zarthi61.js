async function fetchData() {
    try {
        const response = await fetch("ServiceDATA.json");
        const services = await response.json();
        generateCards(services);
        setupSearch(services);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function generateCards(data) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #666;">No results found.</p>`;
        return;
    }

    data.forEach(service => {
       
            const cardHTML = `
                <div class="card" data-service="${service.service_name.toLowerCase()}" 
                     data-description="${service.service_description.toLowerCase()}"
                     data-name="${service.service_name}"
                     data-description-long="${service.service_description}"
                     data-price="${service.price}">
                    <h3 class="card-title">${truncateText(service.service_name, 40)}</h3>
                    <p class="card-description">${truncateText(service.service_description, 180)}</p>
                    <div class="card-divider"></div>
                    <div class="card-footer">
                        <span class="badge">${service.practice_name}</span>
                        <div class="footer-right">
                            <p>Starting from</p>
                            <span class="price"><span class="currency">₹</span>${service.price}</span>
                        </div>
                    </div>
                </div>`
            ;
            container.innerHTML += cardHTML;
        });

    // Add event listeners to each card
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            updateRightSection(card);
        });
    });
}
function updateRightSection(card) {
    const middleSection = document.querySelector(".middle-section");
    const rightSection = document.querySelector(".section-right");

    // Show right section and switch left section to single column
    rightSection.classList.add("active");
    middleSection.classList.add("partitioned");

    // Update content
    const name = card.getAttribute("data-name");
    const description = card.getAttribute("data-description");
    const price = card.getAttribute("data-price");

    const contentHTML = `
        <div class="right-bar">
            <span>Micro Services of <h1>${name}</h1> <button class="close-section">Close</button></span>
            <div class="middle-last">
                <div class="search-bar">
                    <img src="../zarthi61/assets/search-icon.png" alt="Search">
                    <input type="text" id="search-bar-right" placeholder="Search by Service">
                </div>
                <button id="filter">
                    <img src="../zarthi61/assets/filter-img.png" alt="Filter">
                </button>
            </div>
        
        <div class="service-details">
            <h3>Description:</h3>
            <p>${description}</p>
            <h3>Price:</h3>
            <span class="price">₹${price}</span>
        </div>
       
        </div>
    `;

    rightSection.innerHTML = contentHTML;

    // Close button event
    document.querySelector(".close-section").addEventListener("click", function () {
        rightSection.classList.remove("active");
        middleSection.classList.remove("partitioned"); // Restore multi-column layout
    });
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
}

// Search Functionality (Left Section)
function setupSearch(services) {
    const searchInput = document.querySelector(".middle-section .search-bar input");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const serviceName = card.getAttribute("data-name").toLowerCase();
            const serviceDesc = card.getAttribute("data-description").toLowerCase();

            if (serviceName.includes(searchText) || serviceDesc.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

window.onload = fetchData;
