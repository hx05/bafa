
// und in oder umwandeln
function and_or (text) {
    return text.replace(/und/, 'oder');
}


// Sonderzeichen loeschen
function cleartext (value) {
    value = value.replace(/\u00e4/g, 'ae');
    value = value.replace(/\u00c4/g, 'AE');
    value = value.replace(/\u00d4/g, 'oe');
    value = value.replace(/\u00e4/g, 'OE');
    value = value.replace(/\u00f6/g, 'ue');
    value = value.replace(/\u00d6/g, 'UE');
    value = value.replace(/\u00df/g, 'ss');
    value = value.replace(/ /g, '-');
    value = value.replace(/\./g, '');
    value = value.replace(/\,/g, '');
    value = value.replace(/\(/g, '');
    value = value.toLocaleUpperCase();
    return value;
}


// Prüfen ob eine Tabelle im html-code bereits angelegt ist
function create_tables () {
    let tables = document.formcalcbafa.getElementsByTagName('table');
    let num_tables = tables.length
    for (let i = 0; i < num_tables; i++) {
        if (!tables[i].className) {     // Klasse noch nicht definiert
            init_table (tables[i]);
        }         
    }
}


// Tabelle erstellen
function init_table (table) {                            
    let Table = this[table.id];                             // Tabellenid auf Objekt referenzieren


    // Tabellenfuß erstellen
    let select = document.createElement('select');         // Tabellenfuß erstellen
    select.id = 'select' + table.id;
    select.setAttribute('onchange', 'if (this.selectedIndex) add_row(this);');

    let option = document.createElement('option');
    option.value = '';
    option.appendChild(document.createTextNode('--- ' +and_or(Table.name)+ ' hinzufügen ---'));
    select.appendChild(option);
    for (let i = 0; i < Table.artikel.length; i++) {
        option = document.createElement('option');
        option.value = cleartext(Table.artikel[i][0]);
        option.appendChild(document.createTextNode(Table.artikel[i][0]));
        select.appendChild(option);
    }

    let td = document.createElement('td');
    td.colspan = 3;
    td.appendChild(select);

    let tr = document.createElement('tr');
    tr.appendChild(td);

    let food = document.createElement('tfoot');         // Tabellenfuß erstellen
    food.appendChild(tr);

    let table_dom = document.getElementById(table.id);     // Verbingung zum HTML-Element
    table_dom.style.display = 'table';
    table_dom.className = 'tableAnlage';
    table_dom.appendChild(food);


    // colgruop ersten
    let colg = document.createElement('colgroup');

    let col1 = document.createElement('col');
    col1.width = '5%';
    colg.appendChild(col1);
    let col2 = document.createElement('col');
    col2.width = '85%';
    colg.appendChild(col2);
    let col3 = document.createElement('col');
    col3.width = '10%';
    colg.appendChild(col3);

    table_dom.appendChild(colg);


    // Tabellenkopf erstellen
    let trhead = document.createElement('tr');
    
    let th1 = document.createElement('th');
    let textnr1 = document.createTextNode ('Nr');
    th1.appendChild(textnr1);
    trhead.appendChild(th1);

    th2 = document.createElement('th');
    let textnr2 = document.createTextNode (Table.name);
    th2.appendChild(textnr2);
    trhead.appendChild(th2);

    let th3 = document.createElement('th');
    trhead.appendChild(th3);

    let head = document.createElement('thead');
    head.appendChild(trhead);
    head.style.display = 'none';

    table_dom.appendChild(head);

    // Tabelle in eigen fieldset einbetten
    let fieldtable = document.createElement('fieldset');
    fieldtable.className = 'fieldtableAnlage';

    // Beschriftung
    // let label = document.createElement('label')
    // text = document.createTextNode(Table.name);
    // label.appendChild(text);
    // fieldtable.appendChild(label);

    let newplace = table_dom.parentNode;
    let clone = table_dom.cloneNode(true);
    fieldtable.appendChild(clone);
    newplace.replaceChild(fieldtable, table_dom);


    
}


// Tabellen Spalten nummerieren
function num_table_rows(tableRows) {

    for(let i = 0; i < tableRows.length; i++) {
        tableRows[i].getElementsByTagName('td')[0].innerHTML = (i+1);
    }
}


// Spalte loeschen
function remove_row(startpoint) {
    let tr = startpoint.parentNode.parentNode
    let tbody = tr.parentNode;
    $(tr).animate({  // Animieren und loeschen der Zeile
        padding: '0px',
        marginRight:'-10px',
        fontSize: '0px',
        opacity: 0.4,
      }, 250, function() {
          $(tr).remove();      
      });

    let rows = tbody.getElementsByTagName('tr');
    if (rows.length > 1) {     
        num_table_rows(rows);  // Nummerierung erneuern
    } else {
        let table = tbody.parentNode;
        let thead = table.getElementsByTagName('thead')[0];
        thead.style.display = 'none';
        table.appendChild(thead);       // Tabellenkopf ausblenden wenn keine Zeilen mehr da sind
    }
}


// Spalte hinzufuegen
function add_row(entry) {
    
    let table_dom_Add = entry.parentNode.parentNode.parentNode.parentNode;
    let TableAdd = this[table_dom_Add.id];

    let astS= document.getElementById('select' + table_dom_Add.id);
    let SelIn = astS.options[astS.selectedIndex].text;
    let SelInV = astS.options[astS.selectedIndex].value;


    // erstellen des Body wenn nicht vorhanden
    let tableBody = table_dom_Add.getElementsByTagName('tbody')[0];
    if (!tableBody) {
        tableBody = document.createElement('tbody');
        table_dom_Add.appendChild(tableBody);
        tableBody = table_dom_Add.getElementsByTagName('tbody')[0];

        // Optionen einfuegen
        if (TableAdd.option) {
            let divtable = table_dom_Add.parentNode;

            // Beschreibung
            let divccheck = document.createElement('div');
            let text = document.createTextNode(TableAdd.option[0]);
            divccheck.appendChild(text);

            divtable.appendChild(divccheck);

            // Abhackfeld einfuegen
            let inputcheck = document.createElement('input');
            inputcheck.type = "checkbox";
            inputcheck.className = "inputcheck";
            //debugger;
            inputcheck.name = cleartext(TableAdd.option[0]);
            inputcheck.value = true;
            
            let label = document.createElement('label');
            label.appendChild(inputcheck);
            
            text = document.createTextNode(TableAdd.option[1] + " " + TableAdd.option[2]);
            label.appendChild(text);

            divtable.appendChild(label);
        }
    }


    // Nummerierung der Zeilen
    let row_num = tableBody.getElementsByTagName('tr').length;
    if (row_num) {                                      
        num_table_rows(tableBody.getElementsByTagName("tr"));
    } else {
        table_dom_Add.getElementsByTagName('thead')[0].style.display = 'table-header-group'; // Tabellenkopf sichtbar machen
    }
    row_num ++;


    // Eintrag erstellen
    let newRow = document.createElement('tr'); // Neuer Tabelleneintrag erstellen


    let colNum = document.createElement('td'); // Spalte fuer Nummerierung erstellen

    let text = document.createTextNode(row_num);
    colNum.appendChild(text);
    let colNumIn = document.createElement('input');
    colNumIn.type = 'hidden';
    colNumIn.id = table_dom_Add.id;
    colNumIn.value = row_num;
    colNum.appendChild(colNumIn); // Identifizerung der Nummernsplate einfuegen
    newRow.appendChild(colNum); // Nummerspalte in Tabelleneintrag einfuegen



    let colIn = document.createElement('td'); // Spalte fuer Input erstellen


    let newMain = document.createElement('div'); // Textfeld fuer Hauptext erstellen
    newMain.className = 'haupttext';
    let MainOut = document.createElement('output'); // Ausgabe fuer Hauptext erstellen
    text = document.createTextNode(SelIn);
    MainOut.appendChild(text);          // Text in Ausgabe einfuegem   
    newMain.appendChild(MainOut);       // Ausgabe in Haupttext einfuegen
    colIn.appendChild(newMain);         // Haupttext in Inputspalte einfuegen
    
    if (SelInV) { // Ist ein valider Eintrag gewaelt worden?
        for (let a = 0; a< TableAdd.artikel.length; a++) {  // Schleife je Artikel

            if (SelInV == cleartext(TableAdd.artikel[a][0])) {

                let getitfrom = TableAdd.artikel[a][0];
                //inseret_fields (colIn, getitfrom);
                // Variablen Initialisieren
                let textunit; let textdes; let maxlength; let helptext; let newDes; let desOut; let text; let newIn; let inIn; let inOut;

                for (let p = 0; p < TableAdd.artikel[a][1].length; p++) {        // Schleife je Feld

                    textunit = TableAdd.artikel[a][1][p][0];
                    textdes = TableAdd.artikel[a][1][p][1];
                    maxlength =  TableAdd.artikel[a][1][p][2];
                    helptext =  TableAdd.artikel[a][1][p][3];
    
                    // Beschreibung vorne
                    newDes = document.createElement('div');         // Textfeld fuer Beschreibung erstellen
                    newDes.className = 'label';
                    desOut = document.createElement('output');      // Ausgabefeld erstellen
                    if (helptext) {
                        desOut.className = 'tooltip';
                        var id = Math.floor(Math.random() * 1000000000); 
                        desOut.setAttribute('onClick', 'create_tooltip(\'' + table_dom_Add.id + id + '\');');
                        let helpspan = document.createElement('span');
                        helpspan.className = 'tooltiptext';
                        helpspan.id = table_dom_Add.id + id;
                        text = document.createTextNode(helptext);
                        helpspan.appendChild(text);
                        desOut.appendChild(helpspan);
                    }
                    text = document.createTextNode(textunit);
                    desOut.appendChild(text);                       // Text in Ausgabe einfuegen
                    newDes.appendChild(desOut);                     // Ausgabe in Beschreibungstext einfuegen

                    colIn.appendChild(newDes);                      // Beschreibungstext in Inputspalte
            
                    // Eingabe
                    newIn = document.createElement('div');          // Textfeld fuer Eingabe erstellen
                    newIn.className = "feld";
                    inIn = document.createElement('input');         // Eingabefeld erstellen
                    inIn.maxlength = maxlength;
                    inIn.className = "inputKleinnumericOnly";
                    inIn.type = 'text';
                    inIn.name = 'textfeldname[]';
                    newIn.appendChild(inIn);                        // Neues Eingabefeld anhaengen
            

                    // Beschreibung hinten
                    inOut = document.createElement('output');        // Ausgabefeld erstellen
                    text = document.createTextNode(textdes);
                    inOut.appendChild(text);                        // Text in Ausgabe einfuegem
                    newIn.appendChild(inOut);                       // Ausgabe in Beschreibungstext einfuegen
                    colIn.appendChild(newIn);                       // Eingabefeld in Inputspalte einfuegen
                    
                }
            newRow.appendChild(colIn);                      // Inputspalte in Tabelleneintrag einfeugen
            }
        }

        

    let colDel = document.createElement('td'); // Spalte fuer Loeschfunktion erstellen

    
    let newButton = document.createElement('input');  // Neuer Button "loeschen"
    newButton.type='Button';
    newButton.value='entfernen';
    newButton.setAttribute('onClick', 'remove_row(this);' ); // Loeschfunktion
    colDel.appendChild(newButton);  // Neuer Button hinten anhaengen
    
    newRow.appendChild(colDel);          // Loeschpalte in Tabelleneintrag einfeugen
    tableBody.appendChild(newRow);      // Tabelleneintrag in tbody einfeugen


    entry.selectedIndex = 0;            // Auswahlliste auf ersten Eintrag setzen

    }
}

function create_tooltip (id) {
    let tooltip = document.getElementById(id);
    tooltip.classList.toggle("show");
}


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
    let label_block = document.createElement('label')
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
        option.value = i+1;
        option.onclick = function() {lev2_block(block.id, Block.artikel[i], 1) };
        label_option = document.createElement('label');
        label_option.innerHTML = Block.artikel[i][0]+"</br>";
        label_option.appendChild(option);
        block_text.appendChild(label_option);
    ;}

    block_dom.appendChild(block_text);

};

