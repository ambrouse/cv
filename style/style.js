var scrollValue_;
var check = true;

$(document).ready(function(){
    $(".main .main__podup").css("max-height",$(".main")[0].scrollHeight+"px")
    $(".main .main__podup .main__podup--item").css("max-height",$(".main")[0].scrollHeight+"px")
    window.addEventListener("scroll", (event) => {
        if(check==true){
            scrollValue_ = $(window).scrollTop();
        }
    });
});


const openPodup = (number)=>{
    check = false;
    const podup_ = ".main .main__deriptions .main__podup .main__podup--item:nth-child("
    $(podup_+number+")").css("display","block")
    $(".main .main__deriptions .main__podup").css("z-index","100")
    window.scrollTo(0, 0);

}
const closePodup = (number)=>{
    window.scrollTo(0, scrollValue_);
    check = true
    const podup_ = ".main .main__deriptions .main__podup .main__podup--item:nth-child("
    $(".main .main__deriptions .main__podup").css("z-index","-1")
    $(podup_+number+")").css("display","none")
}
