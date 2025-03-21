document.getElementById("get-recommendation").addEventListener("click", function() {
    let preferences = ["beach", "mountain", "city", "nature"];
    let selectedPreference = preferences[Math.floor(Math.random() * preferences.length)];
    
    let recommendationText = `We recommend you visit a destination that is great for: ${selectedPreference}. Here are some options:`;

    // Show recommendations
    document.getElementById("recommendation-output").innerHTML = `<p>${recommendationText}</p>
        <ul>
            <li>Beach: Bali, Maldives</li>
            <li>Mountain: Switzerland, Nepal</li>
            <li>City: Tokyo, Barcelona</li>
            <li>Nature: Costa Rica, New Zealand</li>
        </ul>`;
});
