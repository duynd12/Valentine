//let : no se tra ve gia tri ma cai bien do duoc cap nhat cuoi cung 
// shift nguoc voi pop  + pop xoa phan tu cuoi +shift xoa phan tu dau
// unshift nguoc vs push +push them o cuoi + unshift them o dau
/// concat la noi array vs nhau
// slice cat mang 
// splice xoa phan tu (x,y) x la so thu tu , y la so phan tu xoa
// prototype
// phuong thuc thi moi lay duoc cac gia tri trong constructor
// toan tu 3 ngoi x?y:z neu x dung thi lay gia tri y neu k lau gia tri z
// for-in lap qua key cua doi tuong
// for -of lap qua value cua doi tuong 
// join chuyen chuoi dau phay sang chuoi dau cham
//calling the function with setTimeout to make sure the HTML is loaded
// some nguoc lai vs every tra ve true false
// find tim kiem phan tu trong mang (tra ve 1 phan tu thoa man dieu kieu)
// filter tim tat ca cac phan tu trong mang thoa man dieu kien (tra ve mang moi)
// var Courses =[
//  {
//      id:1,
//      name : 'PHP',
//      coins:200
//  },
//  {
//     id:2,
//     name : 'Java',
//     coins:20
// },
// {
//     id:3,
//     name : 'JS',
//     coins:300
// },
// {
//     id:4,
//     name : 'Ruby',
//     coins:250
// }
// ]
// function myfc(course){
//    return {
//        id:course.id,
//        name : course.name
//    }
// var course = [
//     {
//         name : 'Javascript',
//         coin : 700
//     },
//     {
//         name : 'PHP',
//         coin : 800
//     },
//     {
//         name : 'Ruby',
//         coin : 850
//     }
// ];
// Array.prototype.filter1=function(callback){
//     var output =[]
//     for(var index in course){
//        if(course.hasOwnProperty(index)){
//            var result=callback(course[index],index)
//            if(result)
//            { 
//                output.push(course[index]);
//            }
//        }
//     }
//     return output;
// }
// var html=course.filter1(function(course,index){
//     if(course.coin >820)
//     {
//         return course;
//     } 
// })
// console.log(html)
// Array.prototype.map2=function (callback){
//     var output=[]
//     for(var i=0; i<this.length; i++){
//         var result= callback(this[i],i);
//        output.push(result);
//     }
//     return output;
// }
// var hmtl=course.map2(function (course){
//      return `<h1>${course}</h1>`
// });
// console.log(hmtl.join(''));
//DOM co 3 thanh phan element , attribute ,Text 
// getElementsByClassName lay toan bo cac class co ten giong nhau
// getelementsByTagName lay ten the : vd the p , a ...
// element.childNodes trả về mảng các nút con của phần tử
// element.firstChild trả về nút con đầu tiên
// element.lastChild trả về nút con cuối tiên
// element.hasChildNodes rả về true nếu một phần tử có bất kỳ nút con nào, ngược lại là false.
// element.nextSibling  trả về nút tiếp theo ở cùng cấp độ cây 
// element.previousSibling trả về nút trước đó ở cùng một cấp độ cây.
// element.parentNode trả về nút cha của một phần tử.
// changing attribute co the thay doi thuoc tinh cac the . VD thay doi thuoc tinh the a href , the img src
// changing style VD x.sytle.color='red' Ví dụ: thuộc tính background-color nên được gọi là backgroundColor
// element. cloneNode () sao chép một phần tử và trả về nút kết quả.
// document. createElement (phần tử) tạo một nút phần tử mới.
// document. createTextNode (văn bản) tạo một nút văn bản mới
// element. appendChild (newNode) thêm một nút con mới vào một phần tử làm nút con cuối cùng.
// element. insertBefore (node1, node2) chèn node1 làm con trước node2
//Removing Elements de loai bo element dung removeChild(node) method.
// Replacing Elements element.replaceChild(newNode, oldNode)
// clearInterval() method to stop the timer
// onmouseover xay ra khi tro vao element same hover, onmouseout xay ra khi khong tro vao element  EXCEPT: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, and <title>
// onmousedown Thực thi JavaScript khi nhấn nút chuột trên một đoạn văn
// onmouseup khi mình ấn  chuột trên đoạn văn thì oumousedown được thực hiện khi mk k ấn nữa thì onmouseup thực hiện ,
// onblur Thực thi JavaScript khi người dùng rời khỏi trường đầu vào (input)
// onfocus nguoc lai onblur
// onkeydown khi nguoi dung press a key thi.....
// bubbling tu trong ra ngoai (false) , capturing tu ngoai vao trong (true)
// trong ES6 for in lap qua object || con for of lap qua mang
// var h=document.createElement('h1');
// var text=document.createTextNode('duy dep trai qua');
// h.appendChild(text);
// var p=document.getElementById('p2');
// var p1=document.getElementById('p1');

