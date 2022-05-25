const quiz = [
    {
        question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
        answers: [
            "スーパーファミコン",
            "プレイステーション2",
            "ニンテンドースイッチ",
            "ニンテンドーDS"
        ],
        correct: "ニンテンドーDS"
    }, {
        question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
        answers: [
            "MOTHER2",
            "スーパーマリオブラザーズ3",
            "スーパードンキーコング",
            "星のカービィ"
        ],
        correct: "MOTHER2"
    }, {
        question: "ファイナルファンタジーⅣの主人公の名前は？",
        answers: [
            "フリオニール",
            "クラウド",
            "ティーダ",
            "セシル"
        ],
        correct: "セシル"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//HTMLの要素には$を入れる
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//ボタンを押したら正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;
    
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert("終了！あなたの正解数は"+ score + "/"+ quizLength)
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
