<template>
    <div id="app" class="grid main">
      <div>
      <img alt="logo" class="logo" src="./assets/logo.png">
      <nav class="slidemenu" style="z-index=2">
          <!-- Item 1 -->
          <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
          <!-- <label for="slide-item-1"><span @click="activeTab = 'tab1'; setTab1Background();">kontakt</span></label> -->
          <label for="slide-item-1"><span @click="handleClick('tab1')">kontakt</span></label>
          
          <!-- Item 2 -->
          <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
          <!-- <label for="slide-item-2"><span @click="activeTab = 'tab2'; setTab2Background();">tapety</span></label> -->
          <label for="slide-item-2"><span @click="handleClick('tab2')">malby-nátěry</span></label>
          
          <!-- Item 3 -->
          <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
          <label for="slide-item-3"><span @click="handleClick('tab3')">tapetya</span></label>
          
          <!-- Item 4 -->
          <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
          <!-- <label for="slide-item-4"><span @click="activeTab = 'tab4'; setTab4Background();">malby-nátěry</span></label> -->
          <label for="slide-item-4"><span @click="handleClick('tab4')">dekorační techniky</span></label>
          
          <div class="clear"></div>
          
          <!-- Bar -->
          <div class="slider">
            <div class="bar"></div>
          </div>
          
      </nav>
      <template v-if="activeTab === 'tab1'">
        <div class="content-box grid grid-content">
          <div class="tab1bg background blurred"></div>
          <div class="content">
            <div>
              Provádíme veškeré malířské a&nbsp;natěračské práce se specializací na tapety a&nbsp;dekorační techniky.<br><br>
            </div>
            <div>kontaktní informace</div>
            <div>mobil: 739 027 974</div>
            <div>e-mail: eda.hluchnik@seznam.cz</div>
          </div>
        </div>
      </template>
      <template v-else-if="activeTab === 'tab2'">
        <div class="content-box grid grid-content">
          <div class="tab2bg background"></div>
        </div>
      </template>
      <template v-else-if="activeTab === 'tab3'">
        <div class="content-box grid grid-content">
            <div class="tab3bg background blurred"></div>
            <div class="content picture-content width">
              <img src="./assets/images/background_wallpaper.jpg" alt="decorated wall" class="width-picture">
            </div>
        </div>
      </template>
      <template v-else-if="activeTab === 'tab4'">
        <div class="content-box grid grid-content">
            <div class="tab4bg background blurred"></div>
            <div class="content picture-content height">
              <img src="./assets/images/background_deco.jpg" alt="decorated wall" class="height-picture">
            </div>
        </div>
      </template>
    </div>
    <div class="footer">
      &copy; František Hluchník, 2023 (frantahluchnik@gmail.com)
    </div>
  </div>
</template>

<script>
export default {
  name: 'MalbyHluchnik',
  data() {
    return {
      activeTab: 'tab1'
    };
  },
  methods: {
    handleClick(tab) {
      this.activeTab = tab;
    },
  }
}
</script>

<style>

.grid {
  display: grid;
}

.main {
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 85px;
  overflow: hidden;
}

.grid-content {
  max-width: 100vw;
  max-height: 500px;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 100vh;
}

body {
  margin: 0px;
}

.content-box {
  max-width: 100vw;
  max-height: 500px;
  overflow: hidden;
}

.tab1bg {
  background-image: url("./assets/images/background_default.jpg");
}

.tab2bg {
  background-image: url("./assets/images/background_default.jpg");
}

.tab3bg {
  background-image: url("./assets/images/background_wallpaper.jpg");
}

.tab4bg {
  background-image: url("./assets/images/background_deco.jpg");
}

.background {
  grid-row: 0;
  width: 100vw;
  padding-top: 60%;
  background-size: cover;
}

.blurred {
  filter: blur(4px);
  -webkit-filter: blur(4px);
}

.content {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  margin: auto;
  margin-top: 0%;
  grid-row: 2;
  grid-column: 1/-1;
  z-index: 2;
  max-width: 100vw;
  width: 60%;
  padding: 20px;
  text-align: center;
}

.picture-content {
  width: 50%;
  padding: 0%;
  max-height: 400px;
  overflow: hidden;
}

.width {
  width: 40%;
}

.height {
  width: 30%;
}

.height-picture {
  max-width: 100%;
}

.width-picture {
  max-width: 100%;
}

.footer {
  grid-row: -2;
  grid-column: 1/-1;
  background-color: #333;
  color: #fcba12;
  font-size: 13px;
  padding: 15px;
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 30%;
  min-width: 20%;
  max-width: 100%;
  height: auto;
}

.clear{
  clear: both;
}

.slide-toggle{
  display: none;
}

.slidemenu{
  font-family: arial, sans-serif;
  max-width: 700px;
  margin: 10px auto;
  overflow: hidden;
}

.slidemenu label{
  width: 25%;
  text-align: center;
  display: block;
  float: left;
  color: #333;
  opacity: 0.2;

}

.slidemenu label:hover{
  cursor: pointer;
  color: #666;
}

.slidemenu label span{
  display: block;
  padding: 10px;    
}

.slidemenu label .icon{
  font-size: 20px;
  border: solid 2px #333;
  text-align: center;
  height: 50px;
  width: 50px;
  display: block;
  margin: 0 auto;
  line-height: 50px;
  border-radius: 50%;
}

/*Bar Style*/

.slider{
  width: 100%;
  height: 5px;
  display: block;
  background: #ccc;
  margin-top: 10px;
  border-radius: 5px;
}

.slider .bar{
  width: 25%;
  height: 5px;
  background: #b60505;
  border-radius: 5px;
}

/*Animations*/
.slidemenu label, .slider .bar {
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
}

/*Toggle*/

.slidemenu .slide-toggle:checked + label{
  opacity: 1;
}

.slidemenu #slide-item-1:checked ~ .slider .bar{ margin-left: 0%; background: #b60505;}
.slidemenu #slide-item-2:checked ~ .slider .bar{ margin-left: 25%; background: #e3c710;}
.slidemenu #slide-item-3:checked ~ .slider .bar{ margin-left: 50%; background: #1b781b;}
.slidemenu #slide-item-4:checked ~ .slider .bar{ margin-left: 75%; background: #0d0d9f;}


@media only screen and (max-width: 768px) {
  .picture-content {
    width: 80%;
  }

  .logo {
    width: 70%;
    min-width: 70%;
    max-width: 100%;
    height: auto;
  }

  .slidemenu {
    margin-top: -30px;
  }

  .grid-content {
    grid-template-rows: 10px 100vh;
  }

  [class*="tab"] {
    height: 100vh;
  }

  .content {
    margin-top: 10%;
  }

  .picture-content {
    width: 80%;
    padding: 0%;
  }
  
  .height-picture {
    max-width: 100%;
  }

  .width-picture {
    width: 100%;
  }
}
</style>
