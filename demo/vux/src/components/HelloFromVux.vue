<template>
  <div>



    <group>
      <h1 >dfgdfg</h1>
      <x-switch title="Default popup" v-model="show"></x-switch>
      <x-switch title="Full popup" v-model="show1"></x-switch>
      <x-switch title="Multi popup (first)" v-model="show3"></x-switch>
      <x-switch title="Mask disable" v-model="show5"></x-switch>
      <x-switch title="Popup address" v-model="show6"></x-switch>
      <x-button title="default max-height=100%" v-model="show12"></x-button>
      <x-switch title="set max-height=50%" v-model="show13"></x-switch>

      <cell @click.native="show12 = true"  inline-desc='公务宝账号'></cell>
    </group>

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




  </div>
</template>

<script>
import { TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ChinaAddressData } from 'vux'

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
    XButton
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
      show13: false
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
