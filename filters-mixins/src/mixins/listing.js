export default {
    data: function() {
        return {
            list: [],
            query: ''
        }
    },
    computed: {
        searchResults: function() {
            return this.list.filter(e => e.match(this.query));
        }
    },
    created() {
        console.log("mixin created invoked");
    }
}
/*
In Vue.js what happens when a mixin and a component itself contain overlapping options?
They will be merged using appropriate strategies;
 data objects undergo a shallow merge with the component's data taking priority in cases of conflicts.
*/