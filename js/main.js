const appVue = new Vue({

el: "#app",


    data: {
        emailGenerated: '',
        emailGenerated: '',
    },
	

	methods: {

        questionCicle() {
            this.emailGenerated = [];

            for (let i = 0; i < 10; i++) {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((axiosResp) => {
            this.emailGenerated.push(axiosResp.data.response);
            console.log(this.emailGenerated);
        });
            }
        },

    },
});