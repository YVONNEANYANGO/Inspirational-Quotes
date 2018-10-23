export class Quote {
  public showDescription:boolean
  constructor(public id:number, public name:string, public description:string, public upVotes:number, public downVotes:number,public author:string,public quote:string){
    this.showDescription=false
  }
}
