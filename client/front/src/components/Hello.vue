<template>
  <div class="hello">
    <div class="main">
        <h1>Cai's</h1>
        <h2>这个人拒绝接受一辈子平庸这个可能性，因此常常显得焦躁</h2>
        <ul>
            <li><router-link to="/Blog">博客</router-link></li>
            <li><a href="https://www.zhihu.com/people/jie-dong-xi-de-xiao-ai-ren">知乎</a></li>
        </ul>
    </div>
    <canvas></canvas>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){
      document.addEventListener('touchmove', function (e) {
          e.preventDefault()
      })
      var c = document.getElementsByTagName('canvas')[0],
          x = c.getContext('2d'),
          pr = window.devicePixelRatio || 1,
          w = window.innerWidth,
          h = window.innerHeight,
          f = 90,
          q,
          m = Math,
          r = 0,
          u = m.PI*2,
          v = m.cos,
          z = m.random
      c.width = w*pr
      c.height = h*pr
      x.scale(pr, pr)
      x.globalAlpha = 0.6
      function i(){
          x.clearRect(0,0,w,h)
          q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]
          while(q[1].x<w+f) d(q[0], q[1])
      }
      function d(i,j){   
          x.beginPath()
          x.moveTo(i.x, i.y)
          x.lineTo(j.x, j.y)
          var k = j.x + (z()*2-0.25)*f,
              n = y(j.y)
          x.lineTo(k, n)
          x.closePath()
          r-=u/-50
          x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
          x.fill()
          q[0] = q[1]
          q[1] = {x:k,y:n}
      }
      function y(p){
          var t = p + (z()*2-1.1)*f
          return (t>h||t<0) ? y(p) : t
      }
      document.onclick = i
      document.ontouchstart = i
      i()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello
    .main
        position absolute
        width 300px
        top 50%
        left 50%
        margin-top -150px
        margin-left -150px
        h2
            font-size 15px
            color #999
        ul
            padding 0
        li
            margin 8px 0px
            list-style none
            a
                padding 5px 10px
                font-size 14px
canvas
    position absolute
    top 0
    left 0
    z-index 0
    width 100%
    height 100%
    pointer-events none
    //使用pointer-events来阻止元素成为鼠标事件目标
</style>
