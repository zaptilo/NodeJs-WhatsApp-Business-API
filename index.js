const { sendTemplateRaw } = require('./src/whatsapp');

async function main() {
  try {

    //  This payload is template, it should come from user input / API request
    const payload = {
      phone: "Phone_no_here",
      template: {
        name: "your_template_name",
        language: {
          code: "en"
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: "Dynamic value here"
              }
            ]
          }
        ]
      }
    };

    const response = await sendTemplateRaw(payload);

    console.log("Response:", response);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
