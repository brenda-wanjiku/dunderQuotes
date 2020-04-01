export class Quote {
    public date: Date;
    public upvotes:number;
    public downvotes:number;
    public showDetails:boolean;
    constructor (public poem : String,public author : String, public submitBy : String){
    this.upvotes =0;
    this.downvotes =0;
    this.showDetails = false
    }
}
