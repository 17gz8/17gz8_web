<template>
  <div class="navbar">
    <el-row>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="logo-warp">
          <Logo />
        </div>
      </el-col>
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="list-warp">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            :mode="mode"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
          >
            <el-menu-item index="Index">
              <nuxt-link to="/">
                首 页
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="Task">
              <nuxt-link to="/task">
                耕种实验
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="Garden">
              <nuxt-link to="/garden">
                菜 园
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="Expert">
              <nuxt-link to="/expert">
                专家介绍
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="Personal">
              <nuxt-link to="/personal">
                我 的
              </nuxt-link>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
    <div class="list-phone">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="icon-warp">
          <i class="el-icon-menu" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <nuxt-link to="/">
              首 页
            </nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <nuxt-link to="/task">
              耕种实验
            </nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <nuxt-link to="/garden">
              菜 园
            </nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <nuxt-link to="/expert">
              专家介绍
            </nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <nuxt-link to="/personal">
              我 的
            </nuxt-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 'Index',
      mode: 'horizontal'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleCommand (command) {
      // console.log('command', command)
    }
  }
}
</script>

<style scope>

.navbar {
  /* width:70%;
  margin: 0 auto; */
  /* background: darkgreen; */
  height: 60px;
  position: relative;
}
a {
  padding: 15px 30px;
  font-size: 18px;
  line-height: 50px;
  text-decoration-line: none;
  /* color: white; */
}

.list-warp{
  display: block;
}
.list-phone{
  display: none;
}
/* 媒体查询 */
/* @media screen and (max-width: 1400px) {
  .el-menu-item{
    padding: 0 15px;
  }
  a{
    background-color: lightsalmon;
    padding: 15px 10px;
  }
} */
@media screen and (max-width: 1200px) {

  .el-menu-item{
    padding: 0 5px;
  }
  a{
    /* background-color:lightskyblue; */
    padding: 15px 22px;
  }
}
@media screen and (max-width: 810px) {
  .el-menu-item{
    padding: 0 5px;
  }
  a{
    /* background-color:lightseagreen; */
    padding: 15px 10px;
  }
}
@media screen and (max-width: 700px) {
  /* logo */
  .logo-warp{
    display: block;
    height:90px;
    background-color:#545c64 ;
  }
  .el-col-xs-8{
    display: block;
    width:100%;
  }
  /* list */
  .list-warp{
    display: none;
  }
  .list-phone{

    display: block;
    position:absolute;
    left:5%;
    top:95%;
  }
  .list-phone .icon-warp{
    padding: 0px 2px;
    background-color:white;
    border: 1px solid lightgray;
  }

  .el-menu-item{
    padding:0px;
  }
  a{
    padding: 15px 0px;
    font-size: 16px;
    color: black;
  }
}
</style>
