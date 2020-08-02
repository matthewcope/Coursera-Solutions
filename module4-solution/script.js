
/*
Expected Output:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {
    var name = names[name]
    var firstLetter = name.charAt().toLowerCase();
    if (firstLetter == "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  };
})();
