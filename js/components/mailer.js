// could wrap all of this in a class or an object and expand on the API to include all of the front-end API interactions (GET, PUT, POST for CMS etc)

// SendMail would be just one member / property in that object

async function SendMail(targetForm) {
  // mail stuff goes here
  let formData = new FormData(targetForm),
    formFieldErrors = false;

  // console.log('2. Form Data Collected...');

  let result = await fetch(`./${targetForm.getAttribute('action')}`, {
    method: targetForm.method,
    body: formData,
  }).then((response) => {
    // console.log('3. Got Response from send.php');
    // console.log(response);
    if (response.status !== 200) {
      formFieldErrors = true;
      // console.log('...Failed due to form field errors...');
    }
    return response;
  });

  // console.log('3.1. Got Results from API. logging parsed version');
  // console.log(result.json());

  let mailStatus = await result.json();

  // console.log(mailStatus);

  if (formFieldErrors) {
    // console.log('...Mail Field Errors if true block');
    throw new Error(JSON.stringify(mailStatus));
  }
  return mailStatus;
}

export { SendMail };
