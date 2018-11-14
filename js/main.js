/*
Index:
    1. Data [line 15]
        a. Questions [line 16]
        b. Personality traits [line 52]
        c. Personality types [line 56]
    2. Variables [line 155]
        a. HTML Elements [line 156]
        b. Others [line 173]
    3. Functions [line 178]
        a. Main functions [line 179]
        b. Helper functions [line 238]
*/

//1. Data
    //a. Questions
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
    
    //b. Personality traits
    var traits = [["e", "i"], ["s", "n"], ["t", "f"], ["j", "p"]];
    
    //c. Personality types
    var personalityTypes = {
        intj: {
            name: "INTJ",
            image: "img/INTJ_560.png",
            description: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves.\n\nOften intellectual, INTJs enjoy logical reasoning and complex problem-solving. They approach life by analyzing the theory behind what they see, and are typically focused inward, on their own thoughtful study of the world around them. INTJs are drawn to logical systems and are much less comfortable with the unpredictable nature of other people and their emotions. They are typically independent and selective about their relationships, preferring to associate with people who they find intellectually stimulating.",
            learnMore: "https://www.16personalities.com/intj-personality"
        },
        intp: {
            name: "INTP",
            image: "img/INTP_560.png",
            description: "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity.\n\nINTPs are detached, analytical observers who can seem oblivious to the world around them because they are so deeply absorbed in thought. They spend much of their time focused internally: exploring concepts, making connections, and seeking understanding. To the Architect, life is an ongoing inquiry into the mysteries of the universe.",
            learnMore: "https://www.16personalities.com/intp-personality"
        },
        entj: {
            name: "ENTJ",
            image: "img/ENTJ_560.png",
            description: "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted.\n\nENTJs are analytical and objective, and like bringing order to the world around them. When there are flaws in a system, the ENTJ sees them, and enjoys the process of discovering and implementing a better way. ENTJs are assertive and enjoy taking charge; they see their role as that of leader and manager, organizing people and processes to achieve their goals.",
            learnMore: "https://www.16personalities.com/entj-personality"
        },
        entp: {
            name: "ENTP",
            image: "img/ENTP_560.png",
            description: "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them. Open-minded and unconventional, Visionaries want to analyze, understand, and influence other people.\n\nENTPs enjoy playing with ideas and especially like to banter with others. They use their quick wit and command of language to keep the upper hand with other people, often cheerfully poking fun at their habits and eccentricities. While the ENTP enjoys challenging others, in the end they are usually happy to live and let live. They are rarely judgmental, but they may have little patience for people who can't keep up.",
            learnMore: "https://www.16personalities.com/entp-personality"
        },
        infj: {
            name: "INFJ",
            image: "img/INFJ_560.png",
            description: "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges.\n\nThe Counselor has a unique ability to intuit others' emotions and motivations, and will often know how someone else is feeling before that person knows it himself. They trust their insights about others and have strong faith in their ability to read people. Although they are sensitive, they are also reserved; the INFJ is a private sort, and is selective about sharing intimate thoughts and feelings.",
            learnMore: "https://www.16personalities.com/infj-personality"
        },
        infp: {
            name: "INFP",
            image: "img/INFP_560.png",
            description: "INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; the realism of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own individual flair.\n\nINFPs are sensitive, caring, and compassionate, and are deeply concerned with the personal growth of themselves and others. Individualistic and nonjudgmental, INFPs believe that each person must find their own path. They enjoy spending time exploring their own ideas and values, and are gently encouraging to others to do the same. INFPs are creative and often artistic; they enjoy finding new outlets for self-expression.",
            learnMore: "https://www.16personalities.com/infp-personality"
        },
        enfj: {
            name: "ENFJ",
            image: "img/ENFJ_560.png",
            description: "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas. They are focused on values and vision, and are passionate about the possibilities for people.\n\nENFJs are typically energetic and driven, and often have a lot on their plates. They are tuned into the needs of others and acutely aware of human suffering; however, they also tend to be optimistic and forward-thinking, intuitively seeing opportunity for improvement. The ENFJ is ambitious, but their ambition is not self-serving: rather, they feel personally responsible for making the world a better place.",
            learnMore: "https://www.16personalities.com/enfj-personality"
        },
        enfp: {
            name: "ENFP",
            image: "img/ENFP_560.png",
            description: "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their creative potential.\n\nENFPs are typically agile and expressive communicators, using their wit, humor, and mastery of language to create engaging stories. Imaginative and original, ENFPs often have a strong artistic side. They are drawn to art because of its ability to express inventive ideas and create a deeper understanding of human experience.",
            learnMore: "https://www.16personalities.com/enfp-personality"
        },
        istj: {
            name: "ISTJ",
            image: "img/ISTJ_560.png",
            description: "ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do. Reliable and dutiful, ISTJs want to uphold tradition and follow regulations.\n\nISTJs are steady, productive contributors. Although they are Introverted, ISTJs are rarely isolated; typical ISTJs know just where they belong in life, and want to understand how they can participate in established organizations and systems. They concern themselves with maintaining the social order and making sure that standards are met.",
            learnMore: "https://www.16personalities.com/istj-personality"
        },
        isfj: {
            name: "ISFJ",
            image: "img/ISFJ_560.png",
            description: "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life.\n\nISFJs are conventional and grounded, and enjoy contributing to established structures of society. They are steady and committed workers with a deep sense of responsibility to others. They focus on fulfilling their duties, particularly when they are taking care of the needs of other people. They want others to know that they are reliable and can be trusted to do what is expected of them. They are conscientious and methodical, and persist until the job is done.",
            learnMore: "https://www.16personalities.com/isfj-personality"
        },
        estj: {
            name: "ESTJ",
            image: "img/ESTJ_560.png",
            description: "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way.\n\nESTJs are the consummate organizers, and want to bring structure to their surroundings. They value predictability and prefer things to proceed in a logical order. When they see a lack of organization, the ESTJ often takes the initiative to establish processes and guidelines, so that everyone knows what's expected.",
            learnMore: "https://www.16personalities.com/estj-personality"
        },
        esfj: {
            name: "ESFJ",
            image: "img/ESFJ_560.png",
            description: "ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them. ESFJs like a sense of harmony and cooperation around them, and are eager to please and provide.\n\nESFJs value loyalty and tradition, and usually make their family and friends their top priority. They are generous with their time, effort, and emotions. They often take on the concerns of others as if they were their own, and will attempt to put their significant organizational talents to use to bring order to other people's lives.",
            learnMore: "https://www.16personalities.com/esfj-personality"
        },
        istp: {
            name: "ISTP",
            image: "img/ISTP_560.png",
            description: "ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand. They are independent and adaptable, and typically interact with the world around them in a self-directed, spontaneous manner.\n\nISTPs are attentive to details and responsive to the demands of the world around them. Because of their astute sense of their environment, they are good at moving quickly and responding to emergencies. ISTPs are reserved, but not withdrawn: the ISTP enjoys taking action, and approaches the world with a keen appreciation for the physical and sensory experiences it has to offer.",
            learnMore: "https://www.16personalities.com/istp-personality"
        },
        isfp: {
            name: "ISFP",
            image: "img/ISFP_560.png",
            description: "ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer. ISFPs are quiet and unassuming, and may be hard to get to know. However, to those who know them well, the ISFP is warm and friendly, eager to share in life's many experiences.\n\nISFPs have a strong aesthetic sense and seek out beauty in their surroundings. They are attuned to sensory experience, and often have a natural talent for the arts. ISFPs especially excel at manipulating objects, and may wield creative tools like paintbrushes and sculptor's knives with great mastery.",
            learnMore: "https://www.16personalities.com/isfp-personality"
        },
        estp: {
            name: "ESTP",
            image: "img/ESTP_560.png",
            description: "ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them. They assess situations quickly and move adeptly to respond to immediate problems with practical solutions.\n\nActive and playful, ESTPs are often the life of the party and have a good sense of humor. They use their keen powers of observation to assess their audience and adapt quickly to keep interactions exciting. Although they typically appear very social, they are rarely sensitive; the ESTP prefers to keep things fast-paced and silly rather than emotional or serious.",
            learnMore: "https://www.16personalities.com/estp-personality"
        },
        esfp: {
            name: "ESFP",
            image: "img/ESFP_560.png",
            description: "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people.\n\nESFPs are typically warm and talkative and have a contagious enthusiasm for life. They like to be in the middle of the action and the center of attention. They have a playful, open sense of humor, and like to draw out other people and help them have a good time.",
            learnMore: "https://www.16personalities.com/esfp-personality"
        }
    };
    
