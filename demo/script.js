new Vue({
    el: '#vueApp',
    data: {
        title: 'Hello world',
        link: "https://www.google.com/",
        htmlCode: "<span>rendered from script</span>",
        imgSrc: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        counter: 0,
        secondCounter: 0,
        thirdCounter: 0,
        inputVal: '',
        isBound: 1
    },
    computed: {
        thirdCounterPrint: function () {
            //used as a property
            //executes sync tasks only cant be async
            console.log(" thirdCounterPrint invoked")
            //only invoked if this property changes
            return this.thirdCounter > 5 ? 'greater than 5' : 'less than 5';
        }
    },
    watch: {
        thirdCounter: function (value) {
            //invoked when value of thirdCounter changes
            var vue = this;
            setTimeout(() => {
                vue.thirdCounter = 0;
            }, 2000);
        }
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        inc: function (counterName) {
            if (!counterName)
                this.counter++;
            else
                this[counterName]++;
        },
        dec: function () {
            this.counter--;
        },
        alert: function (str) {
            alert(str);
        },
        captureValue: function (event) {
            this.inputVal = event.target.value;
        },
        isBoundVal: function () {
            return this.isBound ? 'is bound' : 'is not bound'
        },
        secondCounterPrint: function () {
            console.log(" secondCounterPrint invoked")
            //always invoked if anything changes
            return this.secondCounter > 5 ? 'greater than 5' : 'less than 5';
        }
    }
})