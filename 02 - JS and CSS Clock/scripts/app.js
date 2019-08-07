
const setClock  = () => {
  const now = new Date();
  const secondHand = document.querySelector('.second-hand');
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360)+90;

  
  if(secondsDegree === 90){
    secondHand.style.transition = 'all 0.01s';
  }else{

    secondHand.style.transition = 'all 0.05s';
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
  }

  const minutes = now.getMinutes();
  const minsDegree  = ((minutes / 60) * 360)+90;
  const minsHand = document.querySelector('.min-hand');
  minsHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = ((hours / 60)* 360)+ 90;
  const hoursHand = document.querySelector('.hour-hand');
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setClock,1000);
