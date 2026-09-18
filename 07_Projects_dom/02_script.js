const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.ans');

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = `Please entre valid height`
    }else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = `Please entre valid weight`
    }else{
        result.innerHTML = `Your BMI = ${(weight / ((height * height) / 10000)).toFixed(2)}`
    }

})