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

const options = {
    threshold: 0,
  };

let getTime;
const timer = {
    start : function(e){
        getTime = setInterval(getCurrentTime,1000);
    },
    stop : function(e){
        clearInterval(getTime);
    }
}

const handleObserver = (entries,observer) =>{
entries.forEach((entry) => {
    if(entry.isIntersecting){
       timer.start();
    }
    else{
        timer.stop();
    }
});
}

const observerScroll = new IntersectionObserver(handleObserver,options);
blockHero.forEach((hero)=>{
    observerScroll.observe(hero)
});