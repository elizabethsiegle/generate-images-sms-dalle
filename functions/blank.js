const { Configuration, OpenAIApi } = require("openai");
exports.handler = async function (context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const configuration = new Configuration({
    apiKey: context.OPENAI_API_KEY
  });
  const message = twiml.message(); 
  const inbMsg = event.Body.toLowerCase().trim();
  const openai = new OpenAIApi(configuration);
  const imgData = await openai.createImage({
      prompt: inbMsg,
      n: 1,
      size:"1024x1024"
    });
    const dataURL = imgData.data.data[0].url;
    message.body(`here's an image pertaining to ${inbMsg}!`);
    message.media(dataURL);
    callback(null, twiml);
};
