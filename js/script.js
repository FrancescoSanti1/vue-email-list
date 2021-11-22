var app = new Vue(
    {
        el: "#root",
        data: {
            emailList: []
        },
        mounted: function() {

            const myData = this;

            for(let i = 0; i < 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(serverResponse) {
                    myData.emailList.push(serverResponse.data.response);
                });
            }
            // console.log(this.emailList);
            
        }
    }
);