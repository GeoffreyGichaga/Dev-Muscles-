$(document).ready(function () {
    
    document.getElementById('link_1').addEventListener('click', (e) => {
        e.preventDefault();
        let readMoreBtn_1 = document.querySelector('.link-btn-1');
        document.getElementById('weight_lifting').classList.toggle('show-more');
        if(readMoreBtn_1.innerText === 'Read More'){
            readMoreBtn_1.innerText = 'Read Less'
        }else{
            readMoreBtn_1.innerText = 'Read More'
        }
    });
    document.getElementById('link_2').addEventListener('click', (e) => {
        e.preventDefault();
        
        let readMoreBtn_2 = document.querySelector('.link-btn-2');
        document.getElementById('yoga').classList.toggle('show-more');
        if(readMoreBtn_2.innerText === 'Read More'){
            readMoreBtn_2.innerText = 'Read Less'
        }else{
            readMoreBtn_2.innerText = 'Read More'
        }
    });
    document.getElementById('link_3').addEventListener('click', (e) => {
        e.preventDefault();
        
        let readMoreBtn_3 = document.querySelector('.link-btn-3');
        document.getElementById('aerobics').classList.toggle('show-more');
        if(readMoreBtn_3.innerText === 'Read More'){
            readMoreBtn_3.innerText = 'Read Less'
        }else{
            readMoreBtn_3.innerText = 'Read More'
        }
    });
    document.getElementById('link_4').addEventListener('click', (e) => {
        e.preventDefault();
        let readMoreBtn_4 = document.querySelector('.link-btn-4');
        document.getElementById('boxing').classList.toggle('show-more');
        if(readMoreBtn_4.innerText === 'Read More'){
            readMoreBtn_4.innerText = 'Read Less'
        }else{
            readMoreBtn_4.innerText = 'Read More'
        }
    });
    document.getElementById('link_5').addEventListener('click', (e) => {
        e.preventDefault();
        
        let readMoreBtn_5 = document.querySelector('.link-btn-5');
        document.getElementById('legwork').classList.toggle('show-more');
        if(readMoreBtn_5.innerText === 'Read More'){
            readMoreBtn_5.innerText = 'Read Less'
        }else{
            readMoreBtn_5.innerText = 'Read More'
        }
    });
    document.getElementById('link_6').addEventListener('click', (e) => {
        e.preventDefault();
        
        let readMoreBtn_6 = document.querySelector('.link-btn-6');
        document.getElementById('biceps').classList.toggle('show-more');
        if(readMoreBtn_6.innerText === 'Read More'){
            readMoreBtn_6.innerText = 'Read Less'
        }else{
            readMoreBtn_6.innerText = 'Read More'
        }
    });




    
});