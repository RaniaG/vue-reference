
let data = {
    counter: 0,
    fruits: ["apple", "banana", "grapes", "peaches"],
    numbers: {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5
    },
    persons: [
        { id: 1, name: 'rania', age: 20 },
        { id: 2, name: 'sara', age: 30 },
        { id: 3, name: 'amira', age: 40 },
    ]
};
let vm = new Vue({
    el: '#app',
    data,
    methods: {
        inc: function () {
            console.log(this.$refs);
            this.counter++;
        },

    }
})
console.log(vm.$data === data);
console.log(vm.fruits);
console.log(vm.$refs.myButton);