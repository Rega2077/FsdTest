const data = [
    {
        question: "What is the Time Complexity of Merge Sort ?",
        options: ["O(NLogN)", "O(LogN)", "O(N)", "O(N^2)"],
        answer: "O(NLogN)"
    },
    {
        question: "What is the Codeforces username of the best Competitive Programmer in the world ?",
        options: ["ecnerwala", "tourist", "ksun", "jiangly"],
        answer: "tourist"
    },
    {
        question: "What is the Time Complexity of Bubble Sort ?",
        options: ["O(NLogN)", "O(N^3)", "O(N^2)", "O(N)"],
        answer: "O(N^2)"
    }
];
let cur = 0;let score = 0;const total = data.length;
function load() {
    const ques = document.getElementById("question");
    const opt = document.getElementById("options");
    ques.textContent = data[cur].question;
    opt.innerHTML = "";
    data[cur].options.forEach(option => {
        const temp = document.createElement("div");
        temp.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        opt.appendChild(temp);
    });
    document.getElementById("prev").style.display = cur === 0 ? "none" : "inline-block";
    document.getElementById("next").style.display = cur === total - 1 ? "none" : "inline-block";
    document.getElementById("submit").style.display = cur === total - 1 ? "inline-block" : "none";
}
function get() {
    const options = document.getElementsByName("option");
    for (let option of options) {
        if (option.checked) {
            return option.value;
        }
    }
    return null;
}
function next() {
    const select = get();
    if (select === data[cur].answer) {
        score++;
    }
    cur++;load();
}
function prev() {
    cur--;load();
}
function submit() {
    const select = get();
    if (select === data[cur].answer)score++;
    const temp2 = document.getElementById("result");
    temp2.textContent = `Your Score: ${((score / total) * 100).toFixed(2)}%`;
    document.getElementById("contain").style.display = "none";
}
window.onload = load;
