const checkBox = document.getElementById('check-box');
const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');
const body = document.querySelector('body');

const inputRegex = (input)=>{
  const regex = /(?:^1\s?|^)(?:(?:\([0-9][0-9][0-9]\))|[0-9][0-9][0-9])(?:\s|\-)?[0-9][0-9][0-9](?:\s|\-)?[0-9][0-9][0-9][0-9]$/;
  return regex.test(input);
}

const verifier = ()=>{
  checkBox.style = 'animation:none;';
  if(!input.value){
    return alert('Please provide a phone number');
  }
  if(inputRegex(input.value)){
    result.insertAdjacentHTML('beforeend',`<p class="reply1 reply">Valid US number: ${input.value}</p>`);
    checkBox.style = `animation: autoRotate 2s linear 2;`;
  }else{
    result.insertAdjacentHTML('beforeend',`<p class="reply2 reply">Invalid US number: ${input.value}</p>`);
  }
}

const animation = ()=>{
  
}

checkBtn.addEventListener('click',()=>{
  verifier();
});

window.addEventListener('keydown',e=>{
  if(e.key==="Enter"){
    verifier();
  }
})

clearBtn.addEventListener('click',()=>{
  result.innerHTML = '';
})
