const appVue = new Vue({

el: "#app",


    data: {
        emailGenerated: '',
    },
	

	methods: {

        questionCicle() {
            this.emailGenerated = [];
            for (let i = 0; i < 10; i++) {
                getAxiosResponse();
            }
        },

        getAxiosResponse() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((axiosResp) => {
            this.emailGenerated = axiosResp.data.response;
            console.log(this.emailGenerated);
        });
        },
    },
});