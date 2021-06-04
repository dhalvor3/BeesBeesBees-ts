class HoneyMakerBee extends Bee { 
    honeyPot: number;
    constructor (){
        super();
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
        };
        makeHoney(): void{
            this.honeyPot += 1;
        }
        giveHoney(): void{
            this.honeyPot -= 1;
        }
};

