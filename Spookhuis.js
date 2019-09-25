alert("enge spookhuis neef")

//Begin
alert("Je wordt wakker in een bed en je weet niet waar je bent")
alert("Je kijkt om je heen, Je ziet een houten kast en een deur, er zitten geen ramen in de kamer.")

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
	keuze=prompt("A: Open de deur of B: Open de kast","A/B");
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
						}
											keuze=prompt("Ga je door de A:linker deur of B:rechter deur","A/B")
												if (keuze=="A"){
													alert("nog niet af")
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
				alert("nog niet af")
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
										alert("Nog niet af")
											}else if (keuze==B){
												alert("Je valt van de trap en breekt je nek, Einde Game")
											}
									
													}else if (keuse=="B"){ 
														alert("Je voelt een hand van achter op je schouder")
															keuze=prompt("A:Ren je weg of B:steek je achter je")
																if (keuze=="A"){
																	alert("Je rent tegen de de deur en valt na achter van de trap")
																	alert("Je valt van de trap en breekt je nek, Einde Game")
																}
		}
	}
}

function Linkerdeur(){


}



//1e kamer

			

		//open de deur

		//open kast MES
		// 			else if (keuze=="B"){
		// 	alert("Je vind een mes in de kast")
		// }
		// 		keuze=prompt("A:Open je de deur of B: kijk je nog rond","A/B")
		// 			if (keuze=="A"){
		// 				alert("Hij gaat open en je komt in een andere kamer met 2 deuren, 1 aan de linker kant 1 aan de rechter kant")
		// 			}
		// 			else if (keuze=="B"){
		// 				alert("Je ziet niks")
		// 			}
		// 		keuze= prompt("A:Open De deur","A")
		// 			if (keuze=="A"){
		// 				alert("Hij gaat open en je komt in een andere kamer met 2 deuren, 1 aan de linker kant 1 aan de rechter kant")
					
		// 		//2e kamer rechts

		// 		keuze=prompt("Ga je door de A:linker deur of B:rechter deur","A/B")
		// 			}else if (keuze=="B"){
		// 				alert("De deur valt achter je in het slot en je komt in een kamer met daarin een donkere gedaante en hij komt op je af naast de gedaante zit een deur")
		// 			}
		// 		keuze=prompt("A:Probeer je hem te steken of B:Probeer bij de deur te komen","A/B")
		// 			if (keuze=="A"){
		// 				alert("De gedaante slaat je neer(Verloren)")
		// 			}
		// 			else if (keuze=="B"){
		// 				alert("De deur zit op slot")
		// 			}
		// 		keuze=prompt("A:Probeer je hem te steken of B:probeer je hem te ontwijken","A/B")
		// 			if (keuze=="A"){
		// 				alert("De gedaante slaat je neer(Verloren)")
		// 			}
		// 			else if (keuze=="B"){
		// 				keuze=prompt("A:Probeer je hem te steken of B:probeer je hem te ontwijken","A/B")
		// 			}
		// 			if (keuze=="A"){
		// 				alert("De gedaante slaat je neer(Verloren)")
		// 			}
		// 			else if (keuze=="B"){alert("Je gaat knocked")
		// 				alert("Je wordt wakker, in een ziekhuis er zit een persoon naast")
		// 			}