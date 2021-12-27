function insert(num)
{
    document.querySelector(".reply").innerHTML += num
}
function clean()
{
    document.querySelector(".reply").innerHTML = ""
}
function back()
{
    var reply = document.querySelector(".reply").innerHTML
    document.querySelector(".reply").innerHTML = reply.substring(0, reply.length  -1)
}
function calculate()
{
    var reply = document.querySelector(".reply").innerHTML
    if (reply){
        document.querySelector(".reply").innerHTML = eval(reply)
    }else{
        window.alert("ERRO! Digite valores para calcular!")
    }
}