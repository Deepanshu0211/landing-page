import './style.scss'
import Blue from './img/blue.png'
import rain_cloud from './img/rain_cloud1.png'
import snow from './img/snow.png'
import snow_cloud from './img/snow_cloud.png'
import rainbow from './img/rainbow.png'
import rainbow_cloud from './img/rainbow_cloud.png'
import text from './img/title.png'
import dot from './img/dot.png'
import menu from './img/nav.png'
import hover from './img/hover.png'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
      <div class="icon">
        <img src="${menu}" class="menu" alt="dot" />
      </div>
      <div class="hover">
      <img src="${hover}" class="hover" alt="dot" />
      </div>

      <div class="rain-cloud"> 
        
            <img src="${rain_cloud}" class="logo" alt="rain_cloud" />
            <img src="${Blue}" class="logo1" alt="rain_cloud" />
       
      </div>
      <div class="rainbow-cloud"> 
       
            <img src="${rainbow_cloud}" class="logo1" alt="rainbow_cloud" />
            <img src="${rainbow}" class="logo" alt="rainbow_cloud" />
       
      </div>
      <div class="snow-cloud"> 
       
            <img src="${snow_cloud}" class="logo1" alt="snow_cloud" />
            <img src="${snow}" class="logo" alt="snow_cloud" />
       
      </div>


      <div class="text" id="content"></div>
     
        <img src="${text}" class="title" alt="rainbow_cloud" />
        <img src="${dot}" class="dot" alt="dot" />
      </div>  

      <div class="write" id="lot">
      Welcome to the enchanting world of Cup<br> Land, where the magic of friendship and<br> whimsy comes alive through the<br> adventures of the Cup Friends.
      </div>

      
  </div>


`

