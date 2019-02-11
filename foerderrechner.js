// Tabelle Daten Einbinden
with (document) {
	write ('<script type="text/javascript" src="TabellenDaten.js"> <\/script>');
}

function and_or (text) {
    return text.replace(/und/, 'oder');
}


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
    value = value.replace(/,/g, '');
    value = value.replace(/\(/g, '');
    value = value.replace(/\)/g, '');
    value = value.toLocaleUpperCase();
    return value;
}

function create_tables () {
    let tables = document.formcalcbafa.getElementsByTagName('table');
    let num_tables = tables.length
    for (let i = 0; i < num_tables; i++) {
        if (tables[i].style.display == "none") {
            init_table (tables[i]);
        }         
    }
}

function init_table (table) {
    let Table = this[table.id];                             // Tabellenid auf Objekt referenzieren

    // Tabellenfuß erstellen
    let select = document.createElement('select');         // Tabellenfuß erstellen
    select.id = "select" + table.id;
    select.setAttribute("onchange", "if (this.selectedIndex) add_row(this);");

    let option = document.createElement('option');
    option.value = '';
    option.appendChild(document.createTextNode("--- " +and_or(Table.name)+ " hinzufügen ---"));
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

}


function num_table_rows(tableRows) {

    for(let i = 0; i < tableRows.length; i++) {
        tableRows[i].getElementsByTagName('td')[0].innerHTML = (i+1);
    }
}

