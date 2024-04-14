let answers=[ "It is certain","It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
"As I see it, yes","Most likely", "Outlook good", "Yes", "Signs point to yes", 
"Reply hazy, try again", "Ask again later", "Better not tell you now","Cannot predict now", "Concentrate and ask again", 
"Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

let button=document.querySelector('button');
let input=document.querySelector('input');
let output=document.querySelector('.output');
let ball=document.querySelector('.ball');

button.addEventListener('click',()=>reply());
input.addEventListener('change',()=>{
    button.disabled=false;
    ball.classList.remove('shakeEffect');
});
function reply(){
    if(input.value!=""){
        let random=Math.floor(Math.random()*20);
        setTimeout(()=>{
            output.innerText=answers[random];
        },800);
    button.disabled=true;
    ball.classList.add('shakeEffect');
    }
    else
    alert("Enter a question first!");
};