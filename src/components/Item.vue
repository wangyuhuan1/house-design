<template>
  <div class="item">
    <div class="imagee">
      <img class="top" src="https://i.loli.net/2020/04/27/F8WwLg2Zslhx76p.png" alt />
      <van-form @submit="onSubmit">
        <van-field v-model="name" name="name" label="姓名 :" placeholder="报名0元领全屋装修方案" />
        <van-field v-model="phone" name="phone" label="电话 :" placeholder="装修即送全屋精品保洁1份" />
        <van-field v-model="address" name="address" label="地址 :" placeholder="您的隐私将被严格保密" />
        <div style="margin: 16px;">
          <van-button round block type="default" native-type="submit"></van-button>
          <img class="full" src="https://i.loli.net/2020/04/27/uWotpasESwxAcfK.png" alt />
        </div>
      </van-form>
    </div>
    <div class="bannty">
      <div class="dapei">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) of images" :key="item.id">
            <img :src="item.src" @click="preview(index)" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="butto">
        <a href="#form">
          <img src="https://i.loli.net/2020/04/27/fQ7TwrhNPyBdxCJ.png" alt />
        </a>
      </div>
      <div class="buttos">
        <img src="https://i.loli.net/2020/04/27/uWotpasESwxAcfK.png" alt />
      </div>
    </div>
    <div class="cloud">
      <img src="https://i.loli.net/2020/04/27/MZUSAr1Kqju6zQ7.png" alt />
    </div>
    <div class="Satisfied">
      <img src="https://i.loli.net/2020/04/27/tzvUMTdyGrumnH3.png" alt />
      <van-form @submit="onSubmit">
        <a name="form"></a>
        <van-field v-model="name" name="name" label="姓名 :" placeholder="报名0元领全屋装修方案" />
        <van-field v-model="phone" name="phone" label="电话 :" placeholder="装修即送全屋精品保洁1份" />
        <van-field v-model="address" name="address" label="地址 :" placeholder="您的隐私将被严格保密" />
        <div style="margin: 16px;">
          <van-button round block type="default" native-type="submit"></van-button>
          <img class="full" src="https://i.loli.net/2020/04/27/uWotpasESwxAcfK.png" alt />
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Item",
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      images: [
        { id: 1, src: 'https://i.loli.net/2020/04/27/AC5LnU69PyFecpV.jpg' },
        { id: 2, src: 'https://i.loli.net/2020/04/27/TlO8vfUkuKosjry.png'},
        { id: 3, src: 'https://i.loli.net/2020/04/27/zDLwJyR9iEAvY6q.jpg'}
      ]
    };
  },
  methods: {
    onSubmit(values) {
      var { name, phone, address } = values;
      console.log(name, phone, address);
      if (name == "") {
        Dialog.alert({
          title: "错误提醒",
          message: "请输入正确的姓氏"
        }).then(() => {});
      } else if (!/^1[3456789]\d{9}$/.test(phone)) {
        Dialog.alert({
          title: "错误提醒",
          message: "手机号码有误，请重填"
        }).then(() => {});
      } else if (address == "") {
        Dialog.alert({
          title: "错误提醒",
          message: "请输入地址"
        }).then(() => {});
      } else {
        Dialog.alert({
          title: "提交成功"
        }).then(() => {});
      }
      console.log("submit", values);
    },
     preview(index){
      let imagesSrc = [];
      this.images.forEach(item=>{
        imagesSrc.push(item.src);
      })
      this.ImagePreview({
        images:imagesSrc,
        startPosition:index,
      })
    }
  }
};
</script>
<style>
img {
  width: 100%;
}
.imagee {
  position: relative;
}
.imagee form {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 10%;
}
form .van-field {
  background: #f1f3f6;
  margin-bottom: 18px;
}
form .van-field .van-field__label {
  width: 50px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
}
form .van-button {
  background-image: url("https://i.loli.net/2020/04/27/fQ7TwrhNPyBdxCJ.png");
  background-size: 100%;
  border: none;
}
.imagee .full {
  width: 40px;
  position: absolute;
  bottom: -10px;
  right: 10px;
}
::-webkit-input-placeholder {
  color: #999;
}

.bannty {
  background-image: url("https://i.loli.net/2020/04/27/nKT6XL2pPlRCvFq.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 548px;
  position: relative;
  margin-top: 13px;
}
.dapei {
  position: absolute;
  top: 226px;
  width: 90%;
  left: 28px;
  height: 2.666667rem !important;
}
.dapei img {
  width: 90%;
}
.bannty .butto {
  position: absolute;
  top: 86%;
  left: 10%;
}
.butto img {
  width: 85%;
}
.bannty .buttos {
  position: absolute;
  top: 91%;
  left: 76%;
}
.buttos img {
  width: 40px;
}
.Satisfied {
  position: relative;
}
.Satisfied > img {
  width: 100%;
  margin-top: -4px;
}
.Satisfied form {
  width: 80%;
  position: absolute;
  top: 56%;
  left: 10%;
}
.Satisfied .full {
  width: 40px;
  position: absolute;
  bottom: -10px;
  right: 10px;
}
</style>