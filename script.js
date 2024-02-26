const questions = [
    {
        question:"मार्गन ने परिवार के उ‌द्विकास के कितने चरण बताये हैं ?",
        answers: [
            { text: "10", correct: false},
            { text: "7", correct: false},
            { text: "5", correct: true},
            { text: "1", correct: false},
        ] 
    },

    {
        question:"बताइए कि सामाजिक संरचना निम्नलिखित में बहुत अधिक क्या होती है ?",
        answers: [
            { text: "बड़ी", correct: false},
            { text: "सामान्य", correct: false},
            { text: "सबसे छोटी", correct: false},
            { text: "छोटी", correct: true},
        ] 
    },

    {
        question:"यह किसने कहा 'इतिहास अभिजन वर्ग की कब्र -",
        answers: [
            { text: "काम्ट", correct: false},
            { text: "शिले", correct: false},
            { text: "स्पेन्सर", correct: false},
            { text: "कारलाइल", correct: true},
        ] 
    },

    {
        question:"'थ्योरी ऑफ दी लेजर क्लास' पुस्तक किसने लिखी?",
        answers: [
            { text: "फिचर", correct: false},
            { text: "दक्षता", correct: false},
            { text: "रॉस", correct: false},
            { text: "वेब्लिन", correct: true},
        ] 
    },

    {
        question:"सामाजिक संबंधों के लिए निम्नलिखित में से क्या होना आवश्यक है ?",
        answers: [
            { text: "किसान", correct: false},
            { text: "मंत्री", correct: false},
            { text: "परिवार", correct: false},
            { text: "चेतना", correct: true},
        ] 
    },

    {
        question:"प्रतिमान प्रायः होते हैं -",
        answers: [
            { text: "व्यक्ति के द्वारा", correct: false},
            { text: "पारसंस", correct: false},
            { text: "सामान्यीकृत", correct: true},
            { text: "उपर्युक्त नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सामाजिक सांस्कृतिक मूल्यों की श्रेणी के अंतर्गत आते हैं ?",
        answers: [
            { text: "अच्छाई", correct: false},
            { text: "सत्य", correct: false},
            { text: "सुन्दरता", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में से बन्द स्तरीकरण का उदाहरण बताइए।",
        answers: [
            { text: "धर्म", correct: false},
            { text: "अहिंसा", correct: false},
            { text: "जाति", correct: true},
            { text: "सभी", correct: false},
        ] 
    },

    {
        question:"पियाजे से सीखने की अवस्था को कितने भागों में बाँटा है ?",
        answers: [
            { text: "दस", correct: false},
            { text: "दो", correct: false},
            { text: "सात", correct: false},
            { text: "6", correct: true},
        ] 
    },

    {
        question:"दिव्यांगता को किस अधिनियम के अंतर्गत प्रमाणित किया गया है ?",
        answers: [
            { text: "अधिनियम 1868", correct: false},
            { text: "अधिनियम 1970", correct: false},
            { text: "अधिनियम 1995", correct: true},
            { text: "अधिनियम 2013", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से प्रद्रत्त प्ररिस्थिति का गलत उदाहरण बताइए",
        answers: [
            { text: "राज कुमार", correct: false},
            { text: "प्रौढ़", correct: false},
            { text: "वृद्ध", correct: false},
            { text: "पति", correct: true},
        ] 
    },

    {
        question:"किसे प्राप्त करने योग्य साध्य माना जाता है",
        answers: [
            { text: "मूल्य", correct: true},
            { text: "समनर", correct: false},
            { text: "मीड", correct: false},
            { text: "कूले", correct: false},
        ] 
    },

    {
        question:" सामाजिक मूल्य दशति हैं -",
        answers: [
            { text: "सही", correct: false},
            { text: "महत्वपूर्ण", correct: false},
            { text: "वांछित", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"सांस्कृतिक विलंबना का सिद्धांत किसने प्रतिपादन किया ?",
        answers: [
            { text: "लम्ले", correct: false},
            { text: "मैकाइबर", correct: false},
            { text: "पैरेटो", correct: false},
            { text: "ऑगबर्न", correct: true},
        ] 
    },

    {
        question:". भारतीय पुनर्वास परिषद एक सांविधिक निकाय है। इसकी स्थापना कब की गई थी ?",
        answers: [
            { text: "वर्ष 1818 में", correct: false},
            { text: "वर्ष 1971 में", correct: false},
            { text: "वर्ष 1992 में", correct: true},
            { text: "वर्ष 2000 में", correct: false},
        ] 
    },

    {
        question:"समाहित पदानुक्रम की 'विरोधियों' की एकता कहा है-",
        answers: [
            { text: "वेबर", correct: false},
            { text: "मैलबिन", correct: false},
            { text: "सेनार्ट ने", correct: false},
            { text: "कार्ल मार्क्स ने", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा सामाजिक संरचना के निर्माण के विभिन्न अंगों में से नहीं है ?",
        answers: [
            { text: "धर्म", correct: false},
            { text: "नगर और गांव", correct: false},
            { text: "जाति", correct: false},
            { text: "समस्या", correct: true},
        ] 
    },

    {
        question:"जाति व्यवस्था व्यक्ति को एक विशेष सामाजिक स्थिति प्रदान करती है ?",
        answers: [
            { text: "विवाह के पहले", correct: false},
            { text: "समितियों से", correct: false},
            { text: "धर्म से", correct: false},
            { text: "जन्म से", correct: true},
        ] 
    },

    {
        question:"मैक्स वेवर के अनुसार सत्ता कितने प्रकार की होती है ?",
        answers: [
            { text: "दस", correct: false},
            { text: "तेरह", correct: false},
            { text: "चार", correct: false},
            { text: "तीन", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से संस्थाएं कौन-सी है ?",
        answers: [
            { text: "विवाह", correct: false},
            { text: "जाति", correct: false},
            { text: "परिवार", correct: false},
            { text: "सभी", correct: true},
        ] 
    },

    {
        question:"दुर्खीम ने आत्महत्याओं को निम्न में से क्या माना?",
        answers: [
            { text: "धर्म", correct: false},
            { text: "असामान्य", correct: false},
            { text: "अधर्म", correct: false},
            { text: "सामान्य", correct: true},
        ] 
    },

    {
        question:"अस्पृश्यता अपराध अधिनियम कब पारित हुआ था?",
        answers: [
            { text: "1966", correct: false},
            { text: "1875", correct: false},
            { text: "1997", correct: false},
            { text: "1951", correct: true},
        ] 
    },

    {
        question:"सोशियोलॉजी पुस्तक के लेखक टी०बी० बाटोमोर है",
        answers: [
            { text: "असत्य", correct: false},
            { text: "सत्य", correct: true},
            { text: "कोई नहीं", correct: false},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित किस जनजाति में सबसे छोटी पुत्री को उत्तराधिकार प्राप्त होता है ?",
        answers: [
            { text: "खासी", correct: true},
            { text: "कुकी", correct: false},
            { text: "साखी", correct: false},
            { text: "या सभी को", correct: false},
        ] 
    },

    {
        question:"कौन सा द्वितीयक समूह नहीं है ?",
        answers: [
            { text: "शहर", correct: false},
            { text: "सिनेमाघर", correct: false},
            { text: "राज्य", correct: false},
            { text: "श्रम संगठन", correct: true},
        ] 
    },

    {
        question:"झारखण्ड में महिलाओं की साक्षरता का अनुपात 2011 में क्या है ?",
        answers: [
            { text: "66.4%", correct: false},
            { text: "72.98%            ", correct: false},
            { text: "76.84%", correct: false},
            { text: "55.42%", correct: true},
        ] 
    },

    {
        question:"1867 ई० में कार्ल मार्क्स की कृति दास कैपिटल का प्रथम खण्ड किस भाषा में प्रकाशित हुआ ?",
        answers: [
            { text: "सरल", correct: false},
            { text: "हिन्दी", correct: false},
            { text: "मराठी", correct: false},
            { text: "जर्मन", correct: true},
        ] 
    },

    {
        question:"इमाइल दुर्खीम का पर आधारित है ? सामाजिक तथ्य किस विषय",
        answers: [
            { text: "आत्महत्या", correct: false},
            { text: "विभाजन", correct: false},
            { text: "श्रम", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"निम्न में से कौन प्रकार्यवादी सिद्धान्त में विश्वास करने वाले विद्वान हैं ?",
        answers: [
            { text: "मर्टन", correct: false},
            { text: "स्पेन्सर", correct: false},
            { text: "कार्ल मार्क्स", correct: false},
            { text: "हीगेल", correct: true},
        ] 
    },

    {
        question:"समाजशास्त्र को 'सामाजिक तथ्यों' का अध्ययन किसने बतलाया है ?",
        answers: [
            { text: "लेवी", correct: false},
            { text: "मॉर्गन", correct: false},
            { text: "वेबर", correct: false},
            { text: "दुर्खीम", correct: true},
        ] 
    },

    {
        question:"जब किसी समाज के सदस्य संस्थागत साधनों को त्यागकर लक्ष्यों की पूर्ति करते हैं तो इस प्रकार के प्रचलित व्यवहार को कहा जाता है",
        answers: [
            { text: "अरस्तू", correct: false},
            { text: "अनुचलन", correct: true},
            { text: "हीगल", correct: false},
            { text: "पलयान", correct: false},
        ] 
    },

    {
        question:"मार्क्स के अनुसार समाज के दो प्रमुख तत्व कौन-से हैं ?",
        answers: [
            { text: "आधार", correct: false},
            { text: "कानून", correct: false},
            { text: "अधिरचना", correct: false},
            { text: "(a) और (b) दोनों", correct: true},
        ] 
    },

    {
        question:"वेबर ने सामाजिक किया को किस रूप में देखा है?",
        answers: [
            { text: "आधुनिक प्रारूप में", correct: false},
            { text: "सैद्धान्तिक प्रारूप म", correct: false},
            { text: "आदर्श प्रारूप में", correct: true},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },

    {
        question:"सांस्कृतिक विडंबना की अवधारणा का प्रणेता कौन हैं ?",
        answers: [
            { text: "आगबर्न", correct: true},
            { text: "पलयान", correct: false},
            { text: "होमान्स", correct: false},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"लुसी मेयर के अनुसार, परिवार का कानूनी आधार है -",
        answers: [
            { text: "अनिवार्य सदस्यता", correct: false},
            { text: "मानसिक संतोष", correct: false},
            { text: "वंश उत्तराधिकार            ", correct: false},
            { text: "कोई नहीं", correct: true},
        ] 
    },

    {
        question:"भारत में शिकार करने एवं भोजन एकत्रित करने वाली जनजातियाँ हैं-",
        answers: [
            { text: "कादर", correct: false},
            { text: "राजी", correct: false},
            { text: "मानसिक संतोष", correct: false},
            { text: "कोई नहीं", correct: true},
        ] 
    },

    {
        question:"वर्ष 1951 के सदस्यों की संख्या के आधार पर बड़े परिवार में सदस्यों की संख्या होती है -",
        answers: [
            { text: "1-9 सदस्य", correct: false},
            { text: "12-25 सदस्य", correct: false},
            { text: "20 से अधिक", correct: false},
            { text: "7-9 सदस्य", correct: true},
        ] 
    },

    {
        question:"मनुस्मृति में धर्म के कितने लक्षणों का उल्लेख किया गया है ?",
        answers: [
            { text: "------", correct: false},
            { text: "दो", correct: false},
            { text: "तेरह", correct: false},
            { text: "दस", correct: true},
        ] 
    },

    {
        question:"हिन्दू विवाह किस अधिनियम से संचालित होता है?",
        answers: [
            { text: "अधिनियम 1997", correct: false},
            { text: "अधिनियम 1823", correct: false},
            { text: "अधिनियम 1888", correct: false},
            { text: "अधिनियम 1955", correct: true},
        ] 
    },

    {
        question:". हिन्दू विधवा पुर्नर्विवाह अधिनियम कब पारित हुआ?",
        answers: [
            { text: "1800 ई०", correct: false},
            { text: "1888 ई०", correct: false},
            { text: "-------", correct: false},
            { text: "1856 ई०", correct: true},
        ] 
    },

    {
        question:"मुसलमानों में विवाह की एक आवश्यकत शर्त है-",
        answers: [
            { text: "तलाक की", correct: false},
            { text: "जिरह", correct: false},
            { text: "पर्दा रखना", correct: false},
            { text: "मेहर", correct: true},
        ] 
    },

    {
        question:" मुताह विवाह का प्रचलन है",
        answers: [
            { text: "कन्या मूल में", correct: false},
            { text: "वर मूल्य में", correct: false},
            { text: "ईसाइयों में", correct: false},
            { text: "शियाओं में", correct: true},
        ] 
    },

    {
        question:"हिन्दू विवाह पारित हुआ सन् -",
        answers: [
            { text: "1956 में", correct: false},
            { text: "1855 में", correct: false},
            { text: "1876 में", correct: false},
            { text: "1955 में", correct: true},
        ] 
    },

    {
        question:"मुस्लिम समुदाय विवाह के दौरान वधू को दिए जाने वाली भेंट कहलाती है -",
        answers: [
            { text: "अदालत में", correct: false},
            { text: "नगद राशि", correct: false},
            { text: "बिना अदालत में", correct: false},
            { text: "मेहर", correct: true},
        ] 
    },

    {
        question:"मरडॉफ ने बहुविवाह पद्धति के अध्ययन में कितने समाजों का अध्ययन किया ?",
        answers: [
            { text: "550", correct: false},
            { text: "310", correct: false},
            { text: "200", correct: false},
            { text: "250", correct: true},
        ] 
    },

    {
        question:"आपसी सहमति से तलाक लेने की प्रतीक्षा अवधि कितनी है ?",
        answers: [
            { text: "दो माह", correct: false},
            { text: "एक वर्ष", correct: false},
            { text: "सात माह", correct: false},
            { text: "छः माह", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में से किस जनजाति में भ्रातृक बहुपति प्रथा पायी जाती है ?",
        answers: [
            { text: "संथालों में", correct: false},
            { text: "गोंड में", correct: false},
            { text: "नगा में", correct: false},
            { text: "टोडा में", correct: true},
        ] 
    },

    {
        question:"किस विद्वान ने जाति को 'ठोस सामाजिक वर्ग' माना है ?",
        answers: [
            { text: "सेण्डसन", correct: false},
            { text: "स्मिथ", correct: false},
            { text: "सिम्प", correct: false},
            { text: "लुण्डबर्ग", correct: true},
        ] 
    },

    {
        question:"मुसलमानों में अस्थायी विवाह को क्या कहते हैं ?",
        answers: [
            { text: "प्रतिलोम विवाह", correct: false},
            { text: "बिहर", correct: false},
            { text: "निकाह", correct: false},
            { text: "मुताह", correct: true},
        ] 
    },

    {
        question:"संपोषक का अर्थ होता है",
        answers: [
            { text: "बोलने वाला", correct: false},
            { text: "लिखने वाला", correct: false},
            { text: "सिखाने वाला", correct: false},
            { text: "पालने वाला", correct: true},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 