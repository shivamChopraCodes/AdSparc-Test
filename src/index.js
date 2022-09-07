(()=>{

    const styleTag = document.createElement('style')
    styleTag.type='text/css';
    styleTag.textContent = `
    .ads-sf-container {
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
      }
      
      .ads-sf-container > .ads-sf {
        animation: animateBackground linear  180s infinite;
        background: #264653;
        height: 100%;
        width: 970px;
      }
      
      @keyframes animateBackground {
        0% {
          background: #264653;
        }
      
        25% {
          background: #2a9d8f;
        }
      
        50% {
          background: #e9c46a;
        }
      
        75% {
          background: #e76f51;
        }
      
        100% {
          background: #264653;
        }
      }      
    `
    const wrapperDiv = document.createElement('div');
    const animatedDiv = document.createElement('div');

    wrapperDiv.classList.add('ads-sf-container')
    animatedDiv.classList.add('ads-sf')



    const visibilityListener = () => {
        switch(document.visibilityState) {
            case "hidden":
                console.log('paused')
                animatedDiv.style.animationPlayState = 'paused'
              break;
            case "visible":
                console.log('resumed')

                animatedDiv.style.animationPlayState = 'running'

              break;
          }
        
    }
    document.head.appendChild(styleTag)
    wrapperDiv.appendChild(animatedDiv)
    document.body.appendChild(wrapperDiv)

    document.addEventListener("visibilitychange", visibilityListener);

})()