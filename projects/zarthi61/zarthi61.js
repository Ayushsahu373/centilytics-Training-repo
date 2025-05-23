

async function fetchData() {
    try {
        const response = await fetch("ServiceDATA.json");
        const services = await response.json();
        generateCards(services);  // Generate cards on initial load
        initStaticFilters(services);   // Initialize filter events for static filter UI
        setupSearch(services); // Initialize search functionality
        applyStaticFilters(services); // apply filters on load
        setupSorting(services); //sorting function
      
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
    // Utility function to trim and remove duplicates
    const getCheckedLabels = (selector) => {
        const values = [...document.querySelectorAll(selector)]
            .map(cb => cb.parentElement.textContent.trim());
        return [...new Set(values)]; // remove duplicates
    };

    // Get selected filters
    const selectedServiceTypes = getCheckedLabels(
        ".filter-section[data-filter='service-type'] input[type='checkbox']:checked"
      );
      const selectedPractices = getCheckedLabels(
        ".filter-section[data-filter='practice'] input[type='checkbox']:checked"
      );
      

    // Debug: Log what is selected
    console.log("✅ Selected Service Types:", selectedServiceTypes);
    console.log("✅ Selected Practices:", selectedPractices);

    const filteredServices = services.filter(service => {
        const serviceType = service.service_type.trim();
        const practiceName = service.practice_name.trim();

        const matchesServiceType = selectedServiceTypes.length === 0 ||
            selectedServiceTypes.includes(serviceType);

        const matchesPractice = selectedPractices.length === 0 ||
            selectedPractices.includes(practiceName);

        if (matchesServiceType && matchesPractice) {
            console.log("✔️ Matched:", service.service_name);
        }

        return matchesServiceType && matchesPractice;
    });

    // Debug: Log filtered results
    console.log("🎯 Filtered Services:", filteredServices);

    // Render cards
    if (selectedServiceTypes.length === 0 && selectedPractices.length === 0) {
        generateCards(services); // No filters applied, show all
    } else {
        generateCards(filteredServices); // Show filtered
    }
    const leftSectionMiddleBarHeader = document.querySelector("#services-of");
    if(selectedServiceTypes.length === 0 && selectedPractices.length === 0) {
        leftSectionMiddleBarHeader.innerHTML = `<h1 style>All Services</h1>`;
    } else if(selectedPractices.length != 0) {
    leftSectionMiddleBarHeader.innerHTML = `<span >Services of <h1>${selectedPractices.join(", ")}</h1></span>`;
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


    // right section cards

    function updateRightSection(card) {
        const middleSection = document.querySelector(".middle-section");
        const rightSection = document.querySelector(".section-right");
       
        // Show right section and switch left section to single column
        rightSection.classList.add("active");
        middleSection.classList.add("partitioned");

    
        // Update content
        const name = card.getAttribute("data-name");
        let microServicesHTML = "";

              for (let i = 0; i < 10; i++) {
                  microServicesHTML += `
                    <div class="service-card">
                    
                           <div class="service-info">
                               <h3>UX Wireframe for Web Applications</h3>
                               <p>In this Microservice, you can easily modify the configuration of any existing AWS EC2. In this Microservice, you can easily modify the configuration of any existing.</p>
                                <div class="service-stats">
                                  <span><img src="../zarthi61/assets/rocket.svg" alt="rocket" id="rocket"> 100+ Successful Deliveries</span>
                                  <span>|</span>
                                  <span>12 Reviews <img src="../zarthi61/assets/skip.svg" alt="review"></span>
                                </div>
                            </div>
                                <div class="service-action">
                                 <div class="price">₹ 389 <span>/ wireframe</span></div>
                                 <div class="sla">Avg. SLA 12 Hr</div>
                                 <button class="request-btn">Request Service</button>
                                </div>
                        </div>
                     `;
                    }
        
    
        const contentHTML = `
            <div class="right-bar">
                <div class="right-bar-header">
                <span>Micro Services of <h1>${name}</h1></span>
                 <button class="close-section"><img src="assets/cross.png" alt="cross"></button>
                </div> 
                <div class="middle-last">
                    <div class="search-bar">
                        <img src="../zarthi61/assets/search-icon.png" alt="Search">
                        <input type="text" id="search-bar" placeholder="Search by Service">
                    </div>
                    <button id="filter">
                        <img src="../zarthi61/assets/filter-img.png" alt="Filter">
                    </button>
                </div>
            
            <div class="micro-services"></div>
           
            </div>
        `;
       
        rightSection.innerHTML = contentHTML;
        document.querySelector(".micro-services").innerHTML = microServicesHTML;
    
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


    //sorting functionality
    function setupSorting(services) {
        const sortOptions = document.querySelectorAll(".sort-list li");
    
        sortOptions.forEach(option => {
            option.addEventListener("click", () => {
                const id = option.id;
                let sortedServices = [...services];
    
                switch (id) {
                    case "sort-name-asc":
                        sortedServices.sort((a, b) =>
                            a.service_name.localeCompare(b.service_name));
                        break;
                    case "sort-name-desc":
                        sortedServices.sort((a, b) =>
                            b.service_name.localeCompare(a.service_name));
                        break;
                    case "sort-price-asc":
                        sortedServices.sort((a, b) =>
                            parseFloat(a.price) - parseFloat(b.price));
                        break;
                    case "sort-price-desc":
                        sortedServices.sort((a, b) =>
                            parseFloat(b.price) - parseFloat(a.price));
                        break;
                }
    
                sortOptions.forEach(opt => opt.classList.remove("selected"));
                option.classList.add("selected");
    
               
                generateCards(sortedServices);
            });
        });
    }
    
    

window.onload = fetchData;
