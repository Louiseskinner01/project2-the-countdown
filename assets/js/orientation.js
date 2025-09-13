function checkOrientation() {
    const orientationMessage = document.getElementById("rotate-warning");
    const isMobile = window.innerWidth < 576;
    const isPortrait = window.innerHeight > window.innerWidth;
    
    if (orientationMessage) {
        if (isMobile && isPortrait) {
            orientationMessage.style.display = "flex";
            document.getElementById("console-play").style.display = "none";
        } else {
            orientationMessage.style.display = "none";
            document.getElementById("console-play").style.display = "block";
        }
    }
    }
    
    // Run on load and when orientation or size changes
    window.addEventListener('load', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);