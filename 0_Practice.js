let a = 1;

while(a>0){
    console.log('Running tasks');
    task1();

}

function task1() {
    document.getElementsByClassName('title-tabs')[0].click();
    console.log('Running task 1');
    task2(); 
  setTimeout(function() {           
  }, 2000);
}

function task2() {
    setTimeout(function() {
        document.getElementsByClassName('title-tabs')[1].click();
        console.log('Running task 2');
        task1();
    }, 2000);
  }
