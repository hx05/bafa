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
    let div = document.createElement('div');
    div.className = 'custom-select';

    let select = document.createElement('select');         // Tabellenfuß erstellen
    select.id = 'select' + table.id;
    select.setAttribute('onchange', 'if (this.selectedIndex) add_row(this.parentNode);');

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
    td.setAttribute('colspan', 3);

    div.appendChild(select);
    td.appendChild(div);

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



    let textnr1 = document.createTextNode ('Nr.');
    th1.appendChild(textnr1);
    trhead.appendChild(th1);

    th2 = document.createElement('th');
    

    if (Table.hilfe) { // Ist Hilfetext vorhanden Tooltipp erstellen
        init_help (th2, table.id, Table.hilfe);
    }

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

    
    tableBody = document.createElement('tbody');
    table_dom.appendChild(tableBody);
    




    let newplace = table_dom.parentNode;
    let clone = table_dom.cloneNode(true);
    fieldtable.appendChild(clone);
    newplace.replaceChild(fieldtable, table_dom);

    // Optionen einfuegen
    if (Table.option) {

        // Beschreibung
        let divdes = document.createElement('div');
        let text = document.createTextNode(Table.option[0]);
        divdes.appendChild(text);

        fieldtable.appendChild(divdes);

        // Abhackfeld einfuegen

        let label = document.createElement('label');
        text = document.createTextNode(Table.option[1] + " " + Table.option[2]);
        label.appendChild(text);
        label.className = "containerBox";

        let inputcheck = document.createElement('input');
        //inputcheck.className = "inputcheck";
        inputcheck.type = "checkbox";
        inputcheck.name = cleartext(Table.option[0]);
        //inputcheck.value = true;
        inputcheck.onchange = function checkbox_checked () {
            if (this.checked) {
                create_outputfields (this, Table.option[3]);
                calc_option ();
            } else {
                let outputfield = document.getElementById('freikuehlout');
                let oldvalue = Number(outputfield.dataset.out);
                set_output(0, oldvalue, outputfield, false);
                this.parentNode.removeChild(this.parentNode.lastChild);
            }
        };
        label.appendChild(inputcheck);

        span = document.createElement('span');
        span.className = 'checkbox';
        label.appendChild(span);
        

        //let divcheck = document.createElement('div');

        fieldtable.appendChild(label);



    }
    
}

function create_outputfields (element, text) {

    let div = document.createElement('div');

    // Beschreibung hinten 
    inOut = document.createElement('output');           // Ausgabefeld erstellen
    text = document.createTextNode(text);               // Beschreibung einfuegen
    inOut.appendChild(text);
    //inOut.style.color = 'green';
    div.appendChild(inOut);                             // Ausgabe in Beschreibungstext einfuegen
    
    // Ausgabe
    inOutput = document.createElement('output');        // Ausgabefeld erstellen
    inOutput.className = 'ausgabe';
    inOutput.style.color = 'green';
    inOutput.id = 'freikuehlout';
    div.appendChild(inOutput);                       // Ausgabe in Beschreibungstext einfuegen
    element.parentNode.appendChild(div);
}


// Tabellen Spalten nummerieren
function num_table_rows(tableRows) {
    for(let i = 0; i < tableRows.length; i++) {
        tableRows[i].getElementsByTagName('td')[0].innerHTML = (i+1);
    }
}


// Spalte loeschen
function remove_row(startpoint) {
    //debugger;
    let tr = startpoint.parentNode.parentNode
    let tbody = tr.parentNode;

    // Evtl. eingegebene Werte loeschen
    let output = 0;
    let outputfield = startpoint.parentNode.previousElementSibling.lastChild.lastChild;
    let oldvalue = outputfield.dataset.out;
    if (!oldvalue) oldvalue = 0;
    let err = false;
    set_output(output, oldvalue, outputfield, err);

    /*$(tr).animate({  // Animieren und loeschen der Zeile
        padding: '0px',
        marginRight:'-10px',
        fontSize: '0px',
        opacity: 0.4,
      }, 250, function() {
          $(tr).remove();      
      });
    */
    tbody.removeChild(tr);

    let rows = tbody.getElementsByTagName('tr');
    num_table_rows(rows);  // Nummerierung erneuern
    if (!rows.length) {
        let table = tbody.parentNode;
        let thead = table.getElementsByTagName('thead')[0];
        thead.style.display = 'none';
        table.appendChild(thead);       // Tabellenkopf ausblenden wenn keine Zeilen mehr da sind
    }
}


