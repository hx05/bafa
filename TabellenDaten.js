/*
Prototype einer neuen Tabelle. Die Tabelle muss im HTML-Teil ueber "<table id="IDDERTABELLE"></table>" eingeleitet werden und wird dann mit den unten stehenden Angaben ueber foerderrechner.js aufgebaut.

var IDDERTABELLE =             {   name:       "Name.der.Tabelle",
                                    hilfe:      "Hilfetext",
                                    option:     ["Text1", "Text2", "Text3"],
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
                                                        ],
                                                        [
                                                            "eingabefeld.2.TextVorne", 
                                                            "eingabefeld.2.TextHinten", 
                                                            "eingabefeld.2.max.zeichen", 
                                                            "eingabefeld.2.Hilfetext[oder false]",
                                                            "eingabefeld.2.optinaleDaten1[oder false]",
                                                            "eingabefeld.2.optinaleDaten2",
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
                                                        ],
                                                        [
                                                            "eingabefeld.2.TextVorne", 
                                                            "eingabefeld.2.TextHinten", 
                                                            "eingabefeld.2.max.zeichen", 
                                                            "eingabefeld.2.Hilfetext[oder false]",
                                                            "eingabefeld.2.optinaleDaten1[oder false]",
                                                            "eingabefeld.2.optinaleDaten2",
                                                        ],                                                      
                                                    ],
                    
                                                ]
                                };

*/

