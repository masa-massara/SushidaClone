// apiを使ってランダムな文を取得してくる
const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay");

// 非同期でランダムな文章を取得
function GetRandomSentence() {
  // データを用意している状態(プロミス状態)
  // fetchはサーバに欲しいデータのリクエストを送信したら、そのレスポンスを待ちつつ、別の処理も進められる
  return fetch(RANDOM_SENTENCE_URL_API)
    .then((response) => response.json())
    .then((data) => data.content);
}

//DOM操作のところを自分で実践
//spanタグの中に文字を入れるところはできた
function addSpan(sentence) {
  const span = document.createElement("span");
  console.log(span);
  splitChar(sentence);
  span.innerText = sentence;
}

//文字を分割するとこを自分で実践
function splitChar(sentence) {
  //スプレッド構文で文字の分割はできた
  //これを一文字ずつspanタグの中に入れられない
  const dividedChar = [...sentence];
  console.log(dividedChar);
  dividedChar.forEach(element => {
    const span = document.createElement("span");
    span.innerText = element;
    console.log(span);
  });
}

// ランダムな文章を取得して表示する
// async と await で待っている(非同期処理をしている)
async function RenderNextSentence() {
  const sentence = await GetRandomSentence();

  typeDisplay.innerText = sentence;
  addSpan(sentence);
}

RenderNextSentence();
