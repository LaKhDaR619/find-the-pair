// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const cardIDs = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
];

export default (req, res) => {
  if (req.method == "POST") {
    const { size } = JSON.parse(req.body);

    const firstPair = shuffle(cardIDs).slice(0, size);
    let cards = shuffle([...firstPair, ...firstPair]);

    console.log(req.body);

    res.statusCode = 200;
    res.json({ cards });
  }
};

// helper functions
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
