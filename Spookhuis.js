alert("enge spookhuis neef")

//Begin
alert("Je wordt wakker in een bed en je weet niet waar je bent");
alert("Je kijkt om je heen, Je ziet een houten kast en een deur, er zitten geen ramen in de kamer.");

//start();
start();

function start() {
	var keuze= prompt("A:Blijf liggen of B: Sta op", "A/B");
		if (keuze=="A"){
			win();
				}else if (keuze=="B"){
					level1();
	}
}

function win(){
	alert("Je wint de game")
}

function level1(){
	keuze=prompt("A: Open de deur of B: Open de kast","A/B")
		if (keuze=="A"){
			level2NOMES();
				}else if (keuze=="B"){
					level2MES();
	}

	
}
function kamer2dingie(){
	alert("Hij gaat open en je komt in een andere kamer met 2 deuren, 1 aan de linker kant 1 aan de rechter kant")

}
function level2MES(){
	alert("Je vind een mes in de kast")
		keuze=prompt("A:Open je de deur of B: kijk je nog rond","A/B")
			if (keuze=="A"){
				kamer2dingie();
			}else if (keuze=="B"){
				alert("Je ziet niks")
				}keuze=prompt("Ga je door de A:linker deur of B:rechter deur","A/B")
				if (keuze=="A"){
					LinkerdeurMES();
				}else if (keuze=="B"){
					 alert("De deur valt achter je in het slot en je komt in een kamer met daarin een donkere gedaante en hij komt op je af naast de gedaante zit een deur")
					RechterdeurMES();
								}

		}
	

function Failrechterdeur(){
	alert("De gedaante slaat je neer(Verloren)")

}
function level2NOMES(){
	kamer2dingie();
		keuze=prompt("Ga je door de A:linker deur of B:rechter deur","A/B")
		if (keuze=="A"){
			Linkerdeur();
		}else if (keuze=="B"){
			Rechterdeur();
		}
}

function RechterdeurMES(){
	keuze=prompt("A:Probeer je hem te steken of B:Probeer bij de deur te komen","A/B")
			if (keuze=="A"){
				Failrechterdeur();
			}else if (keuze=="B"){
				alert("De deur zit op slot")
				keuze=prompt("A:Probeer je hem te steken of B:Probeer je hem te ontwijken","A/B")
				if (keuze=="A"){
					Failrechterdeur();
				}else if (keuze=="B"){
					alert("Hij mistje")
					keuze=prompt("A:Probeer je hem te steken of B:Probeer je hem te ontwijken","A/B")
					if (keuze=="A"){
						Failrechterdeur();
					}else if (keuze=="B"){
						alert("Hij mistje weer")
						keuze=prompt("A:Probeer je hem te steken of B:Probeer je hem te ontwijken","A/B")
						if (keuze=="A"){
							Failrechterdeur();
						}else if (keuze=="B"){
							alert("Je valt op eens op de grond, en verliest bewustzijn.")
							alert("Je wordt wakker in een ziekenhuis, er zit een persoon naastje.")
							alert("Hij vertelt je dat hij jou op een parkeerplaats heeft gevonden met een mes in je handen. en je maar naar het ziekenhuis heeft gebracht.")
							alert("gefeliciteerd je bent niet dood gegaan, Einde Game.")
								}				
							}
						}
					}
				}
function Rechterdeur(){
	aler("De deur valt achter je in het slot en je komt in een kamer met daarin een donkere gedaante en hij komt op je af naast de gedaante zit een deur")
	keuze=prompt("A:Probeer je hem te slaan of B:Probeer bij de deur te komen","A/B")
			if (keuze=="A"){
				Failrechterdeur();
			}else if (keuze=="B"){
				alert("De deur zit op slot")
				keuze=prompt("A:Probeer je hem te slaan of B:Probeer je hem te ontwijken","A/B")
				if (keuze=="A"){
					Failrechterdeur();
				}else if (keuze=="B"){
					alert("Hij mistje")
					keuze=prompt("A:Probeer je hem te slaan of B:Probeer je hem te ontwijken","A/B")
					if (keuze=="A"){
						Failrechterdeur();
					}else if (keuze=="B"){
						alert("Hij mistje weer")
						keuze=prompt("A:Probeer je hem te slaan of B:Probeer je hem te ontwijken","A/B")
						if (keuze=="A"){
							Failrechterdeur();
						}else if (keuze=="B"){
							alert("Je valt op eens op de grond, en verliest bewustzijn.")
								alert("Je wordt wakker in een ziekenhuis, er zit een persoon naastje.")
								alert("Hij vertelt je dat hij jou op een parkeerplaats heeft gevonden. en je maar naar het ziekenhuis heeft gebracht.")
								alert("gefeliciteerd je bent niet dood gegaan, Einde Game.")
				}
			}
		}
	}
}

