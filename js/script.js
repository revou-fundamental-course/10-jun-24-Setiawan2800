function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius !== '') {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = parseFloat(fahrenheit.toFixed(2));
        document.getElementById('calculationSteps').value = `${celsius}°C × (9/5) + 32 = ${parseFloat(fahrenheit.toFixed(2))}°F`;
    }
}

function reverseConversion() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== '') {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = parseFloat(celsius.toFixed(2));
        document.getElementById('calculationSteps').value = `${fahrenheit}°F - 32 × (5/9) = ${parseFloat(celsius.toFixed(2))}°C`;
    }
}

function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculationSteps').value = '';
}
