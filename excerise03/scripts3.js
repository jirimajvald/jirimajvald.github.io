let names = ['Jiri', 'Michal', 'Marita', 'Evzen'];
names.forEach(mate =>{
    if(mate!=='Jiri'){
    $('ul').append(`<li>${mate}</li>`);
    } else {
    $('ul').append(`<li><b>${mate}</b></li>`);   
    }    
    })


