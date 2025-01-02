$(document).ready(function(){

    
});


const openPodup = (number)=>{
    const podup_ = ".main .main__deriptions .main__podup .main__podup--item:nth-child("


    $(podup_+number+")").css("display","block")
    $(".main .main__deriptions .main__podup").css("z-index","100")
    console.log(podup_+number+")")

}
const closePodup = (number)=>{
    const podup_ = ".main .main__deriptions .main__podup .main__podup--item:nth-child("

    $(".main .main__deriptions .main__podup").css("z-index","-1")
    $(podup_+number+")").css("display","none")
    console.log(podup_+number+")")

}
