const client = require('./client');

/**
 * Send Template Message (RAW)
 * Accepts full payload from user (no assumptions)
 */
async function sendTemplateRaw(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error("A valid payload object is required");
  }

  if (!payload.phone) {
    throw new Error("payload.phone is required");
  }

  if (!payload.template) {
    throw new Error("payload.template is required");
  }

  try {
    const response = await client.post('/api/send/template', payload);
    return response.data;
  } catch (error) {
    console.error(
      'Send Template Error:',
      error.response?.data || error.message
    );
    throw error;
  }
}

/**
 * Fetch templates (optional helper)
 */
async function getTemplates() {
  try {
    const response = await client.get('/api/templates');
    return response.data;
  } catch (error) {
    console.error(
      'Get Templates Error:',
      error.response?.data || error.message
    );
    throw error;
  }
}

module.exports = {
  sendTemplateRaw,
  getTemplates
};
