
const container = document.getElementById('container');

const cloudHTML = `
    <div class="cloud">
        <div class="cloudBubble1"></div>
        <div class="cloudBubble2"></div>
    </div>
`;
container.innerHTML = cloudHTML.repeat(5);

const elements = document.getElementsByClassName("cloud");

for (let element of elements){
element.style.top = (Math.random()*100)+ '%';
element.style.left = (Math.random()*100)+ '%';
element.style.transform = "scale(" + ((Math.random() * 0.7) + 0.3) + ")";

const intervalTime = (Math.random() * 20) + 6
element.style.transition = "all linear " + intervalTime + "s"


setTimeout(() => {
  element.style.left = "100%"; // Start by moving left
}, [100]);
let x=1

    setInterval(() => {
    if(x%2 === 0)
        element.style.left = "100%";
    else
        element.style.left = "-50%";
    x+=1;
    }, intervalTime * 1000)
}

