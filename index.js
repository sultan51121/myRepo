 
document.getElementsByClassName('red')[0].style.color = 'red';
    let images = document.getElementsByClassName('images');

 const images_count = images.length;
 const images_no = (images.length)-1;
                    console.log('.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0');
        

 let i=0,
     countDown,
 startCountDown = images_no;

var interval = setInterval(changePic, 2000);
function changePic(){
                                console.log('i ==>> '+i);

    
            if(i!==images_no){

                 document.getElementsByClassName('images')[startCountDown].style.visibility = 'hidden';
                console.log('**************************');
                                          console.log('startCountDown '+startCountDown);
                console.log('**************************');

i++; 
                startCountDown -=1; 
     }
      else{
           

reset();
          console.log('else');
      }

 
   
}


function stopInterval() {
  clearInterval(interval);
                     console.log('clearInterval');

}

function reset(){
              console.log('reset');

     i=0,
     countDown,
 startCountDown = images_no;
    for(let x=0;x<images_count;x++){
                                          console.log('xy '+x);

              document.getElementsByClassName('images')[x].style.visibility = 'visible';

          }

}




 