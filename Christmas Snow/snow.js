window.onload = function() {
    
    // get the canvas and context and store in vars
    
    var canvas = document.getElementById("snow");
    var ctx = canvas.getContext("2d");
    
    //set canvas dims to window height and width
    
    var W = 1330;
    var H = 610;
    canvas.width = W;
    canvas.height = H;
    
    //generate the snow flakes and apply attributes
    
    var nf = 100;
    var flakes = []; //storing all the flakes after looping
    
    //loop through the empty flakes and apply attribute
    
    for(var i = 0; i < nf; i++) {
        flakes.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*5*2, //min of 2px max of 7px;
            d: Math.random() + 1
        })
    }
    
    //draw flakes onto canvas
    
    function drawFlakes() {
        
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "white";
        ctx.beginPath();
        
        for(var i=0; i<nf; i++) {
            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
    }
    
    //animate the flakes
    
    var angle = 0;
    
    function moveFlakes() {
        angle += 0.01;
        
        for(var i=0; i<nf; i++){
            var f= flakes[i];
            
            //update X & Y co-ordiantes of each snowflakes
            
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;
            
            //if the snowflake reches bottom send a new on to the top
            
            if(f.y > H) {
                flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d}
            }
        }
    }
    
    setInterval(drawFlakes, 25);
    
}