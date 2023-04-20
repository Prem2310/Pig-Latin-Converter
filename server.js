const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

function pigLatin(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let firstLetter = word[0];
  let restOfWord = word.slice(1);
  if (vowels.includes(firstLetter)) {
    return word + "way";
  } else {
    return restOfWord + firstLetter + "ay";
  }
}

app.get("/", (req, res) => {
  console.log(
    "Someone made a request to /api with sentence " + req.query.sentence
  );
  if (!req.query.sentence) {
    res.json({ output: "Please enter a sentence" });
    return;
  }
  let sentence = req.query.sentence;
  let words = sentence.split(" ");
  let pigLatinWords = words.map((word) => pigLatin(word));
  let pigLatinSentence = pigLatinWords.join(" ");
  res.json({ output: pigLatinSentence });
});

app.listen(5173, () => {
  console.log("Server is running on port 5173");
});
