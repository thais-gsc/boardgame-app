export class Boardgame {
    constructor(
        public id: string,
        public name: string,
        public min_duration: number,
        public max_duration: number,
        public min_players: number,
        public max_players: number
    ) {}
}