(function(){
    
        fetch('/json/rec.json')
            .then(res => res.json())
            .then(render)
       
})()