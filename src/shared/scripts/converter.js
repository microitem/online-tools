// Definícia jednotiek pre každý typ konverzie
const units = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.344
    },
    weight: {
        kilogram: 1,
        gram: 0.001,
        milligram: 0.000001,
        ton: 1000,
        pound: 0.45359237,
        ounce: 0.028349523125
    },
    volume: {
        liter: 1,
        milliliter: 0.001,
        "cubic meter": 1000,
        gallon: 3.78541178,
        pint: 0.473176473
    },
    temperature: {
        celsius: "base",
        fahrenheit: "special",
        kelvin: "special"
    }
};

// Funkcia na naplnenie select boxov
function populateUnits(type) {
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    
    // Vyčistenie existujúcich options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    // Pridanie nových options
    for (let unit in units[type]) {
        fromUnit.add(new Option(unit, unit));
        toUnit.add(new Option(unit, unit));
    }
}

// Funkcia na konverziu teploty
function convertTemperature(value, fromUnit, toUnit) {
    // Prevod na Celsius
    let celsius;
    if (fromUnit === 'celsius') {
        celsius = value;
    } else if (fromUnit === 'fahrenheit') {
        celsius = (value - 32) * 5/9;
    } else if (fromUnit === 'kelvin') {
        celsius = value - 273.15;
    }
    
    // Prevod z Celsius na cieľovú jednotku
    if (toUnit === 'celsius') {
        return celsius;
    } else if (toUnit === 'fahrenheit') {
        return celsius * 9/5 + 32;
    } else if (toUnit === 'kelvin') {
        return celsius + 273.15;
    }
}

// Hlavná konverzná funkcia
function convert() {
    const type = document.getElementById('conversion-type').value;
    const fromValue = parseFloat(document.getElementById('from-value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    
    if (isNaN(fromValue)) {
        document.getElementById('to-value').value = '';
        return;
    }
    
    let result;
    if (type === 'temperature') {
        result = convertTemperature(fromValue, fromUnit, toUnit);
    } else {
        result = fromValue * units[type][fromUnit] / units[type][toUnit];
    }
    
    document.getElementById('to-value').value = result.toFixed(8);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializácia prvého select boxu
    populateUnits('length');
    
    // Event listener pre zmenu typu konverzie
    document.getElementById('conversion-type').addEventListener('change', function() {
        populateUnits(this.value);
        convert();
    });
    
    // Event listeners pre zmenu hodnôt
    document.getElementById('from-value').addEventListener('input', convert);
    document.getElementById('from-unit').addEventListener('change', convert);
    document.getElementById('to-unit').addEventListener('change', convert);
});