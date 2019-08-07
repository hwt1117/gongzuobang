// 点击发布跳转后的页面 房源
<template>
  <div>
    <div class="head">
      {{info}}
       <div class="btnwrap">
        <div class="box1" @click="jumproomRsc1">
          <span>房源</span>
        </div>
        <div class="box2" @click="jumproomRsc2">
          <span>求租</span>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li class="item1">
          <span style="padding-left:10px;">类型</span>
          <div class="item11">合租</div>
          <div class="item12">整租</div>
        </li>
        <li class="item2">
          <span style="padding-left:10px;">户型</span>
          <div class="item21">一室</div>
          <div class="item22">二室</div>
          <div class="item23">三室</div>
          <div class="item24">四室+</div>
        </li>
        <li class="item">
          <div name id="xuanze">
            <i-input value="{{}}" title="城市" autofocus placeholder="选择房源所在城市" />
            <i-icon style="float:right;padding-right:10px" type="enter" />
          </div>
        </li>
        <li class="item">
          <div name id="xuanze">
            <i-input value="{{}}" title="区域" autofocus placeholder="选择房源所在区域" />
            <i-icon style="float:right;padding-right:10px" type="enter" />
          </div>
        </li>
        <li class="item">
          <div name id="xuanze">
            <i-input value="{{}}" title="位置" autofocus placeholder="选择房源位置(点击开启地图)" /> 
            <i-icon style="float:right;padding-right:10px" type="enter" />
          </div>
        </li>
        <li class="item">
          <div name id="xuanze">
             <i-input value="{{}}" title="租金" autofocus placeholder="请输入学校名称" />
            <span style="float:right;padding-right:10px">元/月</span>
          </div>
        </li>
        <li class="item">
          <div name id="xuanze">
            <i-input value="{{}}" title="联系方式" autofocus placeholder="请输入联系方式" />    
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <view>{{message}}</view>
    </div>
  </div>
</template>
<script>
// function show(){
// document.getElementById("div1").style.display="none";
// }
export default {
  data() {
    return {
      info:"请填写你的房源信息",
      message: "下一步",
      value: ""
    };
  },
  methods: {
    jumproomRsc1() {
      let url = "../release/main";
      wx.navigateTo({ url });
    },
    jumproomRsc2() {
      let url = "../requestroom/main";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
  /* border: 1px solid black; */
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
  top: -50px;
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
  border: 1px solid #4b4b4d;
  color: #4b4b4d;
}
.content {
  width: 100%;
  height: 300px;
  /* border: 1px solid black; */
}
.item1,
.item2 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
  display: flex;
}
.item11,
.item12 {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 13px;
  margin: auto 0;
  text-align: center;
}
.item11 {
  margin-left: 40px;
}
.item12 {
  margin-left: 10px;
}
.item11:hover,
.item12:hover {
  border: 1px solid #3158ff;
  color: #3158ff;
}
.item21,
.item22,
.item23,
.item24 {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 12px;
  margin: auto 0;
  text-align: center;
}
.item21 {
  margin-left: 40px;
}
.item22,
.item23,
.item24 {
  margin-left: 10px;
}
.item21:hover,
.item22:hover,
.item23:hover,
.item24:hover {
  border: 1px solid #3158ff;
  color: #3158ff;
}
.item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
}
#xuanze {
  display: inline;
  font-size: 14px;
}
.footer {
  width: 95%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #3158ff;
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>
