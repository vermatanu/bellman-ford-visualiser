const graphs= document.querySelectorAll('.graphs');
const prev= document.querySelector('.prev');
const next= document.querySelector('.next');
const description=document.querySelector('.description');
const visualisation=document.querySelector('.visualisation');


document.getElementById('button2').addEventListener('click', () =>{
    description.style.display='none';
    visualisation.style.display='flex';

});

document.getElementById('button1').addEventListener('click', () =>{
    description.style.display='block';
    visualisation.style.display='none';
   
});


let count =0;

next.addEventListener('click', () =>{
    count++;
    if(count===graphs.length)
    {
        count=0;
    }
    slider();
});

prev.addEventListener('click', () =>{
    count--;
    if(count<0)
    {
       count=graphs.length-1; 
    }
    slider();
});

const slider = () => {
    graphs.forEach(graph => {
        graph.style.transform =`translateX(-${count*100}%)`;
    });
}