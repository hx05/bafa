// Allgemeine Berechnungen und intergration der Eventlistener ins HTML-Document
// Zuletzt bearbeitet am 11.01.21

// und in oder umwandeln
function and_or(text) {
    return text.replace(/und/g, 'oder');
}


// Sonderzeichen loeschen
function cleartext(value) {
    value = value.replace(/\u00e4/gi, 'ae');
    value = value.replace(/\u00c4/gi, 'AE');
    value = value.replace(/\u00fc/gi, 'ue');
    value = value.replace(/\u00dc/gi, 'UE');
    value = value.replace(/\u00f6/gi, 'oe');
    value = value.replace(/\u00d6/gi, 'OE');
    value = value.replace(/\u00df/gi, 'ss');
    value = value.replace(/ /g, '-');
    value = value.replace(/\./g, '');
    value = value.replace(/\,/g, '');
    value = value.replace(/\(/g, '');
    value = value.toLocaleUpperCase();
    return value;
}


function create_tooltip(id) {
    let tooltip = document.getElementById(id);
    tooltip.classList.toggle("show");
}


// Hilfetext in HTML einfuegen
function init_help(block, id_from, helptext) {
    block.className = 'tooltipbafa';
    let id = Math.floor(Math.random() * 1000000000);
    block.setAttribute('onClick', 'create_tooltip(\'' + id_from + id + '\');');
    let helpspan = document.createElement('span');
    helpspan.className = 'tooltiptext';
    helpspan.id = id_from + id;
    text = document.createTextNode(helptext);
    helpspan.appendChild(text);
    block.appendChild(helpspan);
}


function calcluefter(element) {
    let newInput = parseInt(element.value);
    let minmax = element.dataset.minmax === 'false' ? false : JSON.parse("[" + element.dataset.minmax + "]");
    let calc = element.dataset.calc === 'false' ? false : JSON.parse("[" + element.dataset.calc + "]");
    let outputfield = element.nextElementSibling.nextElementSibling;
    let output = '';
    let err = false;
    if (newInput) {
        outputfield.style.color = 'green';
        output = newInput * calc;
        element.nextElementSibling.value = ''; // Evtl. vorher ausgegeben Warnung loeschen
        if (output < minmax[0]) {
            output = minmax[0];
        } else if (output > minmax[1]) {
            output = minmax[1];
            element.nextElementSibling.value = ' Maximal ' + euro(minmax[1]) + ' Förderung';
        }

    }

    set_output(output, outputfield, err);
}



function calc(element) {
    let newInput = parseInt(element.value);
    let minmax = element.dataset.minmax === 'false' ? false : JSON.parse("[" + element.dataset.minmax + "]");
    let calc = element.dataset.calc === 'false' ? false : JSON.parse("[" + element.dataset.calc + "]");
    let outputfield = element.nextElementSibling.nextElementSibling;
    let output = 0;
    let err = false;

    if (minmax) { // Grenzen gesetzt

        if (newInput < minmax[0]) {  // Untergrenze überschritten

            err = "Förderung erst ab " + minmax[0] + element.nextElementSibling.value;
            newInput = 0;

        } else if (newInput > minmax[1]) { // Obergrenze Überschritten

            err =  "Förderung bis maximal " + minmax[1] + element.nextElementSibling.value;
            newInput = minmax[1];
        }
    };

    if (calc || !calc && !minmax) {

        outputfield.style.color = 'green';

        if (calc.length == 3) {         // Förderung für stationäre Anlagen und Komponenten      
            output = (calc[0] * Math.pow(newInput, calc[1]) + calc[2]) * newInput;
        }



        else if (calc.length == 2 || !calc && !minmax) {    // Förderung Kühlsolekreisläufe

            let length;
            let diameter;
            //debugger;

            if (element.nextElementSibling.value == " lfdm") { // erstes Feld: Länge
                length = newInput;
                diameter = element.parentNode.nextElementSibling.nextElementSibling.firstChild.value;

                outputfield = element.parentNode.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling; // Ausgabefeld umschreiben
                let outlenght = element.nextElementSibling.nextElementSibling.nextElementSibling;
                if (!length) {
                    
                    outlenght.style.color = 'red';
                    outlenght.value = "Bitte länge angeben";
                } else outlenght.value = '';

                if (!diameter) {
                    err = "Bitte Durchmesser angeben";
                    outputfield.nextElementSibling.style.color = 'red';
                }

            } else { // zweites Feld: Durchmesser
                diameter = newInput;
                length = element.parentNode.previousElementSibling.previousElementSibling.firstChild.value;
                let outlenght = element.parentNode.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;
                if (!length) {
                    outlenght.style.color = 'red';
                    outlenght.value = "Bitte länge angeben";

                } else outlenght.value = '';

                if (!diameter) {
                    err = "Bitte Durchmesser angeben";
                    outputfield.nextElementSibling.style.color = 'red';
                }

            }

            if (length && diameter) { // Nur berechnen wenn beide Angaben vorhanden
                output = calc[0] * length * diameter + calc[1];
            }

        } else {                        // Kühlmöbel
            output = newInput * calc[0];
        };
    };



    if (!output) output = 0; // Sicherstellen das output eine Zahl ist
    set_output(output, outputfield, err);
}


function set_output(newvalue, outputfield, err) {   // Ausgabe
    var oldvalue = outputfield.dataset.out ? Number(outputfield.dataset.out) : 0;
    var oldvaluetotal = document.getElementById('total').dataset.out ? Number(document.getElementById('total').dataset.out) : 0;
    
    
    var outputfield_error = outputfield.nextElementSibling;
    if (outputfield_error) {
        if (err) outputfield_error.value = err;
        else outputfield_error.value = '';
    };

    if (newvalue) {
        outputformat = euro(newvalue);
    } else outputformat = '';
    outputfield.value = outputformat;
    outputfield.dataset.out = newvalue;
    // Gesamtergebnis 
    let newtotal = oldvaluetotal - oldvalue + newvalue;

    if (newtotal) {
        if (newtotal > 150000) {
            var newtotalout = 150000;
            document.getElementById('total').nextElementSibling.value = 'Maximale Fördersumme 150.000,00 EUR';
        } else {
            var newtotalout = newtotal;
            document.getElementById('total').nextElementSibling.value = '';
        };
        document.getElementById('total').value = "Fördersumme: " + euro(newtotalout);
        document.getElementById('total').dataset.out = newtotal;
    } else {
        document.getElementById('total').value = '';
        document.getElementById('total').dataset.out = 0;
    };

};


function euro(wert) { // Formatierung der Ausgabe in EURO
    wert = Number(wert).toFixed(2);
    wert = wert.replace(".", ",");
    while (wert.match(/^(\d+)(\d{3}\b)/)) {
        wert = wert.replace(/^(\d+)(\d{3}\b)/, RegExp.$1 + '.' + RegExp.$2);
    }
    return wert + ' EUR';
}


function calc_option() { // Förderung von Komponenten
    //debugger;
    let outputfields = document.getElementsByName('tableoptions');
    let num_outputfields = outputfields.length;

    if (num_outputfields > 0) {
        for (let i = 0; i < num_outputfields; i++) {

            var items = outputfields[i].dataset.items === 'false' ? false : JSON.parse("[" + outputfields[i].dataset.items + "]");
            var err = false;
            var sum = 0;
            for (let item of items) {

                if (item === 2) { // Rückkühler
                    // Foerdersummen der Anlagenteile addieren
                    let parts = document.getElementsByName('rueckkuehler');
                    if (parts.length > 0) {
                        for (let i = 0; i < parts.length; i++) {
                            let v = Number(parts[i].nextElementSibling.nextElementSibling.dataset.out);
                            if (isNaN(v)) v = 0;
                            sum += v;
                        }
                    }
                } else if (item === 1) { // Kälteerzeuger
                    let kaelteerzeuger = document.getElementsByName('kaelteerzeuger')[0] ? Number(document.getElementsByName('kaelteerzeuger')[0].nextSibling.nextSibling.dataset.out) : 0;
                    sum += kaelteerzeuger; // Foerderung Kaelteerzeuger addieren
                }
            }
            // Püfen ob ein Item gefunden wurde
            if (sum > 0) {
                let proz = outputfields[i].dataset.inputproz;
                sum = sum * proz;
            } else {
                err = "Bitte zuerst Kälteerzueger auswählen";
                //sum = "Bitte zuerst Kälteerzueger auswählen";
            }
            set_output(sum, outputfields[i], err);
        }
    }
}

// Felder einfuegen
function inseret_fields(inseretin, getitfrom, id_from) {
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
            init_help(desOut, id_from, helptext);
        }

        text = document.createTextNode(textunit);
        desOut.appendChild(text);                       // Text in Ausgabe einfuegen
        newDes.appendChild(desOut);                     // Ausgabe in Beschreibungstext einfuegen

        inseretin.appendChild(newDes);                      // Beschreibungstext in Inputspalte


        // Eingabe
        newIn = document.createElement('p');          // Textfeld fuer Eingabe erstellen
        newIn.className = "feld";
        inIn = document.createElement('input');         // Eingabefeld erstellen
        inIn.maxLength = maxlength;
        inIn.className = "inputKlein numericOnly";
        inIn.type = 'text';
        inIn.name = fieldname;
        inIn.setAttribute('onInput', 'calc(this); calc_option()');
        inIn.dataset.minmax = minmax;
        inIn.dataset.calc = calc;
        newIn.appendChild(inIn);                        // Neues Eingabefeld anhaengen


        // Beschreibung hinten
        inOut = document.createElement('output');        // Ausgabefeld für Beschreibung erstellen
        text = document.createTextNode(textdes);
        inOut.appendChild(text);                        // Text in Ausgabe einfuegem
        newIn.appendChild(inOut);                       // Ausgabe in Beschreibungstext einfuegen

        // Ausgabe
        inOutput = document.createElement('output');        // Ausgabefeld erstellen
        inOutput.className = "ausgabe";
        newIn.appendChild(inOutput);                       // Ausgabe in Förderbetrag einfuegen
        
        inOutput = document.createElement('output');        // Ausgabefeld 2 für Fehlermeldungen erstellen
        inOutput.className = "haupttext";
        inOutput.style.fontWeight = "bold";
        newIn.appendChild(inOutput);                       // zweite Ausgabe in Beschreibungstext einfuegen


        inseretin.appendChild(newIn);                   // Eingabefeld in Inputspalte einfuegen



    }
}

document.addEventListener('DOMContentLoaded', function () { // Event erst hinzufügen wenn der DOM geladen ist

    create_block();        // Auswahlfeld(er) laden
    create_tables();       // Tabellen laden
    create_checkfields();  // Auswahlfelder laden
    create_lists();        // Optionslisten der Tabellen laden

});