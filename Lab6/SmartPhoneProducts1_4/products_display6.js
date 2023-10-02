//define store name and push it to the DOM in the top title
const store_name="Jessica Matsuda";
let first_name = "Jessica";
let last_name = "Matsuda";
top_title.innerHTML=(store_name+"'s Used Smart Phone Store");


//send store name info to the footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");


//initialize hits and spins and send to the DOM
let hits=0;
let spins=0;
//let wins;
let over_half=false;
hits_san.innerHTML=hits;
spins_span.innerHTML=spins;



//this should be two functions or more but... it changes the item name to rotate for the images and updates
function changeClassName(element){
    element.className = 'item rotate';
    spins=spins+1;
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML=spins;
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
}

//this should be two functions or more but... it changes the item name by removing the rotate for the images and
function resetClassName(element){
    element.className='item';
    hits=hits+=2;
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML=spins;
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);

}