var TableKomponentenSysteme =   {   name:       "Komponenten und Systeme",
                                    hilfe:      "Geben Sie hier bitte die Leistung der Kälte- oder Klimaanlage an, die gefördert werden sollen. Jede Komponente muss mit ihrer jeweiligen Leistung einzeln erfasst werden. Fördervoraussetzung ist, dass die Leistung der ausgewählten Komponente innerhalb der angegebenen Leistungsbereiche liegt. Bei Kühlmöbeln für Supermarkt-Kälteanlagen geben Sie bitte die Länge der Kühlmöbel an. Bei Kühlsoleleitungen geben Sie bitte Länge und Durchschnitt der Rohrleitungen an. Komponenten für Freikühlbetrieb (Ventile, Leitungen, Reglerintegration etc.) können gefördert werden, wenn der Freikühler in der Lage ist, den Kälteleistungsbedarf vollständig zu decken, wenn die Außenlufttemperatur drei Kelvin niedriger ist als die Nutztemperatur.",
                                    option:     [
                                        "Technische Angaben zum Freikühlerbetrieb",
                                        "Ich beantrage die Förderung von Komponenten und Systemen für den Freikühlerbetrieb (Ventile, Leitungen, Reglerintegration etc.).",
                                        "Der / die Freikühler sind in der Lage, den Kälteleistungsbedarf vollständig zu decken, wenn die Außenlufttemperatur drei Kelvin niedriger ist als die Nutztemperatur (TAUL < TNutz - 3 K).",
                                    ],
                                    artikel:    [
                        
                                                    [
                                                        "Tiefkühlstufe mit R-744 ",
  
                                                        [
                                                            "Leistung der Verdampfer:", 
                                                            " kW (Q̇₀ = 30,00 bis 120,00 kW)", 
                                                            "6",
                                                            "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                            [30, 120],
                                                            false,
                                                        ],
                                                        [
                                                            "Kälteleistung:", 
                                                            " kW", 
                                                            "7",
                                                            "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                            false,
                                                            [781.69, -0.2153, -210.4],
                                                        ],
                                                    ],
                                                        
                                                        
                                                    [
                                                        "Luftkühler für NK-Kälteanlagen",
                                                        [
                                                            "Leistung der Verdampfer:", 
                                                            " kW (Q̇₀ = 2,00 bis 110,00 kW)", 
                                                            "5",
                                                            "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                            [2, 110],
                                                            false,
                                                        ],
                                                        [
                                                            "Kälteleistung:", 
                                                            " kW",
                                                            "7", 
                                                            "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                            false,
                                                            [233.2, -1, 61.1], 
                                                        ],
                                                    ],

                                                    [
                                                        "Luftkühler für AC- und Prozesskühlanlagen",  
                                                        [
                                                            "Leistung der Verdampfer:", 
                                                            " kW (Q̇₀ = 2,00 bis 110,00 kW)", 
                                                            "6", 
                                                            "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                            [2, 110],
                                                            false, 
                                                        ],
                                                        [
                                                            "Kälteleistung:", 
                                                            " kW",
                                                            "7",
                                                            "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                            false,
                                                            [421.63, -1, 23.32], 
                                                        ],
                                                    ],

                                                    [
                                                        "Adiabate Rückkühler (Hybridkühler)",  
                                                        [
                                                            "Leistung der Verflüssiger:", 
                                                            " kW (Q̇c = 100,00 bis 1000,00 kW)",
                                                            "7",
                                                            false,
                                                            [100, 1000],
                                                            false,
                                                        ],
                                                        [
                                                            "Kälteleistung:", 
                                                            " kW",
                                                            "7",
                                                            "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                            false,
                                                            [8239.4, -1.5944, 59.92],
                                                        ],
                                                    ],

                                                    [
                                                        "Rückkühler für flüssigkeitsgekühlte Anlagen", 
                                                        [
                                                            "Leistung der Verflüssiger:", 
                                                            " kW (Q̇c = 10,00 bis 500,00 kW)", 
                                                            "6",
                                                            false, 
                                                            [10, 500],
                                                        ],
                                                        [
                                                            "Kälteleistung:", 
                                                            " kW",
                                                            "7",
                                                            "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                            false,
                                                            [26700.02, -3.4995, 21.21],
                                                        ],
                                                    ],

                                                    [
                                                        "Eigenständige Wärmepumpe mit nicht-halogeniertem Kältemittel zur Abwärmenutzung der Kälteanlage(n)",
                                                        [
                                                            "Leistung der Verdampfer:", 
                                                            " kW (Q̇₀ = 5,00 bis 500,00 kW)", 
                                                            "6",
                                                            "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                            [5, 500],
                                                            false,
                                                        ],
                                                        [
                                                            "Kälteleistung:", 
                                                            " kW",
                                                            "7",
                                                            "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                            false,
                                                            [1246.73, -0.5614, -1.21], 
                                                        ],
                                                    ],

                                                    [
                                                        "Kühlmöbel für Supermarkt-Kälteanlagen (keine steckerfertigen Geräte) ",
                                                       [
                                                            "Länge der Kühlmöbel:", 
                                                            " lfdm", 
                                                            "7",
                                                            false,
                                                            [1, 100000],
                                                            [400],
                                                        ],
                                                    ],

                                                    [

                                                        " Kühlsoleleitungen ",
                                                        [
                                                            "Länge der Rohrleitung:", 
                                                            " lfdm", 
                                                            "7",
                                                            false,
                                                            false,
                                                            false,
                                                        ],
                                                        [
                                                            "Rohrdurchmesser:", 
                                                            " mm",
                                                            "7",
                                                            false,
                                                            false,
                                                            [0.5465, 7.6],
                                                        ],

                                                    ],
                                                ],   

                                };



var TableThermischeSpeicher =  {    name:       "Thermische Speicher für Wärme und Kälte",
                                    hilfe:      "Geben Sie hier bitte die Leistung oder das Volumen der thermischen Speicher an, die gefördert werden sollen.",
                                    artikel:    [
                                                    [
                                                        "Warmwasser-Schichtenspeicher",
                                                        [   
                                                            "Volumen:", 
                                                            " dm³ (V = 400,00 bis 4000,00 dm³)", 
                                                            "7",
                                                            false,
                                                            [400, 4000],
                                                            [520.64, -1.0034, 0.38],
                                                        ],
                                                    ],
                                                        
                                                        
                                                    [
                                                        "Kaltwasserspeicher",  
                                                        [
                                                            "Volumen:", 
                                                            " dm³ (V = 500,00 bis 2000,00 dm³)", 
                                                            "7",
                                                            false,
                                                            [500, 2000],
                                                            [10.9, -0.4512, 0.08],
                                                        ],
                                                    ],

                                                    [
                                                        "Eisspeicher: Betongehäuse mit Wärmeübertrager",
                                                        [
                                                            "Kapazität:", 
                                                            " kWh (Q̇₀ = 150,00 bis 24000,00 kWh)", 
                                                            "8",
                                                            false,
                                                            [150, 2400],
                                                            [4237.78, -1.0326, 2.26],
                                                        ],
                                                    ],

                                                    [
                                                        "Latentwärmespeicher-Systeme: Behälter mit LWS (Kapsel)",  
                                                        [
                                                            "Kapazität:", 
                                                            " kWh (Q̇₀ = 60,00 bis 1400,00 kWh)", 
                                                            "7",
                                                            false,
                                                            [60, 1400],
                                                            [6257.9, 1.4906, 21.34],
                                                        ],
                                                    ],
                    
                                                ]
                                };





