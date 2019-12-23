// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

var data = {
  items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
  title: 'My Shopping List'
}

// Add item Component
Vue.component('add-item-component', {
  template: '#add-item-template',
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      var text
      text = this.newItem.trim()
      if (text) {
        this.$emit('add', this.newItem)
        this.newItem = ''
      }
    }
  }
})

// item Component
Vue.component('item-component', {
  template: '#item-template',
  props: ['item']
})

// items Component
Vue.component('items-component', {
  template: '#items-template',
  props: ['items']
})

// Change title Component
Vue.component('change-title-component', {
  template: '#change-title-template',
  props: ['value'],
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem: function (text) {
      this.items.push({
        text: text,
        checked: false
      })
    }
  }
})
