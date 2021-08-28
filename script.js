let words=
[
   
    {
        jumbled:"shingle",
        correct:"english"
    
    },

    {
        jumbled:"ocwdr",
        correct:"crowd"
    
    },

    {
        jumbled:"nnrugni",
        correct:"running"
    
    },
    {
        jumbled:"mputcoer",
        correct:"computer"
    
    },
    {
        jumbled:"percsoicmo",
        correct:"microscope"
    
    },
    {
        jumbled:"pieelcs",
        correct:"eclipse"
    
    },
    {
        jumbled:"ateplhen",
        correct:"elephant"
    
    },
    {
        jumbled:"etronivnmne",
        correct:"environment"
    
    },
    {
        jumbled:"onacmnimiotuc",
        correct:"communication"
    
    },
   
    {
        jumbled:"amienstgt",
        correct:"magnetist"
    
    }


]

let currentWord=0;
let score=0;

function displayWord()

{
   document.querySelector("#j-word").innerText = words[currentWord].jumbled;

   document.querySelector("#score").innerText = score;
}

displayWord();


function checkAnswer()
{
   let answer = document.querySelector("#inp").value;
   if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

       score++;

   }

    if(currentWord==words.length-1){

       let msg="";

           if(score===10){
             msg="WoW! You Won "+score;
           }
           else if(score===9){
              msg="Good Game "+score;
           }
          else if(score<9){
              msg="Good Try "+score;
           }

        alert(msg);

        location.reload();
    } 

   
    else {

        currentWord++;
        displayWord();
        document.querySelector("#inp").value="";

    }


}


  
  


