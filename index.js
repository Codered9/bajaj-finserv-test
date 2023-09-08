const express = require("express");
const app = express();
const port = 80;
app.use(express.json());

function isNumeric(inputString) {
  return /^\d+$/.test(inputString);
}

function isAlphabetic(inputString) {
  return /^[a-zA-Z]+$/.test(inputString);
}

app.post("/bfhl", (req, res) => {
  let data = {
    is_success: true,
    user_id: "ss1163",
    email: "ss1163@srmist.edu.in",
    roll_number: "RA2011030010042",
    numbers: [],
    alphabets: [],
    highest_alphabet: [],
  };
  const body = req.body;
  if (body.data) {
    body.data.forEach((str) => {
        if(isNumeric(str)){
            data.numbers.push(str)
        }
        else{
            data.alphabets.push(str)
        }
    });
    let alpha = data.alphabets
    alpha.sort()
    data.highest_alphabet.push(alpha[alpha.length -1])
  }

  console.log(body);
  res.json(data);
});

app.get("/bfhl", (req, res) => {
  res.json({
    "operation_code": 1
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
