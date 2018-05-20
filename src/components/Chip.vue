<template>
  <div role="chip" :class="{ active: isActive }">
    <img :src="logourl">
    <div role="seal"></div>
  </div>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    displayName: {
      type: String,
      default: ''
    },
    logoUri: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    logourl () {
      // return window.devicePixelRatio && window.devicePixelRatio > 1 ? this.logoUri.replace(/.png$/, '@2x.png') : this.logoUri
      return this.logoUri
    }
  }
}
</script>

<style lang="stylus" spcoed>
  [role="chip"]
    @media screen and (max-width: 454px) // must bigger than 454px for two column
      width: 80vw
      height: 53.33vw
      margin: 1em auto
    display: block
    background: #fff
    border: 2px solid #fff
    border-radius: 5px
    padding: 10px
    width: 195px
    height: 130px
    margin: .5em auto
    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.17);
    position: relative
    // background-image: url('../assets/DefaultCard.svg')
    // background-repeat: no-repeat
    // background-size: 120% 120%
    // background-position: center
    @media screen and (max-width: 454px)
      padding: 50px
    [role="seal"]
      display: none
    &.active
      // border: 2px dashed rgba(0, 0, 0, 0.2)
      background-color: rgba(0,0,0,0)
      border: initial
      background-image: url('../assets/CompleteCard.svg')
      background-repeat: no-repeat
      background-size: contain
      background-position: center
      box-shadow: none
      [role="seal"]
        display: block
        position: absolute
        bottom: -20px
        right: -15px
        background-image: url('../assets/COMPLETED.svg')
        background-repeat: no-repeat
        background-size: contain
        background-position: center
        width: 80px
        height: 80px
        // @media screen and (max-width: 454px)
        //   top: -53.33vw
        //   left: 60vw
        //   width: 90px
        //   height: 90px
    &:before
      display: inline-block
      content: ''
      width: 0
      height: 100%
      vertical-align: middle
    img
      display: inline-block
      max-width: 100%
      max-height: 100%
      vertical-align: middle

</style>
