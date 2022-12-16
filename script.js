const heightInput = document.querySelector('#height');
const massInput = document.querySelector('#mass');
const para = document.querySelector('#result');
const btn = document.querySelector('button');

heightInput.focus()


function checkResult() {
    const height = Number(heightInput.value);
    const mass = Number(massInput.value);
    const bmi = Math.round(mass / (height * height));
    para.textContent = bmi;
    para.style.visibility = 'visible';
    if (bmi < 19) {
        para.textContent = "Your BMI is " + bmi + " You are underweight. y0u may need to put on some weight. you are recommended to click on the link to seek for advice"
        
    }

    if (bmi > 19 && bmi <= 25) {
        para.textContent = "Your BMI is " + bmi + " You are at healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing seriosus health probkems"
        
    }

    if (bmi > 25 && bmi < 30) {
        para.textContent = "Your BMI is " + bmi + " You are slightly overweight. You may be advised to lose some weight for heslth reasons. You are recommended to talk click on the link below for advice"
        
    } 

    if (bmi >= 30.0) {
        para.textContent = "Your BMI is " + bmi + " You are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to click on the link  below for advice"
        
    }

    heightInput.value ='';
    massInput.value ='';
    heightInput.focus();

        
    
}

btn.addEventListener('click', checkResult);
