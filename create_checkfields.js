function create_checkfields () {        // Auswahlfelder erstellen
    document.getElementById('plan_check').onchange = function checkbox_checked () {
        let dom = document.getElementById('plan_check').parentNode.parentNode.parentNode;
        if (document.getElementById('plan_check').checked) {
            let div = document.createElement('div');
            div.className = 'label';
            let label = document.createElement ('label');
            init_help (label, 'plan_check', '500,00 EUR pro Lüfter, Minimum 1.000,00 EUR - Maximal 5.000,00 EUR');
            let text = document.createTextNode('Anzahl der Lüfter:');
            

            label.appendChild(text);
            div.appendChild(label);
            dom.appendChild(div);


            div = document.createElement('div'); // Leufter
            div.className = 'feld';

            let input = document.createElement('input');
            input.className = 'inputKlein numericOnly';
            input.maxLength = 2;
            input.type = 'text';
            input.name = 'textfeldname[]';
            input.id = 'AnzahlLuefter';
            input.dataset.minmax = '1000, 5000';
            input.dataset.calc = 500;
            input.setAttribute('onInput', 'calcluefter(this)');

            div.appendChild(input);


            // Beschreibung hinten (Warunung)
            inOut = document.createElement('output');           // Ausgabefeld erstellen
            inOut.style.color = 'orange';
            div.appendChild(inOut);                             // Ausgabe in Beschreibungstext einfuegen

            // Ausgabe
            inOutput = document.createElement('output');        // Ausgabefeld erstellen
            inOutput.className = 'ausgabe';
            div.appendChild(inOutput);                       // Ausgabe in Beschreibungstext einfuegen

            dom.appendChild(div);


            div = document.createElement('div'); // Waermespeicher
            div.className = 'haupttext';

            label = document.createElement ('label');
            text = document.createTextNode('Mindestens ein Wärmespeicher wird integriert.');
            label.appendChild(text);
            label.className = "containerBox";

            input = document.createElement('input');
            input.className = 'inputcheck';
            input.type = 'checkbox';
            input.value = 'true';
            input.id = 'Waermespeicher';
            input.onchange = function checkbox_checked () {
                if (this.checked) set_output (1000, 0, this.nextElementSibling.nextElementSibling.nextElementSibling, 0);
                else set_output (0, 1000, this.nextElementSibling.nextElementSibling.nextElementSibling, 0);
            };
            label.appendChild(input);

            span = document.createElement('span');
            span.className = 'checkbox';
            label.appendChild(span);
    
            


            // Beschreibung hinten (Warunung)
            inOut = document.createElement('output');           // Ausgabefeld erstellen
            inOut.style.color = 'orange';
            label.appendChild(inOut);                             // Ausgabe in Beschreibungstext einfuegen
            
            // Ausgabe
            inOutput = document.createElement('output');        // Ausgabefeld erstellen
            inOutput.className = 'ausgabe';
            inOutput.style.color = 'green';
            label.appendChild(inOutput);                       // Ausgabe in Beschreibungstext einfuegen

            div.appendChild(label);

            dom.appendChild(div);


            div = document.createElement('div'); // Kaeltespeicher
            div.className = 'haupttext';

            label = document.createElement ('label');
            text = document.createTextNode('Mindestens ein Kältespeicher wird integriert.');
            label.appendChild(text);
            label.className = "containerBox";

            input = document.createElement('input');
            input.className = 'inputcheck';
            input.type = 'checkbox';
            input.value = 'true';
            input.id = 'Kaeltespeicher';
            input.onchange = function checkbox_checked () {
                if (this.checked) set_output (1000, 0, this.nextElementSibling.nextElementSibling.nextElementSibling, 0);
                else set_output (0, 1000, this.nextElementSibling.nextElementSibling.nextElementSibling, 0);
            };

            label.appendChild(input);

            span = document.createElement('span');
            span.className = 'checkbox';
            label.appendChild(span);

            // Beschreibung hinten (Warunung)
            inOut = document.createElement('output');           // Ausgabefeld erstellen
            inOut.style.color = 'orange';
            label.appendChild(inOut);                             // Ausgabe in Beschreibungstext einfuegen
            
            // Ausgabe
            inOutput = document.createElement('output');        // Ausgabefeld erstellen
            inOutput.className = 'ausgabe';
            inOutput.style.color = 'green';
            label.appendChild(inOutput);  
            
            div.appendChild(label);

            dom.appendChild(div);
            
            
        } else {
            // Beim "Hacken rausnehmen" das zuvor erstellt loeschen
            dom.removeChild(dom.lastChild);
            dom.removeChild(dom.lastChild);
            dom.removeChild(dom.lastChild);
            dom.removeChild(dom.lastChild);
        }
    };
};