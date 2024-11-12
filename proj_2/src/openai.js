const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apikey: "sk-oK1Lfc5Lp8d" });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const nes = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return resizeBy.data.choices[0].text;
}