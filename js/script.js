
// $(document).on('click','a',function(event){
//   event.preventDefault();
//   var target = $(this).attr("href");
//   $('html, body').animate({
//     scrollTop: $(target).offset().top
//   }, 500);
// });

// $(window).scroll(function(e){
//   console.log($(window).scrollTop());
//   if ($(window.scrollTop()<=0)
//     $(".explore, .navbar").addClass("at_top");
//     )
//   else
//     $(".explore, .navbar").removeClass("at_top");
// });

// $(window).mousemove(function(event){
//   var pagex = event.pageX;
//   var pagey = event.pageY;  

//   $('.right').css("transform","translateX("+(pagex/-20+50)+"px;")
//   $('.mountain').css("transform","translateX("+(pagex/-20+50)+"px;")
// });

console.clear()
const explore = document.querySelector('.explore')
const navbartop = document.querySelector('.navbar-top')
const mountain = document.querySelectorAll('.mountain')
const r1text = document.querySelector('.r1text')
const r2text = document.querySelectorAll('.r2text')
const r3text = document.querySelector('.r3text')
const pic = document.querySelectorAll('.pic')
const section_about = document.querySelector('#section_about')
// const cross = document.querySelector('#cross')
// const cat_white = document.querySelector('#cat')
const cat_blue = document.querySelector('#cat_blue')
const cat_grey = document.querySelector('#cat_grey')
const cat_yellow = document.querySelector('#cat_yellow')
const button = document.querySelector('button.navbar-toggler.border.border-white.navbar-dark')

window.addEventListener('scroll',function(e) {
  // scroll控制explore
  if(window.scrollY <= 0) {
    explore.classList.add('at_top')
  }else {
    explore.classList.remove('at_top')
  }
  // scroll控制導覽列
  if(window.scrollY > 0) {
    navbartop.classList.remove('navbar-top')
    button.classList.remove('navbar-dark')
  }else {
    navbartop.classList.add('navbar-top')
    button.classList.add('navbar-dark')
  }
})

// 利用滑鼠移動控制部份物件位置
window.addEventListener('mousemove',(e) => {
  let x = e.pageX
  let y = e.pageY
  console.log("pagex: " + x,"pagey: " + y)
  let about_x = x - section_about.offsetLeft
  let about_y = y - section_about.offsetTop
  // console.log("aboutx: " + about_x,"abouty: " + about_y)
  mountain[0].style.transform = `translateX(${x/-20+50}px)`
  mountain[1].style.transform = `translateX(${x/-20+50}px)`
//   經測試無法用for迴圈實現上述動態做法，但能實現如上述二行靜態做法
  // for (let i = 0 ; i < mountain.length; i++) {
  //   mountain[i].style.backgroundColor = `translateX(${x/-20+50}px)`
  //   mountain[i].style.width = "90"+"px"
  // }
  r1text.style.transform = `translate(${about_x/-20}px,${about_y/-15}px)`
  r2text[0].style.transform = `translateY(${about_y/-10}px)`
  r2text[1].style.transform = `translateX(${about_y/-13}px)`
  r3text.style.transform = `translate(${about_x/15}px,${about_y/15}px)`
  pic[0].style.transform = `translateX(${about_x/-25}px)`
  pic[1].style.transform = `translateX(${about_x/-15}px)`
  pic[2].style.transform = `translateX(${about_x/-10}px)`
  pic[3].style.transform = `translateX(${about_x/-15}px)`
  pic[4].style.transform = `translateX(${about_x/-20}px)`
  pic[5].style.transform = `translateX(${about_x/-20}px)`  
// //   控制about十字滑鼠
//   // console.log(section_about.outerHeight)
//   if (about_y <= 0) {
//     cross.classList.add('hide')
//   }else {
//     cross.classList.remove('hide')
//   }
//   cross.style.left = about_x + 'px'
//   cross.style.top = about_y + 'px'
// // 設置白貓動向
//   let cat_Left = cat_white.offsetLeft + cat_white.style.width/2
//   // console.log("cat_Left " + cat_Left)
//   let cat_TOP = cat_white.offsetTop
//   // console.log("cat_TOP " + cat_TOP)
//   let img_url="https://awiclass.monoame.com/catpic/"
  
//   if (about_x < cat_Left-125 && about_y > cat_TOP) {
//     cat_white.src = img_url + "cat_left.png"
//   }else if (about_x > cat_Left+125) {
//     cat_white.src = img_url + "cat_right.png"
//   }else if (about_x < cat_Left-50 && about_y < cat_TOP) {
//     cat_white.src = img_url + "cat_lefttop.png"
//   }else if (about_x > cat_Left+30 && about_y < cat_TOP) {
//     cat_white.src = img_url + "cat_righttop.png"
//   }else {
//     cat_white.src = img_url + "cat_top.png"
//   }
// 控制三隻小貓
  detect_cat(cat_grey,x);
  detect_cat(cat_blue,x);
  detect_cat(cat_yellow,x);
})
// 宣告三隻小貓動作
function detect_cat(cat_id,x) {
  let catplace = cat_id.offsetLeft + cat_id.style.width/2;
  console.log(catplace)
  if(Math.abs(x-catplace) < 80)
    cat_id.style.bottom = "0px"
  else
    cat_id.style.bottom = "-50px"
}

console.log(cat_blue.offsetLeft + (cat_blue.style.width/2))