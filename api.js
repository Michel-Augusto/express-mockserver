const axios = require('axios');

async function mockTest() {
  try {
    const response = await axios.get('http://localhost:1080/api/alive');
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = { mockTest }