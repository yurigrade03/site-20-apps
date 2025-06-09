function converterParaFahrenheit() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(celsius)) {
    resultado.textContent = 'Digite um valor válido em Celsius.';
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  resultado.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function converterParaCelsius() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(fahrenheit)) {
    resultado.textContent = 'Digite um valor válido em Fahrenheit.';
    return;
  }

  const celsius = (fahrenheit - 32) * 5 / 9;
  resultado.textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}
