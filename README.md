# generate-images-sms-dalle
Generate art and images using DALL·E via SMS!


https://user-images.githubusercontent.com/8932430/214981464-6a382e9e-85fa-4dfe-b648-ec0967859bc0.mp4

You'll need an OpenAI API Key. You can [get one here](https://beta.openai.com/account/api-keys) by clicking on `+ Create new secret key`.
![image](https://user-images.githubusercontent.com/8932430/214981535-757f3fd7-67e3-481e-8144-27273d7db276.png)

### Set an Environment Variable with Twilio Functions and Assets
Open up your `.env` file for your Functions project in your root directory and add the following line:
```bash
OPENAI_API_KEY=YOUR-OPENAI-API-KEY
```
Now you can access this API Key if you'd like to do so in your code with `context.OPENAI_API_KEY`.

### Configure the Serverless Function with a Twilio Phone Number
To open up our app to the web with a public-facing URL, run `twilio serverless:deploy` from the root directory.
<img width="519" alt="image" src="https://user-images.githubusercontent.com/8932430/214981679-5bff6f4f-6ead-4585-bafd-37a278e942bb.png">

Grab the Function URL corresponding to your app (the one that ends with `/dalle`) and configure a Twilio phone number with it as shown below: select a Twilio number you purchased in your Twilio phone numbers console and scroll down to the `Messaging` section. Paste the link in the text field for `A MESSAGE COMES IN` webhook making sure that it's set to `HTTP POST`. When you click `Save` it should look like this!
<img width="755" alt="image" src="https://user-images.githubusercontent.com/8932430/214981843-0bd16d42-7c4d-4d41-bb20-815f8ddada11.png">

Now take out your phone and text a question or prompt to your Twilio number.
<img width="1121" alt="image" src="https://user-images.githubusercontent.com/8932430/214982074-b4b0e909-da7f-40ec-ae7b-1dd2fed2260b.png">
