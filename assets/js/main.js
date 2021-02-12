const inputFile = document.getElementById("inputFile");
const memeImage = document.querySelector("meme__image");
const memes = document.querySelector(".memes");
const downloadBtn = document.getElementById("downloads");
const save = document.getElementById("refresh");
// const memeWrapper = document.querySelector(".meme__wrapper");
const headerMenu = document.querySelector(".header__menu");
const sideMenu = document.getElementById("sideMenu");
const MenuIcon = document.querySelector(".menuBar__icon");
const closeIcon = document.querySelector(".close-btn");


function sticky(){
    headerMenu.classList.toggle("sticky-header", scrollY > 42);
}

// sidemenu 
MenuIcon.onclick = () => {
    sideMenu.classList.toggle("openMenu");
}

closeIcon.onclick = () => {
    sideMenu.classList.toggle("openMenu");
}


window.addEventListener("scroll", sticky);
// Load meme image
var check = false;

inputFile.onchange = (e) => {
    var target = e.target;
    var files = target.files;
    if(FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = () => {
            memes.innerHTML = `<img src=${fr.result} class="meme__image" alt="">`
            
        }
        fr.readAsDataURL(files[0]);
        check = true;
    }
}

// build canvas
var element = $('.meme__wrapper')
var getCanvas;
downloadBtn.onclick = (e) => {

    e.preventDefault();
    // build
    if(check==true){
        html2canvas(element, {
            onrendered: function(canvas) {
                getCanvas = canvas;
                
                downloadCanvas(getCanvas);
            }
        })
        // domtoimage.toBlob(document.querySelector('.meme__wrapper'))
        // .then(function(blob) {
        //   window.saveAs(blob, 'my-img.png');
        // });
       

        
    } else {
        alert("Please upload your meme image first")
    }
}


// download canvas
const downloadCanvas = (getCanvas) => {
    console.log(getCanvas)
    getCanvas.toBlob(function (blob) {
        saveAs(blob, "my-IMG.png");
    });
   

}




// meme slider
$('.slider__wrapper').slick({
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
    responsive: [
        {
          breakpoint: 1321,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true

          }
        },
        {
          breakpoint: 737,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        }
      
      ]
   
    
  });
  