var BlockAnlage =               {   name: "Art der Anlage (Kälteerzeuger)",
                                    hilfe: "Geben Sie hier die Art des Kälteerzeugers an. Beachten Sie dabei bitte die Definitionen für verbundene Kälteerzeuger im Merkblatt Fachtechnik (siehe www.bafa.de) sowie die technischen Fördervoraussetzungen gemäß Ziffer 2.4.1 f der Förderrichtlinie.",
                                    text: "Bei der <strong> neuen Anlage </strong> handelt es sich um:",
                                    artikel:    [
                                                    [
                                                        "Flüssigkeitskühlsätze mit Kältemitteln der Sicherheitsklasse A3 (z.B. R-290, R-1270, R-600a)",
                                                        [
                                                            "Normalkühlung",
                                                            [
                                                                "Anlagen, flüssigkeitsgekühlt",
                                                                [
                                                                    "Leistungsaufnahme der Verdichter:",
                                                                    " kW (P = 2,00 bis 300,00 kW)",
                                                                    "6",
                                                                    "Geben Sie bitte die elektrische Leistungsaufnahme der Verdichter / Kältemaschine bzw. Verbundanlage an, die zur Abdeckung des Kältebedarfs benötigt wird. Bei Flüssigkeitskühlsätzenmuss dieser Wert innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [2, 300],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [1394.48, -0.3892, -17.43],
                                                                ],
                                                            ],


                                                            [
                                                                "Anlagen, luftgekühlt",
                                                                [
                                                                    "Leistungsaufnahme der Verdichter:",
                                                                    " kW (P = 2,00 bis 300,00 kW)",
                                                                    "6",
                                                                    "Geben Sie bitte die elektrische Leistungsaufnahme der Verdichter / Kältemaschine bzw. Verbundanlage an, die zur Abdeckung des Kältebedarfs benötigt wird. Bei Flüssigkeitskühlsätzenmuss dieser Wert innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [2, 300],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [1104.97, 0.2564, 66.21],
                                                                ],


                                                            ],

                                                            [
                                                                "Kombinierte Kompakt-Anlagen, flüssigkeitsgekühlt, mehrere Kältemittelkreisläufe,mit höchstens 80 g Kältemittel pro kW Kälteleistung",
                                                                [
                                                                    "Kälteleistung der Verdampfer:",
                                                                    " kW (Q̇₀ = 50,00 bis 300,00 kW)",
                                                                    "6",
                                                                    "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [50, 300],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [32649.844, -3.1859, 192.49],
                                                                ],


                                                            ],

                                                            [
                                                                "Kompakt-Anlagen, flüssigkeitsgekühlt, ein Kältemittelkreislauf, mit höchstens 80 g Kältemittel pro kW Kälteleistung",
                                                                [
                                                                    "Kälteleistung der Verdampfer:",
                                                                    " kW (Q̇₀ = 7,00 bis 45,00 kW)",
                                                                    "5",
                                                                    "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [7, 45],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [2946.23, -0.7508, -26.39],                        
                                                                ],
                                                            ],

                                                        ],

                                                        [
                                                            "Klima- und Prozesskälteanlagen",
                                                            [
                                                                "Anlagen, flüssigkeitsgekühlt",
                                                                [
                                                                    "Leistungsaufnahme der Verdichter:",
                                                                    " kW (P = 2,00 bis 300,00 kW)",
                                                                    "6",
                                                                    "Geben Sie bitte die elektrische Leistungsaufnahme der Verdichter / Kältemaschine bzw. Verbundanlage an, die zur Abdeckung des Kältebedarfs benötigt wird. Bei Flüssigkeitskühlsätzenmuss dieser Wert innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [2, 300],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [1247.53, -0.3892, -14.53],
                                                                ],
                                                            ],

                                                            [
                                                                "Anlagen, luftgekühlt",
                                                                [
                                                                    "Leistungsaufnahme der Verdichter:",
                                                                    " kW (P = 2,00 bis 300,00 kW)",
                                                                    "6",
                                                                    "Geben Sie bitte die elektrische Leistungsaufnahme der Verdichter / Kältemaschine bzw. Verbundanlage an, die zur Abdeckung des Kältebedarfs benötigt wird. Bei Flüssigkeitskühlsätzenmuss dieser Wert innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [2, 300],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [1373.43, -0.4183, -13.04],
                                                                ],

                                                            ],

                                                            [
                                                                "Kombinierte Kompakt-Anlagen, flüssigkeitsgekühlt, mehrere Kältemittelkreisläufe,mit höchstens 80 g Kältemittel pro kW Kälteleistung",
                                                                [
                                                                    "Kälteleistung der Verdampfer:",
                                                                    " kW (Q̇₀ = 90,00 bis 700,00 kW)",
                                                                    "6",
                                                                    "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [90, 700],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [4896, -0.8842, 121.22],
                                                                ],
                                                            ],

                                                            [
                                                                "Kompakt-Anlagen, flüssigkeitsgekühlt, ein Kältemittelkreislauf, mit höchstens 80 g Kältemittel pro kW Kälteleistung",
                                                                [
                                                                    "Kälteleistung der Verdampfer:",
                                                                    " kW (Q̇₀ = 15,00 bis 100,00 kW)",
                                                                    "5",
                                                                    "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                    [15, 100],
                                                                    false,
                                                                ],

                                                                [
                                                                    "Kälteleistung:",
                                                                    " kW",
                                                                    "7",
                                                                    "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                    false,
                                                                    [2786.02, -0.7437, -24.94],
                                                                ],
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Sonstige stationäre Kälteerzeuger ",
                                                        [   
                                                            "Ab- und Adsorptionsanlagen",
                                                            [
                                                                "Kälteleistung der Verdampfer:",
                                                                " kW (Q̇₀ = 5,00 bis 600,00 kW)",
                                                                "6",
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                [5, 600],
                                                                false,
                                                            ],

                                                            [
                                                                "Kälteleistung:",
                                                                " kW",
                                                                "7",
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                false,
                                                                [1484.38, -0.2682, -74.31],
                                                            ],
                                                        ],

                                                        [
                                                            "Adiabate Verdunstungskühlanlagen",
                                                            [
                                                                "Kälteleistung der Verdampfer:",
                                                                " kW (Q̇₀ = 10,00 bis 240,00 kW)",
                                                                "6",
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                [10, 240],
                                                                false,
                                                            ],

                                                            [
                                                                "Kälteleistung:",
                                                                " kW",
                                                                "7",
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                false,
                                                                [3567.45, -1.0788, 70.79],
                                                            ],
                                                        ],

                                
                                                        [
                                                            "Booster-Gewerbekälteanlagen mit R-744",
                                                            [
                                                                "Kälteleistung der Verdampfer:",
                                                                " kW (Q̇₀ = 30,00 bis 400,00 kW)",
                                                                "6",
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                [30, 400],
                                                                false,
                                                            ],

                                                            [
                                                                "Kälteleistung:",
                                                                " kW",
                                                                "7",
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                false,
                                                                [1192.97, -0.427, 58.61],
                                                            ],
                                                        ],

                                                        [
                                                            "Booster-Supermarktanlagen mit R-744",
                                                            [
                                                                "Kälteleistung der Verdampfer:",
                                                                " kW (Q̇₀ = 30,00 bis 400,00 kW)",
                                                                "6",
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                                [30, 400],
                                                                false,
                                                            ],

                                                            [
                                                                "Kälteleistung:",
                                                                " kW",
                                                                "7",
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de.",
                                                                false,
                                                                [1192.79, -0.4270, 58.61],
                                                            ],
                                                        ],
                                                    ],
                                                ],
}
