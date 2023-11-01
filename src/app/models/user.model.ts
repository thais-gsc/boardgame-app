import { Boardgame } from "./boardgame.model";

export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public favoriteList: Array<Boardgame>    
    ) {}

    public addFavorite(boardgame: Boardgame) {
        this.favoriteList.push(boardgame);
    }

    public removeFavorite(boardgame: Boardgame) {
        this.favoriteList = this.favoriteList.filter((item) => item.id !== boardgame.id);
    }
}