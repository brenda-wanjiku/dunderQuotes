export class Quote {
    public upvotes:number;
    public downvotes:number;
    public showDetails:boolean;
    constructor (public poem : String,public author : String, public submitBy : String ,  public date : Date){
    this.upvotes =0;
    this.downvotes =0;
    this.showDetails = false
    }
}
