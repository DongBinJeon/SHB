const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

completion.forEach(function(name){
    // console.log(name);
    console.log(name + " = " + participant.indexOf(name));
    var idx = participant.indexOf(name);
    participant.splice(idx,1);

});
console.log(participant[0]);