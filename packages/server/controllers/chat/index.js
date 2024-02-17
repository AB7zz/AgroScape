import {Configuration, OpenAIApi} from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const chat = async(req, res) => {
    try {
        const msg = req.body.message
        const plant = req.body.plant

        let prompt = `Imagine you're a ${plant} and I'm a human. Here is my message: "${msg}". Reply to me. No need to start with "I'm a ${plant} and I prefer...". Just reply as if you're a ${plant} and you're answering the question.`

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 400,
            temperature: 0,
            // stream: true
        });

        const output = response.data.choices[0].text.trim()

        res.send({reply: output})

    } catch (error) {
        console.log(error)
    }
}

export default chat