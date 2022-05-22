<template>
  <div class="logo-wrap">
    <hr>
    <div class="logo-show">
      <div class="logo-li">
        <img src="https://cn.vuejs.org/images/logo.svg" alt="Vue">
        <div class="title">Vue</div>
      </div>
      <div class="logo-li">
        <img src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="React">
        <div class="title">React</div>
      </div>
      <div class="logo-li">
        <img src="https://blog.linkbal.co.jp/wp/wp-content/uploads/2017/06/Python-logo-notext.svg-768x768.png" alt="Python">
        <div class="title">Python</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "点击按钮"
    };
  },
  methods: {
    change() {
      console.log(111);
    }
  }
};
</script>

<style lang="scss">
@import '../styles/palette.scss';
  .logo-show{
    padding: 50px 0 30px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .logo-li{
      img{
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
        display: block;
      }
      .title{
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin-top: 20px;
      }
    }
  }


.logo-wrap{
  @media (max-width: $MQMobile) {
    .logo-li{
      width: 100%;
      margin: 30px 0;
      .title{
        margin-top: 12px;
      }
    }
  }
  
  @media (max-width: $MQMobileNarrow) {
    
  }
}
</style>