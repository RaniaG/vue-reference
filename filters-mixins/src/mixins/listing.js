export default {
    data: function () {
        return {
            list: [],
            query: ''
        }
    },
    computed: {
        searchResults: function () {
            return this.list.filter(e => e.match(this.query));
        }
    }
    ,
    created() {
        console.log("mixin created invoked");
    }
}