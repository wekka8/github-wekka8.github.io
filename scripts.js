let nevem = "WEKKA"
let azEnKorom = 21
        console.log ('Betoltott a JS is.')
// ez egy egysoros komment        
/*
itt pedig
tobb sor 
is lehet a komment
=== value&var type
== value
= set var
*/
        console.log (nevem)
        if (azEnKorom>=21) {
                $("h1").text ('Eleg idos volt, hogy igyon az USA-ban.');
                ($(".sarga").css("background-color","magenta"))}
        else if (azEnKorom>=18) {
                $("h1").text('Eleg idos volt, hogy igyon az EU-ban.')}
        else {$("h1").text ("nem vagy eleg idos")}
        if (azEnKorom===18){
                console.log ('pont 18 eves vagy')}

        console.log ("ez itt a log vege")

//jquery-s resz

console.log($("h1").text())
console.log ($(".sarga").css("background-color"))
// $("h1").text("Ezt js-bol valtoztattuk meg")
$("li").text("nein")
$("ul").append ("<li>meg egy elem</li>")
$("#p01").html ("ez hova kerul?")
//$("li:last-of-type").toggleClass ("sarga")
$("li").toggleClass ("sarga")
$("#button01").click(function(){
$("ul").append ("<li>GOMB altal hozzaadott egy elem</li>")
})
$("#button02").click(function(){
$("li:last-of-type").remove()
})
let x='0'
$('#button03').click (function(){
$('.container02 div:first-of-type').css ('background-color',szinek[x])
        if (x<4) {x++}
        else{x='0'}
})

//ciklus
for (let i = 0; i<2; i=i+1){
        $("ul").append('<li>ciklusbol beirt extra sor</li>')
}

var szinek = ['orange','black', 'green','red','pink']
// let szinek = Array ('blue','red','orange','yellow','pink')
function szindodoz (szin) {
        $('.container02').append ('<div class="doboz"> </div>')
        $('.container02 div:last-of-type').css ('background-color',szin)
}

//szindodoz('pink')
szinek.forEach (szindodoz)


// $('.container02').append ('<div class="doboz"></div>')
//$('.container02 div:last-of-type').css('background-color',"green")
//$('.container02 div:last-of-type').css('background-color',szinek[3])
console.log (szinek[1])
//$("#button03").click(function()){
//        $("#button3").css ("background-color", szinek[3])
//}
