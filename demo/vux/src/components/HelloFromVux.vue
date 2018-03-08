<template>
  <div>

    <group>
      <h1 >vux-demo</h1>
      <p>模态框</p>
      <cell @click.native="show12 = true"  inline-desc='公务宝账号'></cell>
      <cell
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"></cell>

        <cell-form-preview :border-intent="false" :list="list2"></cell-form-preview>

    </group>

    <!-- 模态框 -->
    <div v-transfer-dom>
      <popup v-model="show12" position="bottom">
        <group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="show12 = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>


    <card>
      <div slot="conten" class="card-padding">
        <p>dfadfad</p>
        <p>dfadfad</p>
        <p>dfadfad</p>
      </div>
    </card>

    <card>
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
        <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
      </div>
    </card>

  </div>
</template>

<script>
import { TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ChinaAddressData, CellFormPreview,Card } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    Cell,
    XSwitch,
    Toast,
    XAddress,
    XButton,
    CellFormPreview,
    Card
  },
  data () {
    return {
      addressData: ChinaAddressData,
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value6: [],
      show7: false,
      showToast: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false,
      list2: [{
        label: 'Apple',
        //value: '3.29'
      }, {
        label: 'Banana',
        //value: '1.04'
      }, {
        label: 'Fish',
        //value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
