// const url ="https://the-trivia-api.com/api/questions"

// async function getTrivia(){
//     let response = await fetch(url);
//     let data = await response.json();
//     return data;
// }
// getTrivia().then((data) =>{
//     // const results = data.results;
//     console.log(data.results);
//     // document.getElementById("question").innerHTML = results.question;
//     // document.getElementById("category").innerHTML = results.category;
// }
// )

let result=[]


//call api using xmlHttpRequest->get trivia
let url = ' https://the-trivia-api.com/api/questions'
 
const xhr = new XMLHttpRequest()
//console.log(xhr)
xhr.open('GET',url)
 
xhr.onload =function() {
    result = JSON.parse(xhr.responseText)
    console.log(result)
   const results = result[0];
   console.log(results)
    document.getElementById("question").innerHTML = results.question;
    document.getElementById("category").innerHTML = results.category;
   
 
 
    // nextBtn.onclick = function(){
     
    //     renderQuestion()
    // }
   
   
 
 
}
 
 
xhr.send()