function LinkerdeurMES(){
	alert("Je gaat door de deur en je ziet een gang aan het einde van de gang zit een deur, links van de gang gaat een trap naar beneden, de deur valt in het slot")
		keuze=prompt("A:loop naar voren","A")
			if (keuze=="A"){
				alert("Je loopt naar voren, maar de lichten vallen uit en je ziet niks meer.")
				keuze=prompt("A:loop je naar voren,B:blijf je stil staan","A/B")
				if (keuze=="A"){
					alert("je loopt naar voren en voelt voor je de houten deur")
					keuze=prompt("A:Probeer je hem open te doen of B:loop je naar links","A/B")
					if(keuze=="A"){
						Linkerdeur2eMES();
					}else if (keuze=="B"){
						alert("Je valt van de trap en breekt je nek, Einde Game")
						}
				}else if (keuze=="B"){ 
							alert("Je voelt een hand van achter op je schouder")
							keuze=prompt("A:Ren je weg of B:steek je achter je")
							if (keuze=="A"){
								alert("Je rent tegen de de deur en valt na achter van de trap")
								alert("Je valt van de trap en breekt je nek, Einde Game")
							}else if (keuze=="B"){
								alert("Je hoort de gedaante achter je schreuwen, de lichten gaan weer aan")
								keuze=prompt("A:Loop je naar de deur of B:naar beneden","A/B")
								if (keuze=="A"){
									Linkerdeur2eMes();
								}else if(keuze=="B"){
									BenedenMes();
								}
							} 
			}
		}
	}
function Linkerdeur(){
	alert("Je gaat door de deur en je ziet een gang aan het einde van de gang zit een deur, links van de gang gaat een trap naar beneden, de deur valt in het slot")
		keuze=prompt("A:loop naar voren","A")
			if (keuze=="A"){
				alert("Je loopt naar voren, maar de lichten vallen uit en je ziet niks meer.")
				keuze=prompt("A:loop je naar voren,B:blijf je stil staan","A/B")
				if (keuze=="A"){
					alert("je loopt naar voren en voelt voor je de houten deur")
					keuze=prompt("A:Probeer je hem open te doen of B:loop je naar links","A/B")
					if(keuze=="A"){
						alert("De deur zit op slot")
						keuze=prompt("Loop naar beneden","A")
						beneden();
					}else if (keuze==B){
						alert("Je valt van de trap")
						Beneden();
						}
				}else if (keuse=="B"){ 
							alert("Je voelt een hand van achter op je schouder")
							}
							keuze=prompt("A:Ren je weg of B:Probeer je het te slaan")
							if (keuze=="A"){
								alert("Je rent tegen de de deur en valt na achter van de trap")
								beneden();
							}else if (keuze=="B"){
								alert("Je bent te laat en je voelt een arm om je nek gaan")
								alert("Je gaat bewusteloos.Einde Game")
								}
							} 
			
		}


function Linkerdeur2eMES(){
	alert("Je opent de deur en ziet een trap naar boven")
	keuze=prompt("A:Ga je naar boven of B:ga je naar beneden","A/B")
	if (keuze=="A"){
		alert("je gaat naar boven en komt op een zolder de kamer heeft een raam en een deur")
		keuze=prompt("A:Probeer je door het raam te klimmen of B:de deur te openen","A/B")
		if (keuze=="A"){
			alert("Je klimt door het raam en staat op een schuin dak")
			keuze=prompt("A:Klim je terug of B:probeer je bij de rand te komen","A/B")
			if (keuze=="A"){
				alert("Je klimt terug naar binnen")
				keuze=prompt("A:open de deur","A")
				if (keuze=="A"){
					NietDak();
				}
			}else if (keuze=="B"){
				alert("Je glijdt uit en valt naar beneden.Einde Game")
			}
		}else if (keuze=="B"){
			NietDak();
}

}
}

function BenedenMes(){
	alert("Je loopt naar beneden en je ziet 2 deuren eentje rechtvoor je en de andere links daarvan")
	keuze=prompt("A:Ga je door de deur rechtvoor je of de B: ga je door de deur aan de linker kant","A/B")
	if (keuze=="A"){
		alert("Je gaat door de deur en komt buiten.Einde Game")
	}else if(keuze=="B"){
	alert("Je doet de deur open en er komen allemaal donkere gedaantes die je naar binnen sleuren. Einde Game")
	}
}

function Beneden(){
	alert("Je loopt naar beneden en je ziet 2 deuren eentje rechtvoor je en de andere links daarvan")
	keuze=prompt("A:Ga je door de deur rechtvoor je of de B: ga je door de deur aan de linker kant","A/B")
	if (keuze=="A"){
		alert("Je doet de deur open en er komen allemaal donkere gedaantes die je naar binnen sleuren. Einde Game")
	}else if(keuze=="B"){
		alert("Je gaat door de deur en komt buiten.Einde Game")
	}
}
function NietDak(){
	alert("Je gaat door de deur en komt op een balkon")
			keuze=prompt("A:Loop je terug om naar een ladder te zoeken of B:spring je van het balkon")
			if (keuze=="A"){
				alert("Je loopt terug naar binnen, maar hoor geluiden van beneden komen")
				keuze=prompt("A:Zoek je een ladder of B:spring je van het balkon")
				if (keuze="A"){
					alert("Je ziet een touw ladder")
					keuze=prompt("A:Neem mee en loop naar het balkon","A")
					if (keuze=="A"){
						alert("je gooit de touw ladder naar beneden")
						prompt("A:klim naar beneden","A")
						alert ("Je komt op de grond en rent weg.Einde Game")
					}
				}else if (keuze=="B"){
					alert("Je springt naar beneden maar je zag niet hoe hoog het gebouw eigenlijk was en valt dood.Einde Game")
				}
			}else if (keuze=="B"){
				alert("Je springt naar beneden maar je zag niet hoe hoog het gebouw eigenlijk was en valt dood.Einde Game")
			}	
}



