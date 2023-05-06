//get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get colse button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', colseModal);
//listen for outside click
window.addEventListener('click', outsideClick);

//Function to open  modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function colseModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
       modal.style.display = 'none'; 
    }
}

 // xoa phan tu
 var myTable = document.querySelector('tbody');

 var deleteButtons = document.querySelectorAll('tr button');
for (var i = 0; i < deleteButtons.length; i++) {
 deleteButtons[i].addEventListener('click', function() {
     var tableRow = this.parentNode.parentNode;
     myTable.removeChild(tableRow);
 });
 }

const products = [
  { name: 'Sạc dự phòng Hoco J56', price: 550000  },
  { name: 'MÁY SƯỞI TAY KIÊM SẠC DỰ PHÒNG REMAX RT-SP15', price: 499000 },
  { name: 'Tai Nghe Bluetooth TG02', price: 299000 },
];
const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  
  console.log(totalPrice); // Output: 1100000
  