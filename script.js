var coordinates;

    var currentPos=0;
/*
    var scrolling = setInterval(function(){
        if(currentPos >= coordinates)
        {
            clearInterval(scrolling);
            currentPos=0;
            break;
        }
        else
        {
            scrollBy(0,50);
        }
        currentPos += 50;
    },50);

*/

var navAnchorTags = document.querySelectorAll('.nav-menu a')

    console.log(navAnchorTags);

for(var i=0; i <= navAnchorTags.length ; i++){
    navAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        var targetID = this.textContent.trim().toLowerCase();
        
        var targetSection = document.getElementById(targetID);
        
        coordinates = targetSection.offsetTop;
        
        var scrolling = setInterval(function(){
            if(currentPos >= coordinates)
            {
                clearInterval(scrolling);
                currentPos=0;
                return;
            }
            else
            {
                window.scrollBy(0,50);
            }
            currentPos += 50;
        },50);
    
    })
}

