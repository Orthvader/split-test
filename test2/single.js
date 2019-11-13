
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "punctuality",
                title: "Punctuality",
                choices: [
                    "Always on Time & Never Calls In", "Usually on Time & Does Not Call In", "Usually on Time & Sometimes Calls In", "Sometimes on Time & Usually Calls In"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "typerofperson",
                title: "What Type of Person Are You?",
                choicesOrder: "random",
                choices: [
                    "Outgoing", "Introverted"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "salary",
                title: "Salary expectations?",
                choicesOrder: "random",
                choices: [
                    "100,000+", "60,000+", "30,000+", "20,000+"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "reference",
                title: "How Did You Hear About Us?",
                choicesOrder: "random",
                choices: [
                    "Other Person", "Online", "Advertisement", "Recommendations"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "improve",
                title: "How can we, in your opinion, improve our hiring process?",
                choicesOrder: "random",
                choices: [
                    "Different Questions", "Different Focus", "More Hands-On", "Less Hands-On"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "recommendation",
                title: "Would you recommend [company name] to other friends to apply?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No", "Depends on the Persons Personality"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "Interviewers",
                title: "How Friendly Were Your Interviewers, From 1-4",
                choicesOrder: "random",
                choices: [
                    "1", "2","3","4"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "get along",
                title: "Did s/he get along well with management and co-workers?",
                choicesOrder: "random",
                choices: [
                    "Yes", "Mostly", "A Few bothered them", "We did not really see eye to eye"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "feel equipped",
                title: "Do you feel that you were equipped to do your job well?",
                choicesOrder: "random",
                choices: [
                    "Yes, I am Ready", "Yes, with more training", "No, I definetly need more time", "No, this is not for me"
                ]
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "interest",
                title: "Why Are You Interested In This Job?",
                choicesOrder: "random",
                choices: [
                    "Salary", "Area of Expertise", "Stepping Stone", "Co-Worker Recommendation"
                ]
            }
        ]
    }
    
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });