/*
Prototype einer neuen Tabelle. Die Tabelle muss im HTML-Teil ueber "<table id="IDDERTABELLE"></table>" eingeleitet werden und wird dann mit den unten stehenden Angaben ueber foerderrechner.js aufgebaut.

var IDDERTABELLE =             {   name:       "Name.der.Tabelle",
                                    hilfe:      "Hilfetext",
                                    option:     ["Text1", "Text2", "Text3"],
                                    artikel:    [
                        
                                                    [
                                                        "NameArtikel.1",
                                                        [   
                                                            [
                                                                "eingabefeld.1.TextVorne", 
                                                                "eingabefeld.1.TextHinten", 
                                                                "eingabefeld.1.max.zeichen", 
                                                                "eingabefeld.1.hilfetext"
                                                            ],
                                                            [
                                                                "optional.eingabefeld.2.TextVorne", 
                                                                "optional.eingabefeld.2.TextHinten", 
                                                                "optional.eingabefeld.2.max.zeichen", 
                                                                "optional.eingabefeld.1.hilfetext"
                                                            ],
                                                        ],
                                                    ],
                                                        
                                                        
                                                    [
                                                        "optional.NameArtikel.2",
                                                        [   
                                                            [
                                                                "eingabefeld.1.TextVorne", 
                                                                "eingabefeld.1.TextHinten", 
                                                                "eingabefeld.1.max.zeichen", 
                                                                "eingabefeld.1.hilfetext"
                                                            ],
                                                            [
                                                                "optional.eingabefeld.2.TextVorne", 
                                                                "optional.eingabefeld.2.TextHinten", 
                                                                "optional.eingabefeld.2.max.zeichen", 
                                                                "optional.eingabefeld.1.hilfetext"
                                                            ],                                                      
                                                        ],
                                                    ],
                    
                                                ]
                                };

*/

var TableKomponentenSysteme =   {   name:       "Komponenten und Systeme",
                                    hilfe:      "Geben Sie hier bitte die Leistung der <strong>Komponenten und Systeme</strong> der Kälte- oder Klimaanlage an, die gefördert werden sollen. Jede Komponente muss mit ihrer jeweiligen Leistung einzeln erfasst werden. Fördervoraussetzung ist, dass die Leistung der ausgewählten Komponente innerhalb der angegebenen Leistungsbereiche liegt.<br><br>Bei <strong>Kühlmöbeln</strong> für Supermarkt-Kälteanlagen geben Sie bitte die Länge der Kühlmöbel an.<br><br>Bei <strong>Kühlsoleleitungen</strong> geben Sie bitte Länge und Durchschnitt der Rohrleitungen an.<br><br>Komponenten für Freikühlbetrieb (Ventile, Leitungen, Reglerintegration etc.) können gefördert werden, wenn der Freikühler in der Lage ist, den Kälteleistungsbedarf vollständig zu decken, wenn die Außenlufttemperatur drei Kelvin niedriger ist als die Nutztemperatur.",
                                    option:     [
                                        "Technische Angaben zum Freikühlerbetrieb"

                                        ,
                                        "Ich beantrage die Förderung von Komponenten und Systemen für den Freikühlerbetrieb (Ventile, Leitungen, Reglerintegration etc.)."

                                        ,
                                        "Der / die Freikühler sind in der Lage, den Kälteleistungsbedarf vollständig zu decken, wenn die Außenlufttemperatur drei Kelvin niedriger ist als die Nutztemperatur (TAUL < TNutz - 3 K)."

                                        ,
                                    ],
                                    artikel:    [
                        
                                                    [
                                                        "Tiefkühlstufe mit R-744 ",
                                                        [   
                                                            [
                                                                "Leistung der Verdampfer:", 
                                                                "kW (Q̇₀ = 30,00 bis 120,00 kW)", 
                                                                "6",
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.", 
                                                            ],
                                                            [
                                                                "Kälteleistung:", 
                                                                "KW", 
                                                                "7",
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de."
                                                            ],
                                                        ]
                                                    ],
                                                        
                                                        
                                                    [
                                                        "Luftkühler für NK-Kälteanlagen",
                                                        [   
                                                            [
                                                                "Leistung der Verdampfer:", 
                                                                "kW (Q̇₀ = 2,00 bis 110,00 kW)", 
                                                                "5", 
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen."
                                                            ],
                                                            [
                                                                "Kälteleistung:", 
                                                                "kW",
                                                                "7", 
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de."
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Luftkühler für AC- und Prozesskühlanlagen",
                                                        [   
                                                            [
                                                                "Leistung der Verdampfer:", 
                                                                "kW (Q̇₀ = 2,00 bis 110,00 kW)", 
                                                                "6", 
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen."
                                                            ],
                                                            [
                                                                "Kälteleistung:", 
                                                                "kW",
                                                                "7", 
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de."
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Adiabate Rückkühler (Hybridkühler)",
                                                        [   
                                                            [
                                                                "Leistung der Verflüssiger:", 
                                                                "kW (Q̇c = 100,00 bis 1000,00 kW)", 
                                                                "7", 
                                                            ],
                                                            [
                                                                "Kälteleistung:", 
                                                                "kW",
                                                                "7", 
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de."
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Rückkühler für flüssigkeitsgekühlte Anlagen",
                                                        [   
                                                            [
                                                                "Leistung der Verflüssiger:", 
                                                                "kW (Q̇c = 10,00 bis 500,00 kW)", 
                                                                "6", 
                                                            ],
                                                            [
                                                                "Kälteleistung:", 
                                                                "kW",
                                                                "7", 
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de."
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Eigenständige Wärmepumpe mit nicht-halogeniertem Kältemittel zur Abwärmenutzung der Kälteanlage(n)",
                                                        [   
                                                            [
                                                                "Leistung der Verdampfer:", 
                                                                "kW (Q̇₀ = 5,00 bis 500,00 kW)", 
                                                                "6",
                                                                "Geben Sie den Wärmestrom an, der den zu kühlenden Produkten entzogen wird, zuzüglich aller auftretenden Verluste. Die Dimensionierung der Verdampferleistung erfolgt nach dem Kältebedarf. Die Verdampferleistung muss innerhalb der hinter dem Eingabefeld ausgewiesenen Leistungsgrenzen liegen.",
                                                            ],
                                                            [
                                                                "Kälteleistung:", 
                                                                "kW",
                                                                "7", 
                                                                "Geben Sie bitte die zu Installierende Kälteleistung der Kältemaschine bzw. Verbundanlage (Kälteerzeuger) an, die zur Abdeckung des Kältebedarfs benötigt wird. Die Kälteleistung ist außer bei Booster Supermarktkälteanlagenmit R-744 maßgeblich für die Berechnung des Förderbetrags für den/die Kälteerzeuger. Beachten Sie die Hinweise zur Berechnung der Kälteleistung im Merkblatt Fachtechnik auf www.bafa.de."
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Kühlmöbel für Supermarkt-Kälteanlagen (keine steckerfertigen Geräte) ",
                                                        [   
                                                            [
                                                                "Länge der Kühlmöbel:", 
                                                                "lfdm", 
                                                                "7",
                                                            ],
                                                        ],
                                                    ],

                                                    [

                                                        " Kühlsoleleitungen ",
                                                        [   
                                                            [
                                                                "Länge der Rohrleitung:", 
                                                                "lfdm ", 
                                                                "7",
                                                            ],
                                                            [
                                                                "Rohrdurchmesser:", 
                                                                "mm",
                                                                "7", 
                                                            ],
                                                        ],

                                                    ],
                                                ]   

                                };



var TableThermischeSpeicher =  {    name:       "Thermische Speicher für Wärme und Kälte",
                                    hilfe:      "Geben Sie hier bitte die Leistung oder das Volumen der thermischen Speicher an, die gefördert werden sollen.",
                                    artikel:    [
                        
                                                    [
                                                        "Warmwasser-Schichtenspeicher",
                                                        [   
                                                            [
                                                                "Volumen:", 
                                                                "dm³ (V = 400,00 bis 4000,00 dm³)", 
                                                                "7", 
                                                            ],
                                                        ],
                                                    ],
                                                        
                                                        
                                                    [
                                                        "Kaltwasserspeicher",
                                                        [   
                                                            [
                                                                "Volumen:", 
                                                                "dm³ (V = 500,00 bis 2000,00 dm³)", 
                                                                "7", 
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Eisspeicher: Betongehäuse mit Wärmeübertrager",
                                                        [   
                                                            [
                                                                "Kapazität:", 
                                                                "kWh (Q̇₀ = 150,00 bis 24000,00 kWh)", 
                                                                "8", 
                                                            ],
                                                        ],
                                                    ],

                                                    [
                                                        "Latentwärmespeicher-Systeme: Behälter mit LWS (Kapsel)",
                                                        [   
                                                            [
                                                                " Kapazität:", 
                                                                "kWh (Q̇₀ = 60,00 bis 1400,00 kWh)", 
                                                                "7", 
                                                            ],
                                                        ],
                                                    ],
                    
                                                ]
                                };