
let width = window.screen.availWidth;
let height = window.screen.availHeight;
alert('HI');
if (height>width)
    alert('For the best browsing experience, please rotate your device');
window.addEventListener('resize', function(){
    width = window.screen.availWidth;
    height = window.screen.availHeight;
    if (height>width)
    alert('For the best browsing experience, please rotate your device')}, true);
