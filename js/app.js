$(document).foundation();

//alert('Hello world');
//for(let i=0;i<10000;i++)
//console.log('Pozdrav svijetu ' + i);

function odradiPosao(){
    let ime = document.getElementById('ime').value;
    //console.log(ime);

    document.getElementById('odgovor').innerHTML=ime;


    return false;
}