function lev2_block (blockid, place, firstrun) {
    if (firstrun) {
        var num3 = 2;
    } else {
        var num3 = 3;
    }
    let block_text = document.createElement('div');
    block_text.className = "haupttext";
    let next_lev = $.isArray(place[1][1][1]);
    for (let i = 1; i < place.length; i++) {
        option = document.createElement('input');
        option.type = "radio";
        option.name = "block_radio" + num3;
        option.className = "inputCheck";
        option.id = blockid +"select" + num3;
        option.value = i + 1;
        if (!next_lev) option.onclick = function() { lev3_block(blockid, place[i]) };
        else option.onclick = function() { lev2_block(blockid, place[i]) };
        let label_option = document.createElement('label');
        label_option.innerHTML = place[i][0]+"</br>";
        label_option.appendChild(option);
        block_text.appendChild(label_option);
    };
    add_block (blockid, block_text, num3);
};


function lev3_block (blockid, place) {
    let block_text = document.createElement('div');
    block_text.className = "haupttext";
    for (let p = 1; p < place.length; p++) {        // Schleife je Feld

        textunit = place[p][0];
        textdes = place[p][1];
        maxlength = place[p][2];
        helptext = place[p][3];

        
        // Beschreibung vorne
        newDes = document.createElement('span');         // Textfeld fuer Beschreibung erstellen
        newDes.className = 'label';
        desOut = document.createElement('output');      // Ausgabefeld erstellen
        if (helptext) {
            desOut.className = 'tooltip';
            var id = Math.floor(Math.random() * 1000000000); 
            desOut.setAttribute('onClick', 'create_tooltip(\'' + blockid + id + '\');');
            let helpspan = document.createElement('span');
            helpspan.className = 'tooltiptext';
            helpspan.id = blockid + id;
            text = document.createTextNode(helptext);
            helpspan.appendChild(text);
            desOut.appendChild(helpspan);
        }
        text = document.createTextNode(textunit);
        desOut.appendChild(text);                       // Text in Ausgabe einfuegen
        newDes.appendChild(desOut);                     // Ausgabe in Beschreibungstext einfuegen

        block_text.appendChild(newDes);                 // Beschreibungstext in Inputspalte

        // Eingabe
        newIn = document.createElement('span');          // Textfeld fuer Eingabe erstellen
        newIn.className = "feld";
        inIn = document.createElement('input');         // Eingabefeld erstellen
        inIn.maxlength = maxlength;
        inIn.className = "inputKleinnumericOnly";
        inIn.type = 'text';
        inIn.name = 'textfeldname[]';
        newIn.appendChild(inIn);                        // Neues Eingabefeld anhaengen


        // Beschreibung hinten
        inOut = document.createElement('output');        // Ausgabefeld erstellen
        text = document.createTextNode(textdes);
        inOut.appendChild(text);                        // Text in Ausgabe einfuegem
        newIn.appendChild(inOut);                       // Ausgabe in Beschreibungstext einfuegen
        block_text.appendChild(newIn);                  // Eingabefeld in Inputspalte einfuegen
    }
    add_block (blockid, block_text, 4);
}

