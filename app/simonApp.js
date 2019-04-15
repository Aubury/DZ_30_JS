

    let out = document.querySelector('.out');

    document.querySelector('.in').addEventListener('keydown', function(e){
        if(e.keyCode === 13){

         let p = document.createElement('p');
            if(out.hasChildNodes){

                p.innerHTML = this.value;
                out.insertBefore(p,out.firstElementChild);
            } else {

                p.innerHTML = this.value;
                out.appendChild(p);
            }
              this.value = '';
     }

    });
    
            