const quiz = [
    {
        question: '大好物を見ると脳内に発生する物質の名前は？',
        answers: [
            'ヒスタミン',
            'ノルアドレナリン',
            'ドーパミン',
            'オレキシン'        
        ],
        correct: 'オレキシン'
    }, {
        question: '肩こりを治す物質の名前は？',
        answers: [
            'カプサイシン',
            'ドコサヘキサエン酸',
            'GHQ',
            'EPA'
        ],
        correct: 'EPA'
    }, {
        question: 'あくびの効果とは？',
        answers: [
            '酸素不足を補う',
            'リラックスできる',
            '空腹感を抑える',
            '血流を良くする'        
        ],
        correct: 'リラックスできる'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const soundO =document.getElementById('soundO');
const soundX = document.getElementById('soundX');
// console.log(soundO)
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        soundO.play()
        window.alert('正解！');
        // console.log(soundO)
        score++;
    } else {
        soundX.play()
        window.alert('不正解！');

    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題がまだあればこちらを実行
        setupQuiz();
    } else {
        // 問題がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
