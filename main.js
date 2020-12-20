const blockHero = document.querySelectorAll(".block--hero");
const clockSec =  document.querySelector(".clock__sec");
const clockMin =  document.querySelector(".clock__min");
const clockHour =  document.querySelector(".clock__hr");
const getCurrentTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(date);
    console.log(`i am hour : ${hr}`);
    console.log(`i am Min : ${min}`);
    console.log(`i am Sec : ${sec}`);
    let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
    let minPosition = (min * 360/60) + (sec* 360/60)/60;
    let secPosition = sec * 360/60;

    console.log(minPosition);
console.log(`i am hour ${hrPosition}`);
clockHour.setAttribute("style" , `transform:rotate(${hrPosition}deg)`) ;
clockMin.setAttribute("style" , `transform:rotate(${minPosition}deg)`) ;
   clockSec.setAttribute("style" , `transform:rotate(${secPosition}deg)`)

};

const options = {
    threshold: .25,
  };
let getTime;
const handleObserver = (entries,observer) =>{
entries.forEach((entry) => {
    //console.log(entry);
    if(entry.isIntersecting){
         getTime = setInterval(getCurrentTime,1000);
    }
    else{
        clearInterval(getTime)
    }
});
}

const observerScroll = new IntersectionObserver(handleObserver,options);
blockHero.forEach((hero)=>{
    observerScroll.observe(hero)
})
