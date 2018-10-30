var app = new Vue({
  el: '#app',
  data: {
    query: ''
  },
  asyncComputed: {
    /*
     * Can be a definition: node.value { ... }
     * or boolean
     */
    result () {
      if( this.query.trim().length === 0 ) return false;
      return fetch(`/api/check-term?q=${this.query.toLowerCase()}`)
        .then(response => response.json())
    }
  }
})
