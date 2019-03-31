$("#div1").css("height", "100px")
$("#div1").css("width", "100px")
$("#div1").css("background-color", "yellow")
$("#div1").on("click", function(){
    $(this).css("background-color", "red")
    $.get("http://data.nba.net/10s/prod/v1/2016/players.json", function(result){
        console.log(result)
    })
})
