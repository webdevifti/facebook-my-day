const text = document.getElementById('text');
const previewText = document.getElementById('previewText');
const mobileView = document.querySelector('.mobile-view');
const activeImg = document.querySelector('.img');

text.addEventListener('keyup', () => {
    previewText.innerHTML = text.value;
})

function fontStyle(value){
    if(value === 'Ubuntu'){
        previewText.style.fontFamily = value;
        previewText.style.textTransform = "uppercase";
    }else if(value === 'Open Sans'){
        previewText.style.fontFamily = value;
        previewText.style.textTransform = "lowercase";
        previewText.style.fontWeight = "800";
        
    }else{
        previewText.style.fontFamily = value;
        previewText.style.textTransform = "lowercase";
    }
   
}

function changeBg(element){
   
    
    let bg = element.style.backgroundImage;
    mobileView.style.backgroundImage = bg;
    if(bg == element){
        element.classList.add('active');
    }else{
        element.classList.remove('active');
    }
}