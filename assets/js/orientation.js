
    const orientationMessage = document.getElementById("rotate-warning");
    const gameContainer = document.getElementById("game-container");
    const controllerBtnsContainer = document.getElementById("controllers-area");

    function checkOrientation(){
        const isMobile = window.innerWidth < 576;
        const isPortrait = window.innerHeight > window.innerWidth;
    
        if (isMobile && isPortrait) {
            
            orientationMessage.classList.remove("hidden");
            gameContainer.classList.add("hidden");    
            controllerBtnsContainer.classList.add("hidden");    
}else 
{
            orientationMessage.classList.add("hidden");      
            gameContainer.classList.remove("hidden");   
            controllerBtnsContainer.classList.remove("hidden");    
         
          }
    
        }
 
    // Run on load and when orientation or size changes
    window.addEventListener('load', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);