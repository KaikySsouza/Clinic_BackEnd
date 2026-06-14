const { Patient } = require('../models/index.cjs');

async function createPatient() {
  try {
    const patient = await Patient.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      dob: new Date('1990-01-01'),
      gender: 'Male',
      adress: '123 Main St',
      phone: '555-1234',
      insurance_info: 'ABC Insurance',
    });

    console.log('Patient created:', patient.toJSON());
  } catch (error) {
    console.error('Error creating patient:', error);
  }
}

createPatient();