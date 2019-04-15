document.querySelector('#add').addEventListener('click', function(){

  let text = document.querySelector('#text'),
      table = document.querySelector('table');
      
      for(let i = 0; i < table.rows.length; i++){

        for(let j = 0; j < table.rows[i].cells.length; j++){

            if(table.rows[i].cells[j].innerHTML === '' ){

                table.rows[i].cells[j].innerHTML = text.value;
                text.value = '';
                return;
            }else{
            
                continue;
            }
        }
      }


});