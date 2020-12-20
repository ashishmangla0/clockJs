const blockHero = document.querySelectorAll(".block--hero");
const getCurrentTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(date);
    console.log(`i am hour : ${hr}`);
    console.log(`i am Min : ${min}`);
    console.log(`i am Sec : ${sec}`);
  };
  setInterval(getCurrentTime,1000);