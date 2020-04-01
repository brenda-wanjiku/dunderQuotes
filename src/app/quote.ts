export class Quote {
    public upvotes:number
    public downvotes:number
    constructor (public poem : String,public author : String, public submitBy : String){
    this.upvotes =0;
    this.downvotes =0;
    }
}
