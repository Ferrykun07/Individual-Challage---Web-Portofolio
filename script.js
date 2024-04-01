function isinviewport(element){
    var rect = element.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}
function facebookhreff(){
window.location.href = "https://id-id.facebook.com/people/Ferry-Kun/pfbid02Uq24cpPnSDrHEXY1ZXwhajc8BgJ7tJ8V51tR86p18y1ZUx1VUdRqkxSDoHZa9cuql/"
}
function twitterhreff(){
window.location.href = "https://twitter.com/FerryPr84732206"
}
function instagramhreff(){
window.location.href = "https://www.instagram.com/felix_kunnn/"
}
function whatsapphreff(){
window.location.href = "https://wa.me/085842353740"
}
function handleScroll() {
var profile = document.querySelector('.profile');
var nameProject = document.querySelectorAll('.name-project');
var iframe = document.querySelectorAll('.iframe-project');
var caption = document.querySelectorAll('.caption-project');        
var link = document.querySelectorAll('.link-project');
var link2 = document.querySelectorAll('.link-project2');
var section = document.querySelectorAll('.section-name');
var section_left = document.querySelectorAll('.section-left');
var section_right = document.querySelectorAll('.section-right');
var img_left = document.querySelectorAll('.img-left');
var img_right = document.querySelectorAll('.img-right');
var percentskill = document.querySelectorAll('.percent-skill')
var skil1 = document.querySelector('#id-percent-skill1');
var skil2 = document.querySelector('#id-percent-skill2');
var skil3 = document.querySelector('#id-percent-skill3');
var skil4 = document.querySelector('#id-percent-skill4');
var skil5 = document.querySelector('#id-percent-skill5');

if (isinviewport(profile)) {
    profile.classList.add('show');
}
if (isinviewport(skil1)) {
    skil1.classList.add('id-percent-skill1');
}
if (isinviewport(skil2)) {
    skil2.classList.add('id-percent-skill2');
}
if (isinviewport(skil3)) {
    skil3.classList.add('id-percent-skill3');
}
if (isinviewport(skil4)) {
    skil4.classList.add('id-percent-skill4');
}
if (isinviewport(skil5)) {
    skil5.classList.add('id-percent-skill5');
}
nameProject.forEach(function(element){
    if (isinviewport(element)) {
        element.classList.add('show-name')
    }    
})

iframe.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-iframe')
    }
}) 
caption.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-caption')
    }
})
section.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-section-name')
    }
})
link.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-link')
    }
})
link2.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-link2')
    }
})

section_left.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-left')
    }
})
section_right.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-right')
    }
})
img_left.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-left')
    }
})
img_right.forEach(function(element){
    if(isinviewport(element)){
        element.classList.add('show-right')
    }
})
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check when page loads
handleScroll();

window.addEventListener('scroll',handleScroll);
handleScroll()