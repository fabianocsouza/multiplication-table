function multiplicationTableGenerator(){
    const select = document.getElementById('outcome');
    const value = document.getElementById('number').value;

    if(value.length == ""){
        alert('Por favor,digite um número! ⚠');
    }else{
        select.innerHTML = ' ';

        const number = Number(value);
        let count = 1;

        while(count <= 10){
            const item = document.createElement('option');
            item.innerText = `${number} x ${count} = ${number*count}`;
            item.value = `${count}`
            select.appendChild(item);
            count++;  
        }
    }

    console.log(select);
    
}