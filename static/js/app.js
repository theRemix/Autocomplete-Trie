var app = new Vue({
  el: '#app',
  data: {
    searchTerm: '',
    terms: [
      'Vegetables',
      'Cheese',
      'Whatever else humans are supposed to eat'
    ]
  },
  computed: {
    filteredTerms: function () {
      return this.terms.filter(term =>
        term.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }
  }
})
