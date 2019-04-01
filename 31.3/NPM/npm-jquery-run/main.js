// $("#div1").css("height", "100px")
// $("#div1").css("width", "100px")
// $("#div1").css("background-color", "yellow")
// $("#div1").on("click", function(){
//     $(this).css("background-color", "red")
// $.get("http://data.nba.net/10s/prod/v1/2016/players.json", function(result){
//     console.log(result)
// })

// })

const request = require('request')
request('http://www.omdbapi.com/?apikey=4a0f6cd7&t=lion_king', function (err, response) {
    // console.log(response)
    let data = JSON.parse(response.body)
    console.log(data.Released)
})