// Spalte hinzufuegen
function add_row(entry) {
    //debugger;
    let table_dom_Add = entry.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let TableAdd = this[table_dom_Add.id];

    // entfällt wegen Umstellung auf Listengenerierung durch Javascript
    //let table_dom_Add = entry.parentNode.parentNode.parentNode.parentNode;
    //let astS= document.getElementById('select' + table_dom_Add.id); // Auswahlliste suchen
    //let SelIn = astS.options[astS.selectedIndex].text;              // Text der ausgewaehlten Zeile speichern
    //let SelInV = astS.options[astS.selectedIndex].value;            // Wert der ausgewaehlten Zeile speichern

    // Aus der Javascript Funktion create_lists
    let SelIn = entry.innerHTML;
    let SelInV = entry.dataset.value;


    let tableBody = table_dom_Add.getElementsByTagName('tbody')[0];


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
    
    
    for (let a = 0; a< TableAdd.artikel.length; a++) {  // Schleife je Artikel

        if (SelInV == cleartext(TableAdd.artikel[a][0])) {
        let getitfrom = TableAdd.artikel[a];
        inseret_fields (colIn, getitfrom, table_dom_Add.id);
        newRow.appendChild(colIn);                      // Inputspalte in Tabelleneintrag einfeugen
        }
    }
        

    let colDel = document.createElement('td'); // Spalte fuer Loeschfunktion erstellen

    
    let newButton = document.createElement('input');  // Neuer Button "loeschen"
    newButton.type = 'Button';
    newButton.value = 'entfernen';
    newButton.className = 'clearbutton';
    newButton.setAttribute('onClick', 'remove_row(this);' ); // Loeschfunktion
    colDel.appendChild(newButton);  // Neuer Button hinten anhaengen
    
    newRow.appendChild(colDel);          // Loeschpalte in Tabelleneintrag einfeugen
    tableBody.appendChild(newRow);      // Tabelleneintrag in tbody einfeugen

    entry.selectedIndex = 0;            // Auswahlliste auf ersten Eintrag setzen
}


// Felder einfuegen
function inseret_fields (inseretin, getitfrom, id_from) {
    // Variablen Initialisieren
    let textunit; let textdes; let maxlength; let helptext; let newDes; let desOut; let text; let newIn; let inIn; let inOut; let minmax; let calc;
    let fields = getitfrom.length;

    for (let p = 1; p < fields; p++) {        // Schleife je Feld

        textunit = getitfrom[p][0];
        textdes = getitfrom[p][1];
        maxlength = getitfrom[p][2];
        helptext = getitfrom[p][3];
        minmax = getitfrom[p][4];
        calc = getitfrom[p][5];
        fieldname = getitfrom[p][6];

        // Beschreibung vorne
        newDes = document.createElement('p');         // Textfeld fuer Beschreibung erstellen
        newDes.className = 'label';
        desOut = document.createElement('output');      // Ausgabefeld erstellen

        if (helptext) { // Ist Hilfetext vorhanden Tooltipp erstellen
            init_help (desOut, id_from, helptext);
        }

        text = document.createTextNode(textunit);
        desOut.appendChild(text);                       // Text in Ausgabe einfuegen
        newDes.appendChild(desOut);                     // Ausgabe in Beschreibungstext einfuegen

        inseretin.appendChild(newDes);                      // Beschreibungstext in Inputspalte


        // Eingabe
        newIn = document.createElement('p');          // Textfeld fuer Eingabe erstellen
        newIn.className = "feld";
        inIn = document.createElement('input');         // Eingabefeld erstellen
        inIn.maxlength = maxlength;
        inIn.className = "inputKlein numericOnly";
        inIn.type = 'text';
        inIn.name = fieldname;
        inIn.setAttribute('onInput', 'calc(this); calc_option()');
        inIn.dataset.minmax = minmax;
        inIn.dataset.calc = calc;
        newIn.appendChild(inIn);                        // Neues Eingabefeld anhaengen


        // Beschreibung hinten
        inOut = document.createElement('output');        // Ausgabefeld erstellen
        text = document.createTextNode(textdes);
        inOut.appendChild(text);                        // Text in Ausgabe einfuegem
        newIn.appendChild(inOut);                       // Ausgabe in Beschreibungstext einfuegen

        // Ausgabe
        inOutput = document.createElement('output');        // Ausgabefeld erstellen
        inOutput.className = "ausgabe";
        newIn.appendChild(inOutput);                       // Ausgabe in Beschreibungstext einfuegen

        inseretin.appendChild(newIn);                   // Eingabefeld in Inputspalte einfuegen
    }
}

function create_lists () {
    let open = false;
    // Auswahlliste
    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];

    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    //a.dataset.value = selElmnt.options[selElmnt.selectedIndex].value;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.dataset.value = selElmnt.options[j].value;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    //h.dataset.value = this.value;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    add_row(this);
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        open = true;
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }

    function closeAllSelect(elmnt) {
        //debugger;
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
    
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    if (open) {
        document.addEventListener("click", closeAllSelect);
    } else {
        document.removeEventListener("click", closeAllSelect);
    }
}