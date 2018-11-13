//This code has 3 sections
    //1. Data
    //2. Variables
    //3. Functions
    
//1. Data
    //Questions
    var questions = [
        {
            title: "Question 1",
            question: "You are exhausted because your week was endless and less than great.\nHow are you going to spend your weekend?",
            possibleAnswers: [
                "I'll call my friends to ask about their plans. I heard that a nice restaurant opened / a nice comedy is playing in the cinemas / there are big discounts at the paintball club. We should all go out together!",
                "I'll switch on the \"Don't disturb\" mode on my phone and stay at home. I'll watch a new episode of my favorite TV show, do a puzzle, and take a long bath with a book."
            ]
        },
        {
            title: "Question 2",
            question: "Which of these two descriptions suits you more?",
            possibleAnswers: [
                "The most important thing for me is what's happening here and now. I asses real situations and pay attention to details.",
                "Facts are boring. I love to dream and play over upcoming events in my mind. I rely more on intuition than information."
            ]
        }, 
        {
            title: "Question 3",
            question: "A competitor of your current employer is trying to entice you. You have doubts because the salary is much higher there, but the staff here is great. Moreover, the head of your department hinted that he would recommend you to the bosses when he retires. How are you going to make a decision?",
            possibleAnswers: [
                "I'll learn all the available information about the competitor, ask my HR manager for advice, and draw a chart with all the pros and cons. In such cases, it's important to weigh up all the arguments and assess the situation with a sharp mind.",
                "I'll listen to my feelings. I always try to follow my heart."
            ]
        }, 
        {
            title: "Question 4",
            question: "Only two weeks are left before your close friend's wedding. How are the preparations going?",
            possibleAnswers: [
                "One month ago, I chose the saxophonist who will play a medley of our school songs / collected the couple's photo love story / composed a poem / pressed my suit / made appointments with the stylist and makeup master. I prepare to be fullt armed!",
                "Why prepare? I'll be having fun and enjoying myself at the party. I'll improvise my wedding speech. The best things in life happen spontaneously."
            ]
        }
    ];
    
    //Personality traits
    var traits = [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]];
    
    //Personality types
    var personalityTypes = [
        {
          code: "",
          title: "",
          acronym: `
          
          `,
          description: "",
          link: ""
        }
    ];
    
//2. Variables  
    //HTML Elements
       //Question page
        var questionPage = document.getElementById("question-page");
        var elementQuestionNumber = document.getElementById("question-n");
        var elementQuestion = document.getElementById("question-text");
        var elementAnswer0 = document.getElementById("text-answer0");
        var elementAnswer1 = document.getElementById("text-answer1");
        var elementProgress = document.getElementsByClassName("progress-bar")[0];
        
        //Results page
    
    //Others
    var index = 0;
    var personalityResult = "";
    var progressPercentage = 5;

//3. Functions
    //Append question info
    function displayQuestion(questionObj) {
        elementQuestionNumber.textContent = questionObj.title;
        elementQuestion.textContent = questionObj.question;
        elementAnswer0.textContent = questionObj.possibleAnswers[0];
        elementAnswer1.textContent = questionObj.possibleAnswers[1];
        elementProgress.style.width = progressPercentage + "%";
        elementProgress += 22.5
    }
    
    //Function to start test
    function startTest() {
        //Hide start
        document.getElementById("start").style.display = "none";
                
        //Display question-page with first question
        questionPage.style.display = "block";
        displayQuestion(questions[0]);
        
    }
    
    //Function for answering questions and moving on to the next one

    
    //Function for ending test and displaying result
    