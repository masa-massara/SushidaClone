// apiを使ってランダムな文を取得してくる
const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay")

// 非同期でランダムな文章を取得
function GetRandomSentence() {
  // データを用意している状態(プロミス状態)
  // fetchはサーバに欲しいデータのリクエストを送信したら、そのレスポンスを待ちつつ、別の処理も進められる
  return fetch(RANDOM_SENTENCE_URL_API)
    .then((response) => response.json())
    .then((data) => data.content);
}


// ランダムな文章を取得して表示する
// async と await で待っている(非同期処理をしている)
// RenderNextSentence関数で取れた文章をtype-displayに表示
async function RenderNextSentence() {
    const sentence = await GetRandomSentence();
    console.log(sentence);

    typeDisplay.innerText = sentence;
}

RenderNextSentence();

