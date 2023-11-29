function handlebox2(){
    var box=document.getElementById('box2');
    var top=box.offsetTop;

    window.addEventListener('scroll',function(){
        if(window.pageYOffset>top){
            box.style.position='fixed';
            box.style.top='0';
        }
        else{
            box.style.position='absolute';
            box.style.top=top+'px';
        }
    })
}



document.addEventListener('DOMContentLoaded',function(){
    handlebox2();
})