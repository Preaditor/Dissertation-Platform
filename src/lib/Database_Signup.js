const fetch = require('node-fetch');

async function signup() {
  const response = await fetch('192.168.1.104:9000');
  let BotMessage = '';
  // Storing data in form of JSON
  const data = await response.json();
  console.log(data);
  console.log(response.status);
  if (response.status === 200) {
    BotMessage = 'works';
    console.log(BotMessage);
  } else {
    console.log('Error: ');
  }
}
export default { signup };