function remove_row(startpoint) {
    let tr = startpoint.parentNode.parentNode
    let tbody = tr.parentNode;
    //tbody.removeChild(startpoint.parentNode.parentNode);
    $(tr).animate({  // Animieren und loeschen der Zeile
        padding: "0px",
        marginRight:'-10px',
        fontSize: "0px",
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


function add_row(entry) {
    
    let table_dom_Add = entry.parentNode.parentNode.parentNode.parentNode;
    console.log(table_dom_Add);
    let TableAdd = this[table_dom_Add.id];

    let astS= document.getElementById('select' + table_dom_Add.id);
    let SelIn = astS.options[astS.selectedIndex].text;
    let SelInV = astS.options[astS.selectedIndex].value;


        // Nummerierung der Zeilen
        let tableBody = table_dom_Add.getElementsByTagName('tbody')[0];
        if (!tableBody) {
            tableBody = document.createElement('tbody');
            table_dom_Add.appendChild(tableBody);
            tableBody = table_dom_Add.getElementsByTagName('tbody')[0];
        }
        console.log(tableBody);
        let row_num = tableBody.getElementsByTagName('tr').length;
        if (row_num) {
            num_table_rows(tableBody.getElementsByTagName("tr"));
        } else {
            table_dom_Add.getElementsByTagName('thead')[0].style.display = 'table-header-group'; // Tabellenkopf sichtbar machen
        }
        row_num ++;


        let newRow = document.createElement('tr'); // Neuer Tabelleneintrag erstellen


        let colNum = document.createElement('td'); // Spalte fuer Nummerierung erstellen
    
        let text = document.createTextNode(row_num);
        colNum.appendChild(text);
        let colNumIn = document.createElement('input');
        colNumIn.type = 'hidden';
        colNumIn.id = 'colThermischeSpeicher.nummer';
        colNumIn.value = row_num;
        colNum.appendChild(colNumIn); // Identifizerung der Nummernsplate einfuegen
        newRow.appendChild(colNum); // Nummerspalte in Tabelleneintrag einfuegen



        let colIn = document.createElement('td'); // Spalte fuer Input erstellen


        let newMain = document.createElement('div'); // Textfeld fuer Hauptext erstellen
        newMain.class = "haupttext";
        let MainOut = document.createElement('output'); // Ausgabe fuer Hauptext erstellen
        text = document.createTextNode(SelIn);
        MainOut.appendChild(text);          // Text in Ausgabe einfuegem   
        newMain.appendChild(MainOut);       // Ausgabe in Haupttext einfuegen
        colIn.appendChild(newMain);         // Haupttext in Inputspalte einfuegen
        
        if (SelInV) { // Ist ein valider Eintrag gewaelt worden?
            for (let a = 0; a< TableAdd.artikel.length; a++) {  // Schleife je Artikel
                let textunit; let textdes; let texttype; let maxlength; let helptext; let newDes; let desOut; let text; let newIn; let inIn; let inOut;

                if (SelInV == cleartext(TableAdd.artikel[a][0])) {

                    for (let p = 0; p < TableAdd.artikel[a][1].length; p++) {        // Schleife je Feld

                        console.log(TableAdd.artikel[a][1][p]);
                    
                        
                        textunit = TableAdd.artikel[a][1][p][0];
                        textdes = TableAdd.artikel[a][1][p][1];
                        texttype =  TableAdd.artikel[a][1][p][2];
                        maxlength =  TableAdd.artikel[a][1][p][3];
                        helptext =  TableAdd.artikel[a][1][p][4];
        

                        newDes = document.createElement('div'); // Textfeld fuer Beschreibung erstellen
                        newDes.class = "label";

                        desOut = document.createElement('output'); // Ausgabefeld erstellen
                        text = document.createTextNode(textunit);
                        desOut.appendChild(text);            // Text in Ausgabe einfuegem
                        newDes.appendChild(desOut);          // Ausgabe in Beschreibungstext einfuegen
                        colIn.appendChild(newDes);          // Beschreibungstext in Inputspalte
                
                
                        newIn = document.createElement('div'); // Textfeld fuer Eingabe erstellen
                        newIn.class = "feld";
                        inIn = document.createElement('Input'); // Eingabefeld erstellen
                        inIn.maxlength = maxlength;
                        inIn.class = "inputKlein numericOnly";
                        inIn.type = texttype[p];
                        inIn.name = 'textfeldname[]';
                        newIn.appendChild(inIn);      // Neues Eingabefeld anhaengen
                
                        let inOut = document.createElement('output'); // Ausgabefeld erstellen
                        text = document.createTextNode(textdes);
                        inOut.appendChild(text);            // Text in Ausgabe einfuegem
                        newIn.appendChild(inOut);          // Ausgabe in Beschreibungstext einfuegen
                        colIn.appendChild(newIn);          // Eingabefeld in Inputspalte einfuegen
                        
                        newRow.appendChild(colIn);          // Inputspalte in Tabelleneintrag einfeugen
                    }
                }
            }
    
            

        let colDel = document.createElement('td'); // Spalte fuer Loeschfunktion erstellen

        
        let newButton = document.createElement('input');  // Neuer Button "loeschen"
        newButton.type='Button';
        newButton.value="entfernen";
        newButton.setAttribute("onClick", "remove_row(this);" ); // Loeschfunktion
        colDel.appendChild(newButton);  // Neuer Button hinten anhaengen
        
        newRow.appendChild(colDel);          // Loeschpalte in Tabelleneintrag einfeugen
        tableBody.appendChild(newRow);      // Tabelleneintrag in tbody einfeugen


        entry.selectedIndex = 0;            // Auswahlliste auf ersten Eintrag setzen

    }




    if(false) {

        let astS= document.getElementById('select.thermischeSpeicher');
        let SelIn = astS.options[astS.selectedIndex].text;
        let SelInV = astS.options[astS.selectedIndex].value;

        if (SelInV) { // Ist ein valider Eintrag gewaelt worden?

            let textunit;
            let textdes;
            switch(SelIn) {
                case "Warmwasser-Schichtenspeicher":
                    textunit = "Volumen:";
                    textdes = "dm³ (V = 400,00 bis 4000,00 dm³)";
                case "Kaltwasserspeicher":
                    textunit = "Volumen:";
                    textdes = "dm³ (V = 500,00 bis 2000,00 dm³)";
                case "Eisspeicher: Betongehäuse mit Wärmeübertrager":
                    textunit = " Kapazität:";
                    textdes = "kWh (Q̇₀ = 150,00 bis 24000,00 kWh)";
                case "Latentwärmespeicher-Systeme: Behälter mit LWS (Kapsel)":
                    textunit = "Kapazität:";
                    textdes = "kWh (Q̇₀ = 60,00 bis 1400,00 kWh)";
            }

            // Nummerierung der Zeilen
            let tableBody = table_dom_Add.getElementsByTagName('tbody')[0];
            let row_num = tableBody.getElementsByTagName('tr').length;
            if (row_num) {
                num_table_rows(tableBody.getElementsByTagName("tr"));
            } else {
                table_dom_Add.getElementsByTagName('thead')[0].style.display = 'table-header-group'; // Tabellenkopf sichtbar machen
            }
            row_num ++;


            let newRow = document.createElement('tr'); // Neuer Tabelleneintrag erstellen


            let colNum = document.createElement('td'); // Spalte fuer Nummerierung erstellen
        
            let text = document.createTextNode(row_num);
            colNum.appendChild(text);
            let colNumIn = document.createElement('input');
            colNumIn.type = 'hidden';
            colNumIn.id = 'colThermischeSpeicher.nummer';
            colNumIn.value = row_num;
            colNum.appendChild(colNumIn); // Identifizerung der Nummernsplate einfuegen
            newRow.appendChild(colNum); // Nummerspalte in Tabelleneintrag einfuegen



            let colIn = document.createElement('td'); // Spalte fuer Input erstellen


            let newMain = document.createElement('div'); // Textfeld fuer Hauptext erstellen
            newMain.class = "haupttext";
            let MainOut = document.createElement('output'); // Ausgabe fuer Hauptext erstellen
            text = document.createTextNode(SelIn);
            MainOut.appendChild(text);          // Text in Ausgabe einfuegem   
            newMain.appendChild(MainOut);       // Ausgabe in Haupttext einfuegen
            colIn.appendChild(newMain);         // Haupttext in Inputspalte einfuegen
            

            let newDes = document.createElement('div'); // Textfeld fuer Beschreibung erstellen
            newDes.class = "label";
            let desOut = document.createElement('output'); // Ausgabefeld erstellen
            text = document.createTextNode(textunit);
            desOut.appendChild(text);            // Text in Ausgabe einfuegem
            newDes.appendChild(desOut);          // Ausgabe in Beschreibungstext einfuegen
            colIn.appendChild(newDes);          // Beschreibungstext in Inputspalte


            let newIn = document.createElement('div'); // Textfeld fuer Eingabe erstellen
            newIn.class = "feld";
            let inIn = document.createElement('Input'); // Eingabefeld erstellen
            inIn.maxlength = '7';
            inIn.class = "inputKlein numericOnly";
            inIn.type = 'text';
            inIn.name = 'textfeldname[]';
            newIn.appendChild(inIn);      // Neues Eingabefeld anhaengen

            let inOut = document.createElement('output'); // Ausgabefeld erstellen
            text = document.createTextNode(textdes);
            inOut.appendChild(text);            // Text in Ausgabe einfuegem
            newIn.appendChild(inOut);          // Ausgabe in Beschreibungstext einfuegen
            colIn.appendChild(newIn);          // Eingabefeld in Inputspalte einfuegen
            
            newRow.appendChild(colIn);          // Inputspalte in Tabelleneintrag einfeugen



            let colDel = document.createElement('td'); // Spalte fuer Loeschfunktion erstellen

            
            let newButton = document.createElement('input');  // Neuer Button "loeschen"
            newButton.type='Button';
            newButton.value="entfernen";
            newButton.setAttribute("onClick", "remove_row(this);" ); // Loeschfunktion
            colDel.appendChild(newButton);  // Neuer Button hinten anhaengen    
            table_dom_Add.parentNode.appendChild(newRow);  // Neue Zeile anhaengen
            
            newRow.appendChild(colDel);          // Loeschpalte in Tabelleneintrag einfeugen
            tableBody.appendChild(newRow);      // Tabelleneintrag in tbody einfeugen


            entry.selectedIndex = 0;            // Auswahlliste auf ersten Eintrag setzen

        }
    }
}