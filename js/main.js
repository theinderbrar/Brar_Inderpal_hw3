import { SendMail } from './components/mailer.js';

(() => {
  const { createApp } = Vue;
  createApp({
    data() {
      return {
        message: 'Hello Vue!',
      };
    },

    methods: {
      processMailFailure(result) {
        // console.log('Last ... ...Failure Results...');
        // console.log(result);
        // show a failure message in the UI
        // use this.$refs to connect to the elements on the page and mark any empty fields/inputs with an error class
        // alert(`failure! and if you keep using an alert, DOUBLE failure!`);
        // show some errors in the UI here to let the user know the mail attempt was successful
        let customMessage = `❌ You forgot to enter ${result.message}`;
        this.showEmailStatus(customMessage);
      },

      processMailSuccess(result) {
        // console.log('...Success Results...');
        // console.log(result);
        // show a success message in the UI
        // alert("success! but don't EVER use alerts. They are gross.");
        // show some UI here to let the user know the mail attempt was successful
        this.$el.parentNode.reset(); // Reset the form
        this.showEmailStatus(result.message);
      },

      processMail(event) {
        // use the SendMail component to process mail
        // console.log(this.$el.parentNode); // The FORM Element
        // console.log(this.$refs);
        // console.log('1. SendMail is invoked...');
        SendMail(this.$el.parentNode)
          .then((data) => {
            return this.processMailSuccess(data);
          })
          .catch((err) => {
            return this.processMailFailure(err);
          });
      },
      // Method to update the staus of mail
      showEmailStatus(status) {
        this.$refs.mailStatus.classList.remove('hidden'); // unhide the div with mail status
        this.$refs.mailStatus.innerHTML = status;
      },
    },
  }).mount('#mail-form');
})();
