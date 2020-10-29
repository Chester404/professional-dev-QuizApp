fetch("questions.json")
.then(res => {
    return res.json()
})
.then(questionLoader => {
    questions = questionLoader
})
.catch( err => {
    console.error(err)
});