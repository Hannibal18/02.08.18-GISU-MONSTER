var x= document.getElementById('shippingToggle');
x.style.display = 'none';
function shipping(){
    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
}

var y=document.getElementById('searchToggle');
y.style.display = 'none';
function search(){
    if(y.style.display === 'none'){
        y.style.display = 'block';
    } else{
        y.style.display = 'none';
    }
}

var z=document.getElementById('bagToggle');
z.style.display = 'none';
function bag(){
    if(z.style.display ==='none'){
        z.style.display = 'block'
    } else{
        z.style.display = 'none';
    }
}

var h=document.getElementById('hamburger');
h.style.display = 'none';
function ham(){
    if(h.style.display ==='none'){
        h.style.display = 'block';
    } else{
        h.style.display = 'none';
    }
}