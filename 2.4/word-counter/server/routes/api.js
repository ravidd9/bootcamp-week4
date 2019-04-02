const express = require('express')
const router = express.Router()
const request = require('request')
let wordCounter = {
    dad: {
        count: 1
    },
    mom: {
        count: 1
    }
}

router.get('/sanity', function (req, res) {
    res.send("Server up and running")
})

router.get('/word/:word', function (req, res) {
    let word = req.params.word
    if (wordCounter[word]) {
        res.send({
            count: wordCounter[word].count
        })
    } else {
        res.send({
            count: 0
        })
    }
})

router.get('/total', function (req, res) {
    let sum = 0
    let arr = Object.values(wordCounter)
    arr.forEach(v => sum += v.count)
    res.send(sum.toString())
})

router.post('/word/:word', function (req, res) {
    let word = req.params.word
    if (wordCounter[word]) {
        wordCounter[word].count++
    } else {
        wordCounter[word] = {count: 1}
    }
    res.send({
        text: "Added " + word,
        currentCount: wordCounter[word].count
    })
})

router.post('/words/:sentence', function (req, res) {
    let sen = req.params.sentence
    let words = sen.split(" ")
    let numNewWords = 0
    let numOldWords = 0
    words.forEach(w => {
        if (wordCounter[w]) {
            wordCounter[w].count++
            numOldWords++
        } else {
            wordCounter[w] = {
                count: 1
            }
            numNewWords++
        }
    })
    res.send({
        text: `Added ${numNewWords} words, ${numOldWords} already existed`,
        currentCount: -1
    })
})


module.exports = router