// var demo=document.getElementById('demo');
// demo.replaceChild(h,p1)
// var arr=[2,3,10,6,7];
// arr.forEach(v=>{
//     console.log(v*2);
// })
// const add=(x,y) =>{
//     let sum=x+y;
//     console.log(sum);
// }
// let car = {
//     speed: 40,
//     accelerate() {    
//   this.speed += 10;
//    }
//   };

//   console.log(car.accelerate());
//   car.accelerate();
// //   console.log(car.speed);
////--------------------- jquery 
// $("p").hide()  // hides all <p> elements
// $(".demo").hide()  // hides all elements with class="demo"
// $("#demo").hide()  // hides the element with id="demo"
// $("div.menu")  // all <div> elements with class="menu"
// $("p:first")  // the first <p> element
// $("h1, p") // all <h1> and all <p> elements
// $("div p") // all <p> elements that are descendants of a <div> element
// $("*")  // all elements of the DOM
// removeAttr() method is used for removing any attribute of an element
//html() tra ve ca nd va the || con text() tra ve nd
// append () chèn nội dung vào cuối các phần tử đã chọn.
// prepend () chèn nội dung vào đầu các phần tử đã chọn.
// after () chèn nội dung sau các phần tử đã chọn.
// before () chèn nội dung trước các phần tử đã ch
// The addClass( ) method adds one or more classes to the selected elements.
// The removeClass() method removes one or more class names from the selected elements.
// The toggleClass() method toggles between adding/removing classes from the selected elements
// css() method can be used to get and set CSS property values
// css({"property":"value","property":"value",...});
// The width() and height() methods can be used to get and set the width and height of HTML elements\
// The innerWidth() and innerHeight() methods also include the padding. cũng bao gồm phần đệm.
// The outerWidth() and outerHeight() methods include the padding and borders.  bao gồm phần đệm và đường viền
// The parent() method tra ve the cha cua no
// parents() tra ve tat cac cac cha cua no
// eq()  chon 1 phan tu cu the
// remove()  xoa phan tu ma mk muon xoa VD : $("p").eq(1).remove; xoa phan tu 1 
// empty()  xoa cac phan tu con ma mk da chon  VD : $("div").empty(); xoa phan
// Mouse Events:
// click occurs when an element is clicked.
// dblclick occurs when an element is double-clicked.
// mouseenter occurs when the mouse pointer is over (enters) the selected element.
// mouseleave occurs when the mouse pointer leaves the selected element.
// mouseover occurs when the mouse pointer is over the selected element.
// Keyboard Events:
// keydown occurs when a keyboard key is pressed down.
// keyup occurs when a keyboard key is released.
// Form Events:
// submit occurs when a form is submitted.
// change occurs when the value of an element has been changed.
// focus occurs when an element gets focus.
// blur occurs when an element loses focus.
// Document Events:
// ready occurs when the DOM has been loaded.
// resize occurs when the browser window changes size.
// scroll occurs when the user scrolls in the specified element.
// The on() method is used to attach an event to the selected element
// You can remove event handlers using the off() method
// toggle() method is used to toggle between hiding and showing elements. chuyển đổi giữa ẩn và hiện sử dụng milliseconds.
// fadeToggle() làm mờ dần và tắt dần
// fadeTo() làm mờ dần từ 0--1
// slideUp () và slideDown () được sử dụng để tạo hiệu ứng trượt trên các phần tử.
// slideToggle () chuyển đổi giữa các hiệu ứng trượt
// animate() method lets you animate to a set value dung "key":"value"
// stop() dùng để dừng animate()
// var Val=$("input").Val();
// var item=document.getElementById('item');
// var submenu=document.getElementById('submenu');
// item.addEventListener('mouseover', function(){
//   $("#submenu").slideToggle(500);
// })
// $("#item").click(function(){
//   $("#submenu").slideToggle(500);
// })
///   -------------------- Reactjs
// hook là 1 tính năng của React js  dùng để tối ưu hóa code
// reactDom.render(
//     <h1>hello dang duy</h1>,
//     document.getElementById("container")
// )
$("#ButtonNo").on('mouseover', function () {
    $(this).text("Đồng ý");
})
$("#ButtonNo").on('mouseleave', function () {
    $(this).text("Không");
})