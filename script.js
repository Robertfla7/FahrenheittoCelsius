document.getElementById('convertBtn').addEventListener('click', () => {
  console.log("Button clicked");

  const fInput = document.getElementById('fahrenheit').value;
  console.log("User entered:", fInput);

  const tempF = parseInt(fInput);
  console.log("Parsed to number:", tempF);

  if (isNaN(tempF)) {
    document.getElementById('result').textContent = 'Please enter a valid number.';
    console.log("Input was not a number");
    return;
  }

  const tempC = (tempF - 32) / 1.8;
  console.log("Calculated Celsius:", tempC);

  const roundedC = tempC.toFixed(2);
  console.log("Rounded Celsius:", roundedC);

  document.getElementById('result').textContent = `${tempF}°F is ${roundedC}°C`;
});