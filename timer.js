function displayClock(){
  const timE=new Date();
  const hour_S=timE.getHours();
  const minute_S=timE.getMinutes();
  const second_S=timE.getSeconds();
  const Meridiem=document.getElementById('Meridiem')
  // implementation variables
      document.getElementById('hours').innerHTML=hour_S;
      document.getElementById('minutes').innerHTML=minute_S;
      document.getElementById('seconds').innerHTML=second_S;
}
setInterval(displayClock,10)