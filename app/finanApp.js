document.querySelector('#button').addEventListener('click',function(){
 
  let discript =  document.querySelector('#discript'),
      price = document.querySelector('#price'),
      list = document.querySelector('.list'),
      all = document.querySelector('#all'),
      p = document.createElement('p'),
      date = new Date();

      if(all.innerHTML == ''){

        all.innerHTML = price.value;
      
    }else{

        let newValue = parseInt(all.innerText) + parseInt(price.value);
        all.innerHTML =  newValue;
    }
     
     p.innerHTML =  date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear() + ' -- ' + discript.value + ' -- ' + price.value;
     list.appendChild(p);
     discript.value = '';
     price.value = '';
});