//2. Variables  
    //a. HTML Elements
       // Question page
        var questionPage = document.getElementById("question-page");
        var elementQuestionNumber = document.getElementById("question-n");
        var elementQuestion = document.getElementById("question-text");
        var elementTextAnswer0 = document.getElementById("text-answer0");
        var elementTextAnswer1 = document.getElementById("text-answer1");
        var elementRadioAnswer0 = document.getElementById("radio-answer0");
        var elementRadioAnswer1 = document.getElementById("radio-answer1");
        var elementProgress = document.getElementsByClassName("progress-bar")[0];
        
        // Results page
        var elementsResultName = document.getElementsByClassName("result-name");
        var elementResultImage = document.getElementById("result-image");
        var elementResultDescription = document.getElementById("result-description");
        var elementLearnMoreButton = document.getElementById("learn-more-button");
    
    //b. Others
    var index = 0;
    var personalityResult = "";
    var progressPercentage = 5;

//3. Functions
    //a. Main functions
        //Function to start test
        function startTest() {
            //Hide start
            document.getElementById("start").style.display = "none";
                    
            //Display question page with first question
            questionPage.style.display = "block";
            displayQuestion(questions[0]);
        }
        
        //Answer question and move to the next one
        function answerQuestion(answer) {
            //Check for question answered
            if (elementRadioAnswer0.checked == false && elementRadioAnswer1.checked == false) {
                alert("Please answer the question before proceeding")
            }
            else {
                //Add correct trait to personality result
                personalityResult += traits[index][answer];
                
                //Reset inputs
                elementRadioAnswer0.checked = false;
                elementRadioAnswer1.checked = false;
                
                //Next question
                index++;
                
                //If next question is last, chenge button text
                if (index == 3) {
                    event.target.textContent = "Complete test";
                }
                //If current question is last, complete test
                else if (index == 4) {
                    completeTest(personalityTypes[personalityResult]);
                }
                
                displayQuestion(questions[index]);    
            }
        }
        
        //complete test and display result
        function completeTest(personObj) {
            //Hide question page
            questionPage.style.display = "none";
            
            //Insert result info
            for (let i = 0; i < elementsResultName.length; i++) {
                elementsResultName[i].textContent = personObj.name;                
            }
            elementResultImage.src = personObj.image;
            elementResultImage.alt = personObj.name + " image";
            elementResultDescription.textContent = personObj.description;
            elementLearnMoreButton.setAttribute("href", personObj.learnMore); 
        
            //Display result page
            document.getElementById("result-page").style.display = "block";
        }
    
    //b. Helper functions
        //Append question info
        function displayQuestion(questionObj) {
            elementQuestionNumber.textContent = questionObj.title;
            elementQuestion.textContent = questionObj.question;
            elementQuestion.className = "my-5";
            elementTextAnswer0.textContent = questionObj.possibleAnswers[0];
            elementTextAnswer1.textContent = questionObj.possibleAnswers[1];
            elementProgress.style.width = progressPercentage + "%";
            progressPercentage += 30;
        }
        
         //Determine correct answer
        function correctAnswer() {
            if (elementRadioAnswer0.checked == true) {
                return elementRadioAnswer0.value;
            }
            else if (elementRadioAnswer1.checked == true) {
                return elementRadioAnswer1.value;
            }
            else {
                return undefined;
            }
        }
    