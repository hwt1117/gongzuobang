//租房 主页面
<template>
  <div>
    <div class="background">
      <img src="../../../static/images/jianyue.png" style="width:100%;  height:150px;" alt />
      <div class="search">
        <div class="local"></div>
        <div class="query"></div>
      </div>
    </div>
    <div class="headtop">
      <div class="btnwrap">
        <div class="box1" @click="jumproomRsc2()">
          <span>房源</span>
        </div>
        <div class="box2" @click="jumproomRsc3()">
          <span style="padding-right:8px;">求租</span>
        </div>
      </div>
    </div>
    <div class="context" >
      <div class="inner">
        <div class="selfinfo">
          <div class="headimg">
            <img src="../../../static/images/user.png" alt style="width:60px;height:60px;" />
          </div>
          <div class="username">
            <p>name</p>
            <p>local</p>
          </div>
          <div class="time">
            <p>发布时间</p>
          </div>
        </div>
        <div class="roomdetail">
          <div class="roomphoto">
            <img src="../../../static/images/jianyue.png" alt style="width:120px;height:110px;" />
          </div>
          <div class="roominfo">
            <p class="infoone"><view>{{messageone}}</view></p>
            <p class="infotwo"><view>{{messagetwo}}</view></p>
            <p class="infothree"><view>{{messagethree}}</view></p>
            <p class="infofour"><view>{{messagefour}}</view></p>
          </div>
        </div>
      </div>
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
    <div class="content">
      <div class="footer" @click="jumproomRsc()">
        <span>发布</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   
  data() {
    return {
        messageone : "东升科技园附近",
        messagetwo : "合租:一室",
        messagethree : "#百度 #转转 #腾讯",
        messagefour : "位置定位"
  
    };
  },
 
  methods: {
    jumproomRsc() {
      let url = "../release/main";
      wx.navigateTo({ url });
    },
    jumproomRsc2() {
      let url = "../community/main";
      wx.navigateTo({ url });
    },
    jumproomRsc3() {
      let url = "../requestdetail/main";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 150px;
  /* border: 1px solid red; */
}
.headtop {
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
  margin: auto 0;
  
}
.btnwrap {
  width: 82px;
  height: 34px;
  /* border: 1px solid black; */
  border-radius: 15px;
  background-color: #d6d6da;
  margin-top: 3px;
  position: relative;
  left: 270px;
  top: 11px;
}
.box1,
.box2 {
  width: 45px;
  height: 32px;
  line-height: 32px;
  /* border: 1px solid rgb(83, 79, 79); */
  font-size: 12px;
  color: #9a9aa0;
  border-radius: 15px;
  /* background-color: #c5c5c7; */
}
.box1 {
  text-align: left;
  padding-left:10px;
}
.box2 {
  text-align: right;
  position: relative;
  left: 35px;
  top: -33px;
}
.box1:hover,
.box2:hover {
  text-align: center;
  background-color: white;
  border: 1px solid #dedee2;
  color: #4b4b4d;
}
.context {
  width: 100%;
  border-top: 1px solid rgb(202, 198, 198);
}
.inner {
  width: 92%;
  height: 210px;
  /* border: 1px solid black; */
  margin: auto;
  border-top: 1px solid rgb(202, 198, 198);
  /* border-bottom: 1px solid rgb(202, 198, 198); */
}
.selfinfo {
  width: 100%;
  height: 70px;
  margin: auto;
  /* border: 1px solid darkblue; */
  display: flex;
}
.headimg {
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  margin: auto;
  margin-right: 10px;
  border-radius: 25px;
}
.username {
  width: 200px;
  height: 60px;
  line-height: 23px;
  /* border: 1px solid black; */
  margin: auto;
  padding-top: 8px;
  /* margin-right: 20px; */
}
.time {
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  font-size: 13px;
  text-align: right;
  margin: auto;
  padding-top: 10px;
}
.roomdetail {
  width: 100%;
  height: 120px;
  margin: auto;
  /* border: 1px solid black; */
  display: flex;
}
.roomphoto {
  width: 120px;
  height: 110px;
  border: 1px solid rgb(238, 232, 232);
  margin-right: 12px;
}
.roominfo {
  width: 200px;
  height: 110px;
  line-height: 27px;
  /* border: 1px solid black; */
  padding-top: 6px;
}
.infoone{
  font-weight: bold;
  font-size: 16px;
}
.infotwo{
  font-size: 14px;
  color: #d6d6da;
}
.infothree{
  color: rgb(243, 163, 14);
  font-size: 13px;
}
.infofour{
  font-size: 14px;
  color: #bababd;
}
.footer {
  position: fixed;
  left: 70%;
  bottom: 6%;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: #3185ff;
  /* border: 1px solid red; */
}
</style>


