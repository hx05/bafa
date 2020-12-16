// Blöcke zur auswahl des Kälteerzeugers
// Zuletzt bearbeitet am 14.12.20

function create_block () {
    let blocks = document.formcalcbafa.getElementsByTagName('fieldset');
    let num_blocks = blocks.length
    for (let i = 0; i < num_blocks; i++) {
        if (!blocks[i].className) {     // Klasse noch nicht definiert
            init_block (blocks[i]);
        }         
    }
}



// Block erstellen
function init_block (block) {                            
    let Block = this[block.id];                             // Blockid auf Objekt referenzieren

    let block_dom = document.getElementById(block.id);     // Verbingung zum HTML-Element
    block_dom.className = "fieldblock";

    // Beschriftung
    let label_block = document.createElement('legend');

    if (Block.hilfe) { // Ist Hilfetext vorhanden Tooltipp erstellen
         init_help (label_block, block.id, Block.hilfe);
    }

    text = document.createTextNode(Block.name);
    label_block.appendChild(text);
    block_dom.appendChild(label_block);

    let block_text = document.createElement('div');
    block_text.className = "haupttext";

    let main_text = document.createElement('main');
    main_text.innerHTML = Block.text;
    block_text.appendChild(main_text);
   

    let option; let label_option; let span;
    for (let i = 0; i < Block.artikel.length; i++) {

        label_option = document.createElement('label');
        label_option.innerHTML = Block.artikel[i][0];
        label_option.className = "containerCheck";

        option = document.createElement('input');
        option.type = "radio";
        option.name = "block_radio";
        option.className = "inputCheck";
        option.id = block.id +"select1";
        option.value = i + 1;

        let next_lev = $.isArray(Block.artikel[i][1][1]);
        if (next_lev)   option.onclick = function() {lev2_block(block.id, Block.artikel[i], 1)};
        else            option.onclick = function() {lev3_block(block.id, Block.artikel[i], 2)};
        label_option.appendChild(option);

        span = document.createElement('span');
        span.className = 'checkmark';
        label_option.appendChild(span);


        block_text.appendChild(label_option);
    ;}

    block_dom.appendChild(block_text);

};


// Zwischenblock(s) einfuegen
function lev2_block (blockid, place, firstrun) {
    if (firstrun) {
        var num3 = 2;
    } else {
        var num3 = 3;
    }
    let block_text = document.createElement('div');
    block_text.className = 'haupttext';
    
    let option; let label_option; let span;
    for (let i = 1; i < place.length; i++) {
        let next_lev = $.isArray(place[i][1][1]);
        label_option = document.createElement('label');
        label_option.innerHTML = place[i][0];
        label_option.className = "containerCheck";

        option = document.createElement('input');
        option.type = 'radio';
        option.name = 'block_radio' + num3;
        option.className = 'inputCheck';
        option.id = blockid + 'select' + num3;
        option.value = i + 1;
        if (next_lev)  option.onclick = function() { lev3_block(blockid, place[i])};
        else           option.onclick = function() { lev2_block(blockid, place[i], num3 + 1 ) };
        label_option.appendChild(option);

        span = document.createElement('span');
        span.className = 'checkmark';
        label_option.appendChild(span);


        block_text.appendChild(label_option);
    };
    block_text.insertBefore(document.createElement('hr'), block_text.firstChild);
    add_block (blockid, block_text, num3);
};


// Abschlussblock
function lev3_block (blockid, place, max) { 
    let block_text = document.createElement('div');
    block_text.className = 'haupttext';
    inseret_fields (block_text, place, blockid);
    block_text.insertBefore(document.createElement('hr'), block_text.firstChild);
    add_block (blockid, block_text, max);
}


// Neu erstellen Block einfuegen und alte Blocks gegebenfalls loeschen
function add_block (blockid, new_block, max) {
    let block_dom = document.getElementById(blockid);
    if (document.getElementsByName('kaelteerzeuger')[0]) {
        let output = 0;
        let outputfield = document.getElementsByName('kaelteerzeuger')[0].nextElementSibling.nextElementSibling;
        //let oldvalue = outputfield.dataset.out;
        //if (!oldvalue) oldvalue = 0;
        let err = false;
        set_output(output, outputfield, err); 
    };
    let blocks = block_dom.getElementsByTagName('div').length;
    if (blocks > max) {
        for (let s = max; s < blocks; s++) {
            block_dom.removeChild(block_dom.lastChild);
        };
    };
    if (blocks >= max) {
        //debugger;
        let replace = block_dom.lastChild;
        block_dom.replaceChild(new_block, replace);
    } else block_dom.appendChild(new_block);
};