//2. using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    // console.log(question);
    const button = question.querySelector('.question-btn');
    // console.log(button);
    button.addEventListener('click', () => {

        //to remove show-text class from questions excpet selected question
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
});

f





//1 traversing the dom

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(button => {
//     button.addEventListener('click', e => {
//         //parent of button = question-title. Parent of question-title is .question class
//         //we need to add the .show-text to. 
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text');
//     })
// });