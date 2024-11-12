//do NOT deploy this API key or upload onto GitHub
const API_KEY = 'sk-epFAjx3VBySPNc1CPL9YT3BLbkFJODMjVum8e5wpSPEAPaV7'
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')

async function getMessage() {
    console.log('clicked');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello!" }],
            max_tokens: 100
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content && inputElement.value) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }
    } catch (error) {
        console.log(error)
    }
}
submitButton.addEventListener('click', getMessage)