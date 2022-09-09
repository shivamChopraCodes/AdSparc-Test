(() => {

  const styleTag = document.createElement('style')
  styleTag.type = 'text/css';
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
        background: #264653;
        height: 100%;
        width: 970px;
      }
    `
  const wrapperDiv = document.createElement('div');
  const animatedDiv = document.createElement('div');

  wrapperDiv.classList.add('ads-sf-container')
  animatedDiv.classList.add('ads-sf')

  let colors = ['#264653', '#2a9d8f', '#e9c46a', '#e76f51',]
  let activeColor = 0
  let timer = 0
  let interval;
  const createinterval = () => {

    interval = setInterval(() => {
      if (timer > 30) {
        timer = 0
        activeColor = activeColor + 1 === colors.length ? 0 : activeColor + 1
        animatedDiv.style.backgroundColor = colors[activeColor]
      }
      else timer++
    }, 1000)
  }


  const visibilityListener = () => {
    switch (document.visibilityState) {
      case "hidden":
        clearInterval(interval)
        break;
      case "visible":
        createinterval()
        break;
    }

  }
  document.head.appendChild(styleTag)
  wrapperDiv.appendChild(animatedDiv)
  document.body.appendChild(wrapperDiv)

  document.addEventListener("visibilitychange", visibilityListener);
  createinterval()

})()