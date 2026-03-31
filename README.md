# Zaptilo WhatsApp Business API - Node.js SDK (RAW)

## 🚀 Overview

This is a **RAW Node.js SDK** for sending WhatsApp template messages using Zaptilo API.

* Fully dynamic
* No abstraction layer
* Maximum flexibility
* Suitable for all templates and use cases

---

## 📦 Installation

```bash
git clone https://github.com/zaptilo/NodeJs-WhatsApp-Business-API.git
cd NodeJs-WhatsApp-Business-API
npm install
```

---

## ⚙️ Configuration

Create a `.env` file:

```env
BASE_URL=https://web.zaptilo.ai
AUTH_TOKEN=your_token_here
```

> You can signup on https://zaptilo.ai and Setup you WhatsApp Business API using Embaded Signup form.
> you must have a valid facebook login and one valid mobile number to use Meta WhatsApp Business APIs.

---

## 📌 Usage

### 1. Send Template Message (RAW)

This SDK expects you to pass the **full payload dynamically**.

```js
const { sendTemplateRaw } = require('./src/whatsapp');

async function sendMessage(payload) {
  try {
    const response = await sendTemplateRaw(payload);
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}
```

---

### 📥 Example Payload Structure

```json
{
  "phone": "<recipient_phone_number>",
  "template": {
    "name": "<template_name>",
    "language": {
      "code": "<language_code>"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "<dynamic_value>"
          }
        ]
      }
    ]
  }
}
```

---

### How to build Template Payload 

You can refer Developers Tools of Zaptilo.ai to construct the payload.

---

### Example with Express API

```js
const express = require('express');
const { sendTemplateRaw } = require('./src/whatsapp');

const app = express();
app.use(express.json());

app.post('/send', async (req, res) => {
  try {
    const payload = req.body; // dynamic user input

    const response = await sendTemplateRaw(payload);

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
```

---

## 📌 Fetch Templates

```js
const { getTemplates } = require('./src/whatsapp');

async function fetchTemplates() {
  try {
    const templates = await getTemplates();
    console.log(templates);
  } catch (error) {
    console.error(error.message);
  }
}

fetchTemplates();
```

---

## ⚠️ Important Notes

* Payload must match approved WhatsApp template structure
* Template name must exist in your WhatsApp Business Account
* Only template messages are allowed for first contact
* Follow Meta WhatsApp policies

---

## 🏗️ Design Philosophy

This SDK is intentionally **RAW**:
* No abstraction
* No assumptions

You have full control over request payload

---

## 📄 License

MIT

