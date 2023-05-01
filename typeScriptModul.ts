// 1. feladat

function Rng(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
};

let randomSzam: number = Rng(1, 30);
document.write(randomSzam + "");


// 2. feladat

function TombGenerator(meret: number, alsoHatar: number, felsoHatar: number): number[] {
    let generaltSzamok: number[] = [];
    for (let i: number = 0; i < meret; i++) {
        generaltSzamok.push(Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar));
    }
    return generaltSzamok;
}

let generaltTomb: number[] = TombGenerator(10, 1, 30);
document.write("<hr>" + generaltTomb);



// 3. feladat

function Duplazo(vizsgaltTomb: number[]): number[] {
    let megduplazottTomb: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        megduplazottTomb.push(2 * vizsgaltTomb[i])
    }
    return megduplazottTomb;
}

let duplazottTomb: number[] = Duplazo(generaltTomb);
document.write("<hr>" + duplazottTomb);



// 4. feladat

function PrimekSzama(vizsgaltTomb: number[]): number[] {
    let oszto: number = 0;
    let primSzamokMennyisege: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        for (let j: number = 1; j <= 30; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                oszto++;
            };
        }
        if (oszto == 2) {
            primSzamokMennyisege.push(vizsgaltTomb[i]);
        };
    };
    return primSzamokMennyisege;
}

let primSzamok: number[] = PrimekSzama(generaltTomb);
document.write("<hr>" + primSzamok);


// 5. feladat

function EgyediElemek(vizsgaltTomb: number[]): number[] {
    let egyediTomb: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE: boolean = false;
        for (let j: number = 0; j < egyediTomb.length; j++) {
            if (vizsgaltTomb[i] == egyediTomb[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            egyediTomb.push(vizsgaltTomb[i]);
        }
    }
    return egyediTomb
}

let egyediSzamok: number[] = EgyediElemek(generaltTomb)
document.write("<hr>" + egyediSzamok)