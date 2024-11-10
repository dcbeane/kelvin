// Todays forcast is 293 Kelvin
    const kelvin = 293;

// Celsius is 273 less than Kelvin, this code subtracts 273 from the constant variable Kelvin defining our celsius variable.
    const celsius = kelvin - 273;
    
// Here we declare our variable fahrenheit while also defining it by taking celsius and the provided equation and multiplying it.
    var fahrenheit = celsius * (9/5) + 32;

console.log(fahrenheit);

// Here we will round the number saved to fahrenheit
    fahrenheit = Math.floor(fahrenheit);

console.log('The tempreture is', fahrenheit, 'degrees Fahrenheit.');



//step 11: 0 Kelvin is -460 fahrenheit.
