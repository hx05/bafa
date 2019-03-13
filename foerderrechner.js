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


function create_tooltip (id) {
    let tooltip = document.getElementById(id);
    tooltip.classList.toggle("show");
}


// Hilfetext in HTML einfuegen
function init_help (block, id_from, helptext) {
    block.className = 'tooltip';
    let id = Math.floor(Math.random() * 1000000000); 
    block.setAttribute('onClick', 'create_tooltip(\'' + id_from + id + '\');');
    let helpspan = document.createElement('span');
    helpspan.className = 'tooltiptext';
    helpspan.id = id_from + id;
    text = document.createTextNode(helptext);
    helpspan.appendChild(text);
    block.appendChild(helpspan);
}


function calcluefter (element) {
    let newInput = parseInt(element.value);
    let minmax = element.dataset.minmax === 'false' ? false : JSON.parse("["+ element.dataset.minmax + "]");
    let calc = element.dataset.calc === 'false' ? false : JSON.parse("["+ element.dataset.calc + "]");
    let outputfield = element.nextElementSibling.nextElementSibling;
    let oldvalue = outputfield.dataset.out ? Number(outputfield.dataset.out) : 0;
    let output = '';
    let err = false;
    //debugger;
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

    set_output (output, oldvalue, outputfield, err);
}



function calc (element) {
    let newInput = parseInt(element.value);
    let minmax = element.dataset.minmax === 'false' ? false : JSON.parse("["+ element.dataset.minmax + "]");
    let calc = element.dataset.calc === 'false' ? false : JSON.parse("["+ element.dataset.calc + "]");
    let outputfield = element.nextElementSibling.nextElementSibling;
    let oldvalue = outputfield.dataset.out ? Number(outputfield.dataset.out) : 0;
    let output = '';
    let err = false;
    if (calc && newInput || !calc && !minmax) {
        outputfield.style.color = 'green';
        if (calc.length == 3) {         // Förderung für stationäre Anlagen          
            output = (calc[0]*Math.pow(newInput, calc[1])+calc[2])*newInput;
        }
        else if (calc.length == 2 || !calc && !minmax) {    // Förderung Kühlsolekreisläufe
            
            let length ;
            let diameter;
            if (element.nextElementSibling.value == " lfdm") { // erstes Feld
                length = newInput;
                diameter = element.parentNode.nextElementSibling.nextElementSibling.firstChild.value;
                if (!diameter) diameter = 0;
                calc = JSON.parse("["+ element.parentNode.nextElementSibling.nextElementSibling.firstChild.dataset.calc + "]");
                // Ausgabefeld umschreiben
                outputfield = element.parentNode.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
                oldvalue = outputfield.dataset.out ? Number(outputfield.dataset.out) : 0;

                if (!length) {
                    element.nextElementSibling.nextElementSibling.style.color = 'red';
                    element.nextElementSibling.nextElementSibling.value = "Bitte länge angeben";
                } else element.nextElementSibling.nextElementSibling.value = '';
                if (!diameter) {
                    err = 2;
                    element.parentNode.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.style.color = 'red';
                    element.parentNode.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.value = "Bitte Durchmesser angeben";
                }
                
            } else { // zweites Feld
                diameter = newInput;
                length = element.parentNode.previousElementSibling.previousElementSibling.firstChild.value;

                if (!length) {
                    length = 0;
    
                    element.parentNode.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.color = 'red';
                    element.parentNode.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.value = "Bitte länge angeben";
                } else element.parentNode.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.value = '';

                if (!diameter) {
                    err = 2;
                    element.nextElementSibling.nextElementSibling.style.color = 'red';
                    element.nextElementSibling.nextElementSibling.value = "Bitte Durchmesser angeben";
                }

            }
            if (length && diameter) { // Nur berechnen wenn beide Angaben vorhanden
                output = calc[0]*length*diameter+calc[1];
            }

        } else {                        // Kühlmöbel
            output = newInput * calc[0];
        };
    };


    if (minmax) {
        if (newInput < minmax[0]) {
            outputfield.style.color = 'red';
            err = true;
            output = "Achtung: Förderung erst ab " + minmax[0] + element.nextElementSibling.value;
        } else if (newInput > minmax[1]) {
            err = true;
            outputfield.style.color = 'red';
            output = "Achtung: Förderung bis maximal " + minmax[1] + element.nextElementSibling.value;
        }
    };

    set_output (output, oldvalue, outputfield, err);
}


