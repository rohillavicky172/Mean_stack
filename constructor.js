function employee(){
    this.name='';
    this.id='';
    this.address='';
}
var e1 = new employee();
e1.id=1;
e1.name="vicky";
e1.address="Delhi";

show = function(){
    console.log(`objec Details:
    ${this.id},
    ${this.name},
    ${this.address}`);
}
e1.show();
npm