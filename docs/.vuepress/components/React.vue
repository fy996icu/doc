<template>
  <div class="react-wrap">
    <div class="logo-show">
      <img src="/images/logo/react.svg" alt="React">
    </div>
    <h1>React</h1>
    <h3>用于构建用户界面的 JavaScript 库</h3>
    <div class="action-btn">
      <RouterLink to="/document/react/react基础.html">立即学习 →</RouterLink>
      <a class="website" href="https://react.docschina.org/" target="_blank" rel="noopener noreferrer">官方文档</a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.react-wrap{
  padding-top: 2rem;
  .logo-show{
    text-align: center;
    img{
      width: 220px;
      margin: 0 auto;
      animation: rotate 6s linear infinite;
    }
  }
  .title{
    color: #61dafb;
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;
    margin-top: 1.3rem;
  }
  .small-title{
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
  }
  .action{
    text-align: center;
    margin-top: 1rem;
  }
}
@keyframes rotate{from{transform: rotate(0deg)}
to{transform: rotate(360deg)}
}

h1{
  text-align: center;
  font-size: 3.6rem;
}
h3{
  text-align: center;
}

.action-btn{
  text-align: center;
  margin-top: 2rem;
}

a{
  color: #2c3e50;
  padding: 0 24px;
  line-height: 52px;
  font-size: 1.2rem;
  font-weight: 500;
  display: inline-block;
  border-radius: 6px;
  margin: 0 10px;
  border: 2px solid #5bd3fb;
  border-color: #5bd3fb;
  background-color: #5bd3fb;
  text-decoration: none !important;
  transition: all 0.3s;
}
a:hover{
  background-color: #5bd3fb;
}
.website{
  color:var(--c-text-white);
  background-color: transparent;
}
.website:hover{
  color: #2c3e50;
}
</style>