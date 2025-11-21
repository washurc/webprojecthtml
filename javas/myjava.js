


function dynamic(){
    document.getElementById('change').innerHTML = "You can reach our support team via live chat on our website, email us at Goodsend@gmail.com, or call our helpline.";
}

function calculateBMI(){
    const model = parseFloat(document.getElementById('model').value);
    const weeks = parseFloat(document.getElementById('weeks').value);
    const results = document.getElementById('results');

    const bmi = model /  (weeks * weeks)

    let category = ""

    if(bmi < 2)
        category = "Vehicle/Air"
    else if(bmi > 2)
        category = "Shipping"

    reults.textContent = `Your BMI is ${bmi}. Your goods will be via ${category}`
}