document.getElementById("year").textContent = new Date().getFullYear();

    // Loding 

    var loader = document.getElementById('preloader');

    window.addEventListener('load', function(){
      loader.style.display = 'none';
    })

    console.log(`Main js`);