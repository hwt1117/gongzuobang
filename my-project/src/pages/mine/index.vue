<template>
  <div>
    <div class="backg"></div>
    <div class="main">
      <div class="ziliao">
        <div class="card" @click="bianji()" >
          <div class="photo">
            
          </div>
          <div class="information" >
            <div class="in_top">
              <div class="name" ><span>{{info}}</span></div>
              <div class="bjzl" ><i-icon type="brush_fill" size=20 /><span>编辑资料</span></div>
            </div>
            <div class="in_bottom">
                <span>女生·塔里木大学</span>
            </div>
          </div>
        </div>
        <div class="my">
            <div class="item" @click="fabu()">
                <div class="left">
                    <div class="icon">
                        <img src="../../../static/images/zfj.png" style="width:28px;height:28px" alt="">
                        <span>我的发布</span>
                    </div>
                </div>
                <div class="right">
                    <div class="beizhu">
                        <span>发布的帖子都在这</span>
                        <i-icon type="enter" />
                    </div>
                </div>
            </div>
            <div class="item" @click="shoucang()">
                <div class="left">
                    <div class="icon">
                        <img src="../../../static/images/wjx.png" alt="">
                        <span>我的收藏</span>
                    </div>  
                </div>
                <div class="right">
                    <div class="beizhu">
                        <span>收藏的帖子都在这里</span>
                        <i-icon type="enter" />
                    </div>
                </div>
            </div>
            <div class="item" @click="tongzhi()">
                <div class="left">
                    <div class="icon">
                        <img src="../../../static/images/ld.png" alt="">
                        <span>消息通知</span>
                    </div>
                </div>
                <div class="right">
                    <div class="beizhu">
                        <span>职言的通知都在这里</span>
                        <i-icon type="enter" size:20/>
                    </div>
                </div>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
import card from "@/components/card";
export default {
  data(){
    return{
      ziliao:[],
      info:"向北"
    }
  },
  created(){
    this.getZiliao();
    // this.getUser()
  },
  methods: {
    bianji(){
        const url="../mine_compile/main";
        wx.navigateTo({url})
    },
    fabu(){
        const url="../mine_publish/main";
        wx.navigateTo({url})
    },
    shoucang(){
        const url="../mine_collect/main";
        wx.navigateTo({url})
    },
    tongzhi(){
        const url="../mine_inform/main";
        wx.navigateTo({url})
    },
    getZiliao(){
      fly.get("http://localhost:3000/course")
      .then(response=>{
        let ziliao = response.data
        console.log(ziliao)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    // getUser(){
    //   console.log("hdsadhs")
    // }
  },
  components: {
    card
  }
};
</script>
<style>
.backg {
  height: 80px;
  background-color: #3185ff;
}
.main {
  margin: 0 auto;
  height: 291px;
  /* background-color: rgb(255, 255, 255); */
  width: 94%;
  position: relative;
  bottom: 50px;
}
.card {
  box-shadow: 0 1px 1px 1px #e9e9e9;
  height: 100px;
  background-color: rgb(255, 255, 255);
  display: flex;
}
.my {
  box-shadow: 0px 1px 1px 1px #e9e9e9;
  height: 180px;
  /* background-color: rgb(253, 253, 253); */
  position: relative;
  top: 10px;
}
.photo {
  height: 60px;
  position: relative;
  top: 20px;
  left: 15px;
  width: 60px;
  background-color: #fff;
  border-radius: 30px;
}
.information {
  height: 60px;
  width: 250px;
  /* background-color: #3185ff; */
  position: relative;
  top: 20px;
  left: 25px;
}
.in_top {
  display: flex;
  height: 30px;
  /* background-color: rgb(185, 172, 172); */
}
.name {
  height: 30px;
  width: 150px;
  line-height: 30px;
  font-size: 14px;
  /* background-color: rgb(212, 126, 12); */
}
.bjzl {
  height: 30px;
  width: 100px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  background-color: rgb(243, 243, 243);
}
.bjzl span{
    font-size: 13px;
    color: rgb(170, 169, 169);
    
}
.in_bottom{
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    color: #666;
}
.my-f {
  height: 60px;
  width: 100%;
  display: flex;
}
.item {
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
  /* display: flex; */
}
.left{
    width: 40%;
    height: 58px;
    line-height: 58px;
    /* border: 1px solid red; */
    margin-right: 10px;
    float: left;
    
}
.icon{
    width: 90%;
    height: 50px;
    line-height: 50px;
    /* border:1px solid red; */
    margin-top: 2px;
    margin-left: 10px;
    
}
.icon img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
.icon span{
    margin-left: 5px;
    font-size: 13px;
}
.right{
    width: 55%;
    height: 58px;
    /* border: 1px solid red; */
    float: right;
}
.beizhu{
    font-size: 12px;
    float: right;
    line-height: 58px;
    margin-right: 10px;
    color: #666;
}
</style>
