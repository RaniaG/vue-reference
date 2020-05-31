new Vue({
    el: '#app',
    data: {
        title: 'hello world'
    },
    methods: {
        change: function () {
            this.title = "changed"
        },
        destroy: function () {
            this.$destroy();
        }
    },
    beforeCreate() {
        console.log("before create");
    },
    created() {
        console.log("created")

    },
    beforeMount() {
        console.log("before mount")

    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("before update")

    },
    updated() {
        console.log("updated")
    },
    beforeDestroy() {
        console.log("before destroy")

    },
    destroyed() {
        console.log("destroyed")

    },
})