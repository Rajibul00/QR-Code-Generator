let conatiner = document.querySelector('.container')
let footerdiv = document.querySelector('.footerdiv')
let inputData = document.querySelector('input')
function generateqrcode(){

if(inputData.value!=''){
    footerdiv.style.height = '25vh'
   
    footerdiv.style.transition=' height 1s ease-in .2s';
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData.value} `).then( (data)=>footerdiv.innerHTML=`<img src="${data.url}" alt="A QR Code">`).catch((error)=>alert(error));
}else{
    alert('Please Paste a Link')
}



}
