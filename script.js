function handlebox2(){
    var box=document.getElementById('box2');
    var top=box.offsetTop;

    window.addEventListener('scroll',function(){
        if(window.pageYOffset>top){
            box.style.position='fixed';
            box.style.top='20px';
        }
        else{
            box.style.position='static';
        }
    })
}



document.addEventListener('DOMContentLoaded',function(){
    handlebox2();
})