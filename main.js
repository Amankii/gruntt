document.addEventListener('DOMContentLoaded', ()=> {



    document.querySelector('button').onclick = ()=> {

        const pp = document.querySelector('.ppp');
        pp.style.display = 'block';

        if (pp.style.display === 'block') {
            document.querySelector('i').onclick = ()=> {
                pp.style.display = 'none';
                audio.pause();
            };
        };

        const audio = new Audio("./Images/audio1.mp3");
        audio.play();

    };

});