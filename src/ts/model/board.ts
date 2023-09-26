import { IBoard, ISpace } from "./interfaces";

// class BoardImpl implements IBoard {
//     Spaces = Array<ISpace>(0)

//     setup(): void {
//     }

//     get spaces(): Array<ISpace> {
//         return [...this.Spaces];
//     }

//     display() : string {
//         let out = ""
//         let total = 100;
//         for (let i : number = 10; i >= 1; i--) {
//             let row = []
//             for (let j : number = 1; j<=10; j++) {
//                 row.push(total--);
//             }
//             row = (i%2==0) ? row : row.reverse()
//             out += row
//         }
//         return out
//     }
// }

class BoardImpl implements IBoard {
    private Spaces : Array<ISpace>;
    constructor(spaces: Array<ISpace>) {
        this.Spaces = Array<ISpace>(...spaces);
    }
    reset() {
        
    }
    get spaces(): Array<ISpace> {
        return this.Spaces
    }
    set spaces(spaces: Array<ISpace>) {
        this.Spaces.push(...spaces);
    }
    display() : string {
        let out = ""
        let total = 100;
        for (let i : number = 10; i >= 1; i--) {
            let row = []
            for (let j : number = 1; j<=10; j++) {
                row.push(total--);
            }
            row = (i%2==0) ? row : row.reverse()
            out += row
        }
        return out
    }
}

export function Board(spaces: Array<ISpace>) : IBoard {
    return new BoardImpl(spaces)
}