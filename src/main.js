import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import JSEncrypt from 'jsencrypt'
 
Vue.prototype.$getRsaCode = function(str){ // 注册方法
  let pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfp4T5UK76SfSvn1wr4+PyStkHWONLVITZp5JLkFkHpiERchwShET+WVlLsbbgyt7Yt/boMoxr+XTD2NXd1gPvq11OU3dNYLE5hL2j8BCBw8EswkCbP+GgYdGF3FRw4eGURA4fcSO44IKuWtmtSyw7y1OMqzMUb6PROXrMFbrntQIDAQAB`;// ES6 模板字符串 引用 rsa 公钥
  let encryptStr = new JSEncrypt();
  encryptStr.setPublicKey(pubKey); // 设置 加密公钥
  let  data = encryptStr.encrypt(str.toString());  // 进行加密
  return data;
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
