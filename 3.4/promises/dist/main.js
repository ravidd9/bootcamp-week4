// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

// $.get(`/sentiment/Ploy/`)
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

$.get(`/randomWord/`)
    .then(function (word) {
        let title = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
        let gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=ue9SQLD6ltJEF3POS53SXP5gJHLStZlK&limit=1`)
        Promise.all([title, gif])
            .then(function (result) {
                $("body").append(result[0].items[0].volumeInfo.title, `<iframe src ="${result[1].data[0].embed_url}"></iframe>`)
            })
    })