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
    
    block_text.innerHTML = Block.text;
   

    let option; let label_option;
    for (let i = 0; i < Block.artikel.length; i++) {
        option = document.createElement('input');
        option.type = "radio";
        option.name = "block_radio";
        option.className = "inputCheck";
        option.id = block.id +"select1";
        option.value = i + 1;
        option.onclick = function() {lev2_block(block.id, Block.artikel[i], 1) };

        label_option = document.createElement('label');
        label_option.setAttribute('for', block.id +"select1");
        label_option.innerHTML = Block.artikel[i][0];
        let div = document.createElement('p');
        div.appendChild(option);
        div.appendChild(label_option);

        block_text.appendChild(div);
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
    let next_lev = $.isArray(place[1][1][1]);
    for (let i = 1; i < place.length; i++) {
        option = document.createElement('input');
        option.type = 'radio';
        option.name = 'block_radio' + num3;
        option.className = 'inputCheck';
        option.id = blockid + 'select' + num3;
        option.value = i + 1;
        if (!next_lev) option.onclick = function() { lev3_block(blockid, place[i], num3 + 1)};
        else option.onclick = function() { lev2_block(blockid, place[i]) };

        let label_option = document.createElement('label');
        label_option.setAttribute('for', blockid + 'select' + num3);
        label_option.innerHTML = place[i][0];
        let div = document.createElement('p');
        div.appendChild(option);
        div.appendChild(label_option);

        block_text.appendChild(div);
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