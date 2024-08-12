document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const area = parseFloat(document.getElementById('area').value);
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const bathrooms = parseInt(document.getElementById('bathrooms').value);
    const location = document.getElementById('location').value;

    // Mock prediction logic (replace with your model logic)
    let price = (area * 100) + (bedrooms * 5000) + (bathrooms * 3000);
    if (location === "location1") price += 20000;
    else if (location === "location2") price += 30000;
    else if (location === "location3") price += 40000;

    // Display the result
    document.getElementById('result').innerText = `Estimated House Price: $${price.toLocaleString()}`;
});
