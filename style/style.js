// $(document).ready(function(){
    


// });

const openPodup = (number)=>{
    const podup_ = ".main .main__deriptions .main__podup:nth-child("


    $(podup_+number+")").css("display","block")
    console.log(podup_+number+")")

}
const closePodup = (number)=>{
    const podup_ = ".main .main__deriptions .main__podup:nth-child("


    $(podup_+number+")").css("display","none")
    console.log(podup_+number+")")

}

