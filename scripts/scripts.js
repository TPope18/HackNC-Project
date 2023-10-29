const patientInfoArray = [];

function storePatientInfo() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip_code').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const email = document.getElementById('email').value;

    const patientInfo = {
        firstName: firstName, lastName: lastName, address: address,
        state: state, zip: zip, phoneNumber: phoneNumber, email: email,
    }

    patientInfoArray.push(patientInfo);

    document.getElementById('patient_information').reset();

    console.log(patientInfoArray);
}
