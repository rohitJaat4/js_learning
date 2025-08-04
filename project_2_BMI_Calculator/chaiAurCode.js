const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();
  const heightValue = document.querySelector('#height').value;
  const weightValue = document.querySelector('#weight').value;
  const height = parseInt(heightValue);
  const weight = parseInt(weightValue);
  const results = document.querySelector('#results');

  if (heightValue === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
    return;
  } else if(weightValue === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
    return;
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  results.innerHTML = `Your BMI is ${bmi}`;
  }
});



