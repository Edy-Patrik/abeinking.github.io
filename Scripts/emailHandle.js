const form = document.getElementById("contact-me-form");
const url = "https://abeinkingbackend.davidilie2.repl.co"; // Replace with your API endpoint URL
const successmessage = document.getElementById("successmessage");
const failmessage = document.getElementById("failmessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Create a new FormData object from the form
  const formData = new FormData(form);

  // Access the form field values using get()
  const email = formData.get("E-mail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const dataToSend = {
    email: email,
    subject: subject,
    message: message,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(dataToSend), // Convert data to JSON string
    });

    const result = await response.json();

    // Check if the 'message' property exists and has the expected value
    if (
      result &&
      result.message === "Email parameters received successfully."
    ) {
      failmessage.classList.add("vis-none");
      successmessage.classList.remove("vis-none");
    } else {
      successmessage.classList.add("vis-none");
      failmessage.classList.remove("vis-none");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
