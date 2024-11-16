let translateButton = document.getElementById('translate-button');

translateButton.onclick = translate;

function translate() {
    const sl = document.getElementById('source-language').value;
    const tl = document.getElementById('target-language').value;
    const textInput = document.getElementById('translate-input').value;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(textInput)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Access the translated text in the response
            const translatedText = data[0][0][0];
            document.getElementById('output-text').innerText = translatedText;
        })
        .catch(err => {
            console.error(err);
            document.getElementById('output-text').innerText = 'Có lỗi xảy ra khi dịch văn bản.';
        });
}

