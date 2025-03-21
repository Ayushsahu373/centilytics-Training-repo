async function fetchData() {
    try {
        const response = await fetch("ServiceDATA.json");
        const services = await response.json();
        generateCards(services);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function generateCards(data) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";

    data.forEach(service => {
        const cardHTML = `
            <div class="card">
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

window.onload = fetchData;
