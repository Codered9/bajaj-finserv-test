const express = require("express");
const app = express();
const port = 3000;
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
    user_id: "sudhanshu_srivastava_23032000",
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
    let maxalphabet = ""
    let val = 0
    alpha.forEach((ele) => {
        const asciival = ele.toLowerCase().charCodeAt(0)
        if(asciival > val){
            maxalphabet = ele
            val = asciival
        }
    }) 
    alpha.sort()
    data.highest_alphabet.push(maxalphabet)
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
