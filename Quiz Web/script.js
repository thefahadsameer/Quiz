const questions = [
    {
        'que': 'Which of the following is not a programming language used in Full Stack Web Development?',
        'a': 'Python',
        'b': 'JavaScript',
        'c': 'HTML',
        'd': 'Ruby',
        'correct': 'c'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Computer Style Sheets',
        'b': 'Cascading Style Sheets',
        'c': 'Creative Style Sheets',
        'd': 'Control Style Sheets',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is a popular front-end JavaScript library?',
        'a': 'React',
        'b': 'Django',
        'c': 'Node.js',
        'd': 'Express.js',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is a popular back-end framework for building web applications?',
        'a': 'Angular',
        'b': 'Laravel',
        'c': 'Vue.js',
        'd': 'Bootstrap',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is not a relational database management system?',
        'a': 'MySQL',
        'b': 'MongoDB',
        'c': 'PostgreSQL',
        'd': 'SQLite',
        'correct': 'b'
    },
    {
        'que': 'What is the purpose of AJAX in web development?',
        'a': 'Asynchronous JavaScript and XML',
        'b': 'Automated JavaScript and XML',
        'c': 'Active JavaScript and XML',
        'd': 'Advanced JavaScript and XML',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is not a version control system?',
        'a': 'Git',
        'b': 'Subversion',
        'c': 'Mercurial',
        'd': 'Docker',
        'correct': 'd'
    },
    {
        'que': 'What does API stand for?',
        'a': 'Advanced Protocol Interface',
        'b': 'Application Programming Interface',
        'c': 'Automated Process Interaction',
        'd': 'All-Purpose Integration',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is not a valid HTTP status code?',
        'a': '200 OK',
        'b': '404 Not Found',
        'c': '503 Service Unavailable',
        'd': '100 Error',
        'correct': 'd'
    },
    {
        'que': 'Which of the following is used for server-side scripting in JavaScript?',
        'a': 'jQuery',
        'b': 'Angular',
        'c': 'Node.js',
        'd': 'Bootstrap',
        'correct': 'c'
    },
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index + 1})  ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnsweer() 
    console.log(ans, data.correct)
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnsweer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Quiz Completed!</h3>
    <h2>${right} / ${total}</h2>`
}

// initial call
loadQuestion();