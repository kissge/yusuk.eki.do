const monitor = document.querySelector('.monitor.developer');
const words = `                         eval(s=\u0060shap                           
                    e='p#c#1b#m#13#s#z#w#v                      
                 #z#s#11#r#5#d#k#q#2#l#f#o#o#                   
                3#d#o#o#3#d#o#o#4#4#1#7#o#a#1#d#                
               4#4#3#4#p#8#4#c#5#2#5#2#1o#3#1o#2#1              
              q#6#1h#1#4#c#j#8#i#2#4#h#b#d#c#5#5#l#             
              6#k#2             #4#a#m#4#m#e#o#2#p#c            
              #1                     h#9#1l#5#t'.spl            
            it('#').map(c=>Number.pa   rseInt(c,36))            
            ;cx='eval(s='+String.fro   mCharCode(96)            
            +JSON.stringify(s).slice    (1,- 1)+Stri            
            ng.fromCha rCode(96)+'.s    plit   (/\\\\             
            \\\\s+/).j    oin(\\"\\"))'+     St     ri              
                                              ng.               
                                             fr                 
                                             omChar             
                                        C    ode(32)+'//'       
            +String.                  fr    omCharCode(32)+'(   
        c)'+String.fr            omCha     rCode(32)+'2021'+Stri
      ng.fromCharCode(32)+  'YK'          ;console.log(shape.map
    ((c,i)=>{if(i%2){px=cx              .slice(0,c);cx=cx.slice(
  c);return(px)}else{return            (String.fromCharCode(32).
repeat(c))}}).join('').repla         ce(/(.{64})/g,'$1'+String.f
romCharCode(10)))\u0060.split(/\\s+/     ).join("")) // (c) 2021 YK`;
let i = 0;
setInterval(() => {
  monitor.textContent = words.slice(0, i);
  i = (i + 10) % (words.length * 6);
  monitor.scrollBy(0, 10000);
}, 10);