function set_output(output, oldvalue, outputfield, err) {   // Ausgabe
    //debugger;
    let oldvaluetotal = document.getElementById('total').dataset.out ? Number(document.getElementById('total').dataset.out) : 0;
    if (!err) { // keine Fehler
        if (output) {
            outputformat = euro(output);
        } else outputformat = '';
        outputfield.value = outputformat;
        outputfield.dataset.out = output;
        // Gesamtergebnis 
        let newtotal = oldvaluetotal - oldvalue + output;
        
        if (newtotal) {
            if (newtotal > 150000) {
                var newtotalout = 150000;
                document.getElementById('total').nextElementSibling.value = 'Maximale Fördersumme 150.000,00 EUR';
            } else {
                var newtotalout = newtotal;
                document.getElementById('total').nextElementSibling.value = '';
            };
            document.getElementById('total').value ="Fördersumme: " + euro(newtotalout);
            document.getElementById('total').dataset.out = newtotal;
        } else {
            document.getElementById('total').value = '';
            document.getElementById('total').dataset.out = 0;
        };
   
    } else if (err !== 2) {
        outputfield.value = output;
        if (oldvalue) {
            let newtotal = oldvaluetotal - oldvalue;
            outputfield.dataset.out = 0;
            if (newtotal) {
                if (newtotal > 150000) {
                    var newtotalout = 150000;
                    document.getElementById('total').nextElementSibling.value = 'Maximale Fördersumme 150.000,00 EUR';
                } else {
                    var newtotalout = newtotal;
                    document.getElementById('total').nextElementSibling.value = '';
                };
                document.getElementById('total').value ="Fördersumme: " + euro(newtotalout);
                document.getElementById('total').dataset.out = newtotal;
            } else {
                document.getElementById('total').value = '';
                document.getElementById('total').dataset.out = 0;
            };
        };
    };

    
};


function euro(wert) { // Formatierung der Ausgabe in EURO
    wert = Number(wert).toFixed(2);
    wert = wert.replace(".",",");
    while(wert.match(/^(\d+)(\d{3}\b)/)) {
        wert = wert.replace(/^(\d+)(\d{3}\b)/, RegExp.$1 + '.' + RegExp.$2);
    }
    return wert + ' EUR';
}


function calc_option () { // Förderung des Freikühlers 
    let outputfield = document.getElementById('freikuehlout');
    if (outputfield) {
        let oldvalue = outputfield.dataset.out ? Number(outputfield.dataset.out) : 0;
        let err = false;
        let sum = 0;

        // Foerdersummen der Anlagenteile addieren
        let parts = document.getElementsByName('ruckkuehler');
        if (parts.length > 0) {
            for (let i = 0; i < parts.length; i++) {
                let v = Number(parts[i].dataset.nextElementSibling.nextElementSibling.out);
                if (isNaN(v)) v = 0;
                sum += v;
            }
        };
        let kaelterzeuger = document.getElementsByName('kaelterzeuger')[0] ? Number(document.getElementsByName('kaelterzeuger')[0].nextSibling.nextSibling.dataset.out) : 0;
        sum += kaelterzeuger; // Foerderung Kaelteerzeuger addieren
        sum = sum * 0.05; // 5% mehr Födereung

        set_output(sum, oldvalue, outputfield, err);
    }
}


document.addEventListener('DOMContentLoaded', function () { // Event erst hinzufügen wenn der DOM geladen ist

    create_block();         // Auswahlfeld(er) laden
    create_tables();        // Tabellen laden
    create_checkfields ();  // Auswahlfelder laden

});