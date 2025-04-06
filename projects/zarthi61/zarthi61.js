async function fetchData() {
    try {
        const response = await fetch("ServiceDATA.json");
        const services = await response.json();
        generateCards(services);
        initStaticFilters(services); // Initialize filter events for static filter UI
        setupSearch(services);
        generateFilters(services);  // Populate filter options dynamically
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Generate Filter Options Dynamically// Initialize filter events for static filter UI

function initStaticFilters(services) {
    // Attach change listener to all checkboxes inside filter-options
    document.querySelectorAll(".filter-options input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", () => applyStaticFilters(services));
    });

    // Reset button: uncheck all checkboxes and reapply filters
    const resetBtn = document.querySelector(".reset-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            document.querySelectorAll(".filter-options input[type='checkbox']").forEach(cb => cb.checked = false);
            applyStaticFilters(services);
        });
    }
}

// Filter logic using static filters
function applyStaticFilters(services) {
    // Get selected Service Types (from static section)
    const selectedServiceTypes = [...document.querySelectorAll(
        ".filter-section:nth-of-type(1) input[type='checkbox']:checked"
    )].map(cb => cb.parentElement.textContent.trim());

    // Get selected Practices (from static section)
    const selectedPractices = [...document.querySelectorAll(
        ".filter-section:nth-of-type(2) input[type='checkbox']:checked"
    )].map(cb => cb.parentElement.textContent.trim());

    const filteredServices = services.filter(service => {
        const matchesServiceType = selectedServiceTypes.length === 0 || 
            selectedServiceTypes.includes(service.service_type);

        const matchesPractice = selectedPractices.length === 0 || 
            selectedPractices.includes(service.practice_name);

        return matchesServiceType && matchesPractice;
    });

    // If no filters are applied (both arrays are empty), show all cards
    if (selectedServiceTypes.length === 0 && selectedPractices.length === 0) {
        generateCards(services); // Show all cards if no filter is applied
    } else {
        generateCards(filteredServices); // Show filtered cards
    }
}


// Generate Cards Dynamically
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
            </div>
        `;
        container.innerHTML += cardHTML;
    });


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
    

    // Function to truncate text to a specific length and add "..."
        function truncateText(text, maxLength) {
     if (!text) return ""; // Prevent errors if text is null or undefined
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
    
    // Add event listeners to each card
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            updateRightSection(card);
        });
    });
}

// Show/Hide Filter on Hover
document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filter");
    const filterContainer = document.querySelector(".filter-options");

    // Show filter when hovering on filter button
    filterButton.addEventListener("mouseenter", () => {
        filterContainer.style.display = "block";
    });

    // Keep filter visible when hovering on it
    filterContainer.addEventListener("mouseenter", () => {
        filterContainer.style.display = "block";
    });

    // Hide filter when mouse leaves both the button and the container
    filterContainer.addEventListener("mouseleave", () => {
        filterContainer.style.display = "none";
    });

    filterButton.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!filterContainer.matches(":hover")) {
                filterContainer.style.display = "none";
            }
        }, 200);
    });
});

//functionality of search bar left side 
function setupSearch(_services) {
    const searchInput = document.getElementById("search-bar");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const serviceName = card.getAttribute("data-service");
           

            if (serviceName.includes(searchText)) {
                card.style.display = "block";  
            } else {
                card.style.display = "none";   
            }
        });
    });
}
window.onload = fetchData;
