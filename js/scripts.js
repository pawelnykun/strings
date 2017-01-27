//deklaracja i inicjalizacja zmiennych
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
//aktualizacja napisu i jego wyświetlenie
animal = animal.toUpperCase();
text = text.replace( 'Papugi', animal );
console.log( text );
//wyświetlenie połowy napisu
console.log( text.substr( 0, text.length/2 ) );