function add_block (blockid, new_block, max) {
    let block_dom = document.getElementById(blockid);
    let blocks = block_dom.getElementsByTagName('div').length;
    if (blocks > max) {
        for (let s = 2; s < blocks; s++) {
            block_dom.removeChild(block_dom.lastChild);
        };
    };
    if (blocks >= max) {
        let replace = block_dom.lastChild;
        block_dom.replaceChild(new_block, replace);
    } else block_dom.appendChild(new_block);
};

function inseret_fields (inseretin, getitfrom) {
    // Variablen Initialisieren
    let textunit; let textdes; let maxlength; let helptext; let newDes; let desOut; let text; let newIn; let inIn; let inOut;

    for (let p = 1; p < getitfrom; p++) {        // Schleife je Feld

        textunit = getitfrom[p][0];
        textdes = getitfrom[p][1];
        maxlength = getitfrom[p][2];
        helptext = getitfrom[p][3];    

        // Beschreibung vorne
        newDes = document.createElement('div');         // Textfeld fuer Beschreibung erstellen
        newDes.className = 'label';
        desOut = document.createElement('output');      // Ausgabefeld erstellen
        if (helptext) {
            desOut.className = 'tooltip';
            var id = Math.floor(Math.random() * 1000000000); 
            desOut.setAttribute('onClick', 'create_tooltip(\'' + table_dom_Add.id + id + '\');');
            let helpspan = document.createElement('span');
            helpspan.className = 'tooltiptext';
            helpspan.id = table_dom_Add.id + id;
            text = document.createTextNode(helptext);
            helpspan.appendChild(text);
            desOut.appendChild(helpspan);
        }
        text = document.createTextNode(textunit);
        desOut.appendChild(text);                       // Text in Ausgabe einfuegen
        newDes.appendChild(desOut);                     // Ausgabe in Beschreibungstext einfuegen

        inseretin.appendChild(newDes);                      // Beschreibungstext in Inputspalte

        // Eingabe
        newIn = document.createElement('div');          // Textfeld fuer Eingabe erstellen
        newIn.className = "feld";
        inIn = document.createElement('input');         // Eingabefeld erstellen
        inIn.maxlength = maxlength;
        inIn.className = "inputKleinnumericOnly";
        inIn.type = 'text';
        inIn.name = 'textfeldname[]';
        newIn.appendChild(inIn);                        // Neues Eingabefeld anhaengen


        // Beschreibung hinten
        inOut = document.createElement('output');        // Ausgabefeld erstellen
        text = document.createTextNode(textdes);
        inOut.appendChild(text);                        // Text in Ausgabe einfuegem
        newIn.appendChild(inOut);                       // Ausgabe in Beschreibungstext einfuegen
        colIn.appendChild(newIn);                       // Eingabefeld in Inputspalte einfuegen
        
        newRow.appendChild(colIn);                      // Inputspalte in Tabelleneintrag einfeugen
    }
}