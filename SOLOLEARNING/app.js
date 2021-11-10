class Add {
  constructor(...words) {
    this.words = words;
    console.log(this.words);
  }
  print(){
    console.log("$"+this.words.join("$").trim()+"$");
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();