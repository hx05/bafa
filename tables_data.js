// Daten der Artikel und Optionen
// Zuletzt bearbeitet am 11.01.21

/*
Prototype einer neuen Tabelle. Die Tabelle muss im HTML-Teil ueber "<table id="IDDERTABELLE"></table>" eingeleitet werden und wird dann mit den unten stehenden Angaben ueber foerderrechner.js aufgebaut.

var IDDERTABELLE =             {   name:       "Name.der.Tabelle",
                                    hilfe:      "Hilfetext",
                                    artikel:    [
                        
                                                    [
                                                        "NameArtikel.1",
                                                        [   
                                                            "eingabefeld.1.TextVorne", 
                                                            "eingabefeld.1.TextHinten", 
                                                            "eingabefeld.1.max.zeichen", 
                                                            "eingabefeld.1.Hilfetext[oder false]",
                                                            "eingabefeld.1.optinaleDaten1[oder false]",
                                                            "eingabefeld.1.optinaleDaten2",
                                                            "textfeld.name(id).1",
                                                        ],
                                                        [
                                                            "eingabefeld.2.TextVorne", 
                                                            "eingabefeld.2.TextHinten", 
                                                            "eingabefeld.2.max.zeichen", 
                                                            "eingabefeld.2.Hilfetext[oder false]",
                                                            "eingabefeld.2.optinaleDaten1[oder false]",
                                                            "eingabefeld.2.optinaleDaten2",
                                                            "textfeld.name(id).2",
                                                        ],
                                                    ],
                                                        
                                                        
                                                    [
                                                        "optional.NameArtikel.2",
                                                        [
                                                            "eingabefeld.1.TextVorne", 
                                                            "eingabefeld.1.TextHinten", 
                                                            "eingabefeld.1.max.zeichen", 
                                                            "eingabefeld.1.Hilfetext[oder false]",
                                                            "eingabefeld.1.optinaleDaten1[oder false]",
                                                            "eingabefeld.1.optinaleDaten2",
                                                            "textfeld.name(id).1",
                                                        ],
                                                        [
                                                            "eingabefeld.2.TextVorne", 
                                                            "eingabefeld.2.TextHinten", 
                                                            "eingabefeld.2.max.zeichen", 
                                                            "eingabefeld.2.Hilfetext[oder false]",
                                                            "eingabefeld.2.optinaleDaten1[oder false]",
                                                            "eingabefeld.2.optinaleDaten2",
                                                            "textfeld.name(id).2",
                                                        ],                                                      
                                                    ],
                    
                                                ]
                                    option:     [
                                                    [
                                                        "NameOption.1",
                                                           [   
                                                            "Checkfield1.Text", 
                                                            "Checkfield1.Data",
                                                            "Checkfield1.Hilfetext[oder false]",
                                                            "Checkfield1.Summentext",
                                                            "Checkfield1.BezugArtikel", (1 = Kälteerzeuger, 2 = Rückkühler)
                                                            ],
                                                           [   
                                                            "Checkfield2.Text", 
                                                            "Checkfield2.Data",
                                                            "Checkfield2.Hilfetext[oder false]",
                                                            "Checkfield1.Summentext",
                                                            Checkfield1.BezugArtikel", (1 = Kälteerzeuger, 2 = Rückkühler)
                                                            ],
                                                    ]
                                                ],
                                };

*/

