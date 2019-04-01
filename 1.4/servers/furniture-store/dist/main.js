
$("#check").on("click", function(){
    let val = $("input").val()
    $.get(`http://localhost:3000/priceCheck/${val}`, function(result){
        console.log(result)
        $("body").append(`<div>${result.price}</div>`)
    })
})
$("#buy").on("click", function(){
    let val = $("input").val()
    $.get(`http://localhost:3000/buy/${val}`, function(result){
        console.log(result)
        $("body").append(`<div>you bought ${result.name} for ${result.price}. remaining ${result.inventory}</div>`)
    })
})