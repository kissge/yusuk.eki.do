const e=window.matchMedia("(pointer: coarse)").matches,t={current:{x:-30,y:30},target:{x:0,y:0}},r=document.getElementById("card"),n=function(e){let t=e.cloneNode(!0);t.id="card-shadow";let r=t.querySelector(".secret-email-address");return r.textContent=r.previousSibling.getAttribute("src").split(/[./-]+/)[1].toLowerCase()+r.textContent,e.insertAdjacentElement("beforebegin",t),t}(r);function a(e){return 80*e/(Math.abs(e)+30)}function o(e,t=1e4){return Math.floor(e*t)/t}e||document.getElementById("container").addEventListener("mousemove",e=>{let{x:n,y:o,height:c,width:i}=r.getBoundingClientRect();t.target={x:a(-(e.clientY-o-c/2)/20),y:a((e.clientX-n-i/2)/40)}}),setTimeout(function a(){var c;if(e){let e=Date.now();t.current.x=20*Math.sin(e/2e3),t.current.y=20*Math.cos(e/2e3)}else t.current.x+=(t.target.x-t.current.x)*.05,t.current.y+=(t.target.y-t.current.y)*.05;let i=`perspective(10000px) rotateX(${o(t.current.x)}deg) rotateY(${o(t.current.y)}deg)`,s=200*(c=Math.max(Math.abs(t.current.x),Math.abs(t.current.y)))/(c+100);r.style.transform=`${i} translateZ(${o(s)}px)`,n.style.transform=`${i}  translateZ(-50px) `,window.requestAnimationFrame(a)},100),document.querySelectorAll(".roles").forEach(e=>{e.innerHTML=e.innerHTML.replace(/(?<=、)/g,"<wbr>")}),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config","G-WKM0LRK8M3");