


// FUNÇÃO PARA CARREGAR O CONTEUDO DO BOTÃO CLICADO
const loadButtonContent = (thisButton) =>{
    const titleButton = thisButton.querySelector('h5').innerText
    const boxMessage = document.querySelector('.box-message-empty')

    if(titleButton ==  'Vidro'){
        boxMessage.style.backgroundColor = 'red'
    }else  if(titleButton == 'Papéis'){
        boxMessage.style.backgroundColor = 'blue'
    }
    
}



// FUNÇÃO PARA ALTERAR O ESTADO DOS BOTÕES DO SLICK SLIDER 

const changeStatusButton = (event) => {
    const parentSlider = event.parentElement
    const buttonsSlider = parentSlider.querySelectorAll('button')
    
    for (i = 0; i < buttonsSlider.length ; i++){
        if(buttonsSlider[i] === event){
            event.classList.add('enable')
        }
        else{
            buttonsSlider[i].classList.remove('enable')
        }
    }
    
    loadButtonContent(event)
}

// FUNÇÃO PARA MOVER O SLIDER DE ITENS DOADOS
var currentIndex = 5

const moveSlider = (event) => {
    const slider = document.querySelector('.slick-slider')    
    const buttonsSlider = slider.children
    const buttonWidth = buttonsSlider[0].offsetWidth 
    
    const fontSizeRoot = parseFloat(window.getComputedStyle(document.documentElement).fontSize); // Pega o font-size em pixels do root (html)
    const gap = 0.9 * fontSizeRoot; // Calcula 0.93rem em pixels

    if(event.classList.contains('next')){
        currentIndex++

        if(currentIndex == buttonsSlider.length){
            event.style.display = 'none'
        }

        // slider.scrollLeft = slider.scrollLeft + buttonWidth + gap;

        slider.scrollTo({
            left: slider.scrollLeft +  (buttonWidth + gap),
            behavior: "smooth"
        });
        
        if(currentIndex > 5){
            const controlerBack = document.querySelector('.back')
            controlerBack.style.display = 'block'
        }
       
    }else{
        currentIndex--

        if (currentIndex < buttonsSlider.length){
             let next = document.querySelector('.next')
            next.style.display = 'block'
        }
        if(currentIndex == 5){
            event.style.display = 'none'
        }

        slider.scrollTo({
            left: slider.scrollLeft -  (buttonWidth + gap),
            behavior: "smooth"
        });
    }
    



}