let allBtns = document.querySelectorAll('.btn button');
let allimgs = document.querySelectorAll('.imgs .img');


allBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{

        allBtns.forEach((btn)=>{
            btn.classList.remove('active');
        });

        e.target.classList.add('active');

        allimgs.forEach((img)=>{
           
            img.style.display = 'none';
             
        });

        document.querySelectorAll(`.${e.target.dataset.img}`).forEach((img)=>{
            img.style.display = 'block';
        });
            
        });
});

allimgs.forEach((img)=>{

    img.addEventListener('click' , (e)=>{
        
        e.target.parentElement.classList.add('currnet');

        let overlay = document.createElement('div');
        overlay.className = 'over-lay';

        let closeBtn =   document.createElement('i');
        closeBtn.className = 'close fa-solid fa-xmark';
        overlay.appendChild(closeBtn);

        let prevBtn =   document.createElement('i');
        prevBtn.className = 'prev fa-solid fa-arrow-left';
        overlay.appendChild(prevBtn);

        let nextBtn =   document.createElement('i');
        nextBtn.className = 'next fa-solid fa-arrow-right';
        overlay.appendChild(nextBtn);

        let imgCard = document.createElement('div');
        imgCard.className = 'img-card';

        let img = document.createElement('img');
        img.src = e.target.src;

        imgCard.appendChild(img)

        overlay.appendChild(imgCard)

        document.body.appendChild(overlay)

        closeBtn.addEventListener('click', function(){
            closeBtn.parentElement.remove();
           
        });

        prevBtn.addEventListener('click' , ()=>{
            let prevCard = document.querySelector('.currnet').previousElementSibling;

            allimgs.forEach((img)=>{
                img.classList.remove('currnet');
            });        
            
            if(prevCard){
                 prevCard.classList.add('currnet');
                 let currnetImg = document.querySelector('.img-card img'); 
                 let nextImg = document.querySelector('.currnet img');
                 currnetImg.src = nextImg.src;
            }else{
                e.target.parentElement.classList.add('currnet');
                return false;
            };
        });

        nextBtn.addEventListener('click' , ()=>{

            let nextCard = document.querySelector('.currnet').nextElementSibling;

            allimgs.forEach((img)=>{
                img.classList.remove('currnet');
            });        
            
            if(nextCard){
                nextCard.classList.add('currnet');
                let currnetImg = document.querySelector('.img-card img'); 
                let nextImg = document.querySelector('.currnet img');
                currnetImg.src = nextImg.src;
            }else{
                e.target.parentElement.classList.add('currnet');
                return false;
            };
        });
       
    });
});

