async function fetchData() {
    try {
        const response = await fetch("ServiceDATA.json");
        const services = await response.json();
        generateCards(services);
        setupSearch(services);  // Initialize search after data is loaded
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
                 data-description="${service.service_description.toLowerCase()}">
                <h3 class="card-title">${service.service_name}</h3>
                <p class="card-description">${truncateText(service.service_description, 180)}</p>
                <div class="card-divider"></div>
                <div class="card-footer">
                    <span class="badge">${service.practice_name}</span>
                    <div class="footer-right">
                        <p>Starting from</p>
                        <span class="price"><span class="currency">₹</span>${service.price}</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}


function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        const truncated = text.substring(0, maxLength);
        const lastSpace = truncated.lastIndexOf(" ");
        return truncated.substring(0, lastSpace) + "...";
    }
    return text;
}

// Search Functionality
function setupSearch(services) {
    const searchInput = document.getElementById("search-bar");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const serviceName = card.getAttribute("data-service");
            const serviceDesc = card.getAttribute("data-description");

            if (serviceName.includes(searchText) || serviceDesc.includes(searchText)) {
                card.style.display = "block";  
            } else {
                card.style.display = "none";   
            }
        });
    });
}

window.onload = fetchData;
