const { Doctor } = require("../models/index.cjs");

async function createDoctor() {
  try {
    const doctor = await Doctor.create({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      schedule: "Mon-Fri 9am-5pm",
    });

    console.log("Doctor created:", doctor.toJSON());
  } catch (error) {
    console.error("Error creating doctor:", error);
  }
}

createDoctor();
