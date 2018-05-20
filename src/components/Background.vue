<template>
  <div id="background">
    <div class="subpage--banner">
      <div id="hero">
        <!-- <div class="layer-bg layer"></div> -->
        <div class="layer-1 layer"></div>
        <div class="layer-2 layer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Background'
}
</script>

<style lang="stylus" scoped>
.subpage--banner
  width: 100%

  #hero
    z-index: -1
    // min-height: 712px
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    // @media screen and (max-width: 720px)
    //   min-height: 550px
  #hero
    background-color: #F7F5FA
    // width: 100vw
    // transform: translateX(-7.5%) scale(1.15)

    .layer
      // width: 100%
      position: absolute
      z-index: -1

    .layer-1
      position: absolute
      top: 120px
      left: 10px
      width: 100px
      height: 100px
      background-size: cover
      background-repeat: no-repeat
      background-image: url('../assets/BlueCircle.svg')
      background-position: center

    .layer-2
      position: absolute
      bottom: -200px
      right: -200px
      width: 500px
      height: 500px
      background-size: cover
      background-repeat: no-repeat
      background-image: url('../assets/YellowCircle.svg')
      background-position: center

    // .layer-2
    //   background-image: url('../assets/sub-dot.png')
    //   background-size: cover
    //   background-repeat: no-repeat
    //   background-position: center bottom
</style>
