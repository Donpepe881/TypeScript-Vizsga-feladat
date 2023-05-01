// 1. feladat
function Rng(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
}
;
var randomSzam = Rng(1, 30);
document.write(randomSzam + "");
// 2. feladat
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltSzamok = [];
    for (var i = 0; i < meret; i++) {
        generaltSzamok.push(Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar));
    }
    return generaltSzamok;
}
var generaltTomb = TombGenerator(10, 1, 30);
document.write("<hr>" + generaltTomb);
// 3. feladat
function Duplazo(vizsgaltTomb) {
    var megduplazottTomb = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        megduplazottTomb.push(2 * vizsgaltTomb[i]);
    }
    return megduplazottTomb;
}
var duplazottTomb = Duplazo(generaltTomb);
document.write("<hr>" + duplazottTomb);
// 4. feladat
function PrimekSzama(vizsgaltTomb) {
    var oszto = 0;
    var primSzamokMennyisege = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        for (var j = 1; j <= 30; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                oszto++;
            }
            ;
        }
        if (oszto == 2) {
            primSzamokMennyisege.push(vizsgaltTomb[i]);
        }
        ;
    }
    ;
    return primSzamokMennyisege;
}
var primSzamok = PrimekSzama(generaltTomb);
document.write("<hr>" + primSzamok);
// 5. feladat
function EgyediElemek(vizsgaltTomb) {
    var egyediTomb = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < egyediTomb.length; j++) {
            if (vizsgaltTomb[i] == egyediTomb[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            egyediTomb.push(vizsgaltTomb[i]);
        }
    }
    return egyediTomb;
}
var egyediSzamok = EgyediElemek(generaltTomb);
document.write("<hr>" + egyediSzamok);