var TableKomponentenSysteme = {
    name: "Komponenten und Systeme",
    hilfe: "Geben Sie hier bitte die Leistung der Kälte- oder Klimaanlage an, die gefördert werden sollen. Jede Komponente muss mit ihrer jeweiligen Leistung einzeln erfasst werden. Fördervoraussetzung ist, dass die Leistung der ausgewählten Komponente innerhalb der angegebenen Leistungsbereiche liegt. Bei Kühlmöbeln für Supermarkt-Kälteanlagen geben Sie bitte die Länge der Kühlmöbel an. Bei Kühlsoleleitungen geben Sie bitte Länge und Durchschnitt der Rohrleitungen an. Komponenten für Freikühlbetrieb (Ventile, Leitungen, Reglerintegration etc.) können gefördert werden, wenn der Freikühler in der Lage ist, den Kälteleistungsbedarf vollständig zu decken, wenn die Außenlufttemperatur drei Kelvin niedriger ist als die Nutztemperatur.",
    artikel: [

        [
            "Tiefkühlstufe für Flüssigkeitskühlsätze",
            [
                "Kälteleistung:",
                " kW",
                "6",
                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                [1, 120],
                [717, -0.27661, -122],
                false,
            ],
        ],


        [
            "Luftkühler / Verdampfer für NK/TK-Kälteanlagen",
            [
                "Kälteleistung:",
                " kW",
                "6",
                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                [2, 100],
                [243, -1, 60],
                false,
            ],
        ],

        [
            "Luftkühler / Verdampfer für AC- und Prozesskühlanlagen",
            [
                "Kälteleistung:",
                " kW",
                "6",
                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                [2, 100],
                [422, -1, 24],
                false,
            ],
        ],

        [
            "Adiabate Rückkühler (Hybridkühler)",
            [
                "Kälteleistung:",
                " kW",
                "6",
                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                [10, 600],
                [313, -0.3888, 16],
                "rueckkuehler",
            ],
        ],

        [
            "Rückkühler für flüssigkeitsgekühlte Anlagen",
            [
                "Kälteleistung:",
                " kW",
                "6",
                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                [10, 600],
                [26701, -4, 22],
                "rueckkuehler",
            ],
        ],

        [
            "Warmwasser-Schichtenspeicher",
            [
                "Volumen:",
                " dm³ (V = 250 bis 30.000 dm³)",
                "7",
                false,
                [250, 30000],
                [521, -1.004, 0.38],
                "waermespeicher",
            ],
        ],


        [
            "Kaltwasserspeicher",
            [
                "Volumen:",
                " dm³ (V = 250 bis 30.000 dm³)",
                "7",
                false,
                [250, 30000],
                [248, -1.031, 0.35],
                "kealtespeicher",
            ],
        ],

        [
            "Eisspeicher",
            [
                "Kapazität:",
                " kWh (Q̇₀ = 150 bis 30.000 kWh)",
                "7",
                false,
                [150, 30000],
                [4238, -1.033, 2.26],
                "kaeltespeicher",
            ],
        ],

        [
            "Latentwärmespeicher-Systeme: Behälter mit LWS (Kapsel)",
            [
                "Kapazität:",
                " kWh (Q̇₀ = 60 bis 3.000 kWh)",
                "7",
                false,
                [60, 3000],
                [6258, -1.4906, 22],
                "waermespeicher",
            ],
        ],

        [

            "Kühlsoleleitungen",
            [
                "Länge der Rohrleitung:",
                " lfdm",
                "7",
                false,
                [1, 10000],
                [0.547, 7.604],
                false,
            ],
            [
                "Rohrdurchmesser:",
                " mm",
                "7",
                false,
                [1, 10000],
                [0.547, 7.604],
                false,
            ],

        ],
    ],

    option: [
        [
            "Zusätzlich zum Kälteerzeuger kann eine Förderung für Komponenten für Wärmepumpenbetrieb, Abwärmenutzung und Freikühlbetrieb beantragt werden (prozentualer Zuschlag, keine Leistungsangabe erforderlich)",
            [
                "Komponenten für den Wärmepumpenbetrieb (Außenverdampfer)",
                0.1,
                false,
                "Förderbetrag: ",
                [1],
            ],
            [
                "Komponenten zur Abwärmenutzung der Kälteanlage",
                0.05,
                false,
                "Förderbetrag: ",
                [1],
            ],
            [
                "Komponenten für Freikühlbetrieb",
                0.05,
                false,
                "Förderbetrag: ",
                [1, 2],
            ],
        ],
    ],
};


var BlockAnlage = {
    name: "Art der Anlage (Kälteerzeuger)",
    hilfe: "Geben Sie hier die Art des Kälteerzeugers an. Beachten Sie dabei bitte die Definitionen für verbundene Kälteerzeuger im Merkblatt Fachtechnik (siehe www.bafa.de) sowie die technischen Fördervoraussetzungen gemäß Ziffer 2.4.1 f der Förderrichtlinie.",
    text: "Bei der <strong> neuen Anlage </strong> handelt es sich um:",
    artikel: [

        [
            "Flüssigkeitskühlsätze Normalkühlung",
            [

                "Kälteleistung:",
                " kW",
                "7",
                "Bitte beachten Sie: Ab 600 kW gilt der Förderhöchstbetrag.",
                [2, 600],
                [1105, -0.2964, -67],
                "kaelteerzeuger",

            ],



        ],

        [
            "Flüssigkeitskühlsätze AC (Prozesskälte)",

            [
                "Kälteleistung:",
                " kW",
                "7",
                "Bitte beachten Sie: Ab 600 kW gilt der Förderhöchstbetrag.",
                [2, 600],
                [1248, -0.38921, -15],
                "kaelteerzeuger",
            ],

        ],

    ]

}
