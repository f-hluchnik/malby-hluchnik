<template>
    <div id="app" class="grid main">
      <div>
      <img alt="logo" class="logo" src="./assets/logo.png">
      <nav class="slidemenu" style="z-index=2">
          <!-- Item 1 -->
          <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
          <!-- <label for="slide-item-1"><span @click="activeTab = 'tab1'; setTab1Background();">kontakt</span></label> -->
          <label for="slide-item-1"><span @click="handleClick('first', 'tab1')">kontakt</span></label>
          
          <!-- Item 2 -->
          <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
          <!-- <label for="slide-item-2"><span @click="activeTab = 'tab2'; setTab2Background();">tapety</span></label> -->
          <label for="slide-item-2"><span @click="handleClick('second', 'tab2')">tapety</span></label>
          
          <!-- Item 3 -->
          <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
          <label for="slide-item-3"><span @click="handleClick('third', 'tab3')">dekorační techniky</span></label>
          
          <!-- Item 4 -->
          <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
          <!-- <label for="slide-item-4"><span @click="activeTab = 'tab4'; setTab4Background();">malby-nátěry</span></label> -->
          <label for="slide-item-4"><span @click="handleClick('fourth', 'tab4')">malby-nátěry</span></label>
          
          <div class="clear"></div>
          
          <!-- Bar -->
          <div class="slider">
            <div class="bar"></div>
          </div>
          
      </nav>
      <template v-if="activeTab === 'tab1'">
        <h3>kontaktní informace</h3>
        <div>mobil: 739 027 974</div>
        <div>e-mail: eda.hluchnik@seznam.cz</div>
      </template>
      <template v-else-if="activeTab === 'tab2'">
        <!-- <div class="first" :class="classIs"> -->
        <div class="content-box">
          <img src="./assets/images/background_default.jpg" alt="" class="image"> 
        </div>
      </template>
      <template v-else-if="activeTab === 'tab3'">
        <div class="content-box">
          <img src="./assets/images/background_wallpaper.jpg" alt="" class="image"> 
        </div>
      </template>
      <template v-else-if="activeTab === 'tab4'">
        <div class="content-box">
          <img src="./assets/images/background_deco.jpg" alt="" class="image"> 
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
      activeTab: 'tab1',
      classIs: 'first'
    };
  },
  methods: {
    handleClick(arg, tab) {
      this.activeTab = tab;
      this.classIs = arg;
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

body {
  margin: 0px;
}

.content-box {
  max-width: 100vw;
  max-height: 500px;
  overflow: hidden;
}

.image {
  width: 100vw;
  height: 100%;
  object-fit: cover;
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

.first {
  background: #b60505;
  background-image: url('./assets/images/background_default.jpg');
}

.second {
  background: #e3c710;
  background-image: url('./assets/images/background_wallpaper.jpg');
}

.third {
  background:#1b781b;
}

.fourth {
  background: #0d0d9f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 20%;
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
</style>
