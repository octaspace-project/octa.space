window.addEventListener("load",function(){setTimeout(()=>{const o=new IntersectionObserver(e=>{e.forEach(t=>{var s=t.target.querySelectorAll("path");t.isIntersecting&&(i(s,7),t.target.classList.contains("comet")&&i(s,2))})});function i(e,t){e.forEach((s,l)=>{setTimeout(()=>{s.classList.add("white-blink--active")},l*t)})}document.querySelectorAll(".scroll-spy").forEach(e=>o.observe(e))},500),setTimeout(()=>{tns({container:".country-slider",slideBy:2,autoplay:!0,autoplayTimeout:5e3,mouseDrag:!0,autoWidth:!0,controls:!1,loop:!1,nav:!1,autoplayButtonOutput:!1,autoplayResetOnVisibility:!1,gutter:20,responsive:{350:{items:3},500:{items:4},1024:{items:5},1280:{items:6}}})},500)});