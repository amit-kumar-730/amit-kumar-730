const form = document.querySelector("FORM");

const mcqs=[
{question:"What comes next in the series: 2, 4, 8, 16, ?",options:["18","24","32","20"],answer:"32"},
{question:"John is older than Mike. Mike is older than Steve. Who is the oldest?",options:["Steve","John","Mike","Can't say"],answer:"John"},
{question:"If all roses are flowers and some flowers fade quickly, which is true?",options:["Some roses fade quickly","All flowers are roses","Some flowers are not roses","None of the above"],answer:"Some flowers are not roses"},
{question:"Which word cannot be formed from the letters of 'INFORMATION'?",options:["Train","Nation","Motion","Frontier"],answer:"Frontier"},
{question:"If MONKEY is coded as 654321, how is MONEY coded?",options:["65321","64321","65421","65312"],answer:"65321"},
{question:"Which is the odd one out: Apple, Banana, Carrot, Mango?",options:["Apple","Banana","Carrot","Mango"],answer:"Carrot"},
{question:"Find the missing term: ACE, BDF, CEG, ?",options:["DFH","DEH","DGH","DFF"],answer:"DFH"},
{question:"Which one is different: Circle, Triangle, Rectangle, Sphere?",options:["Circle","Triangle","Rectangle","Sphere"],answer:"Sphere"},
{question:"Which number replaces the question mark: 3, 6, 11, 18, 27, ?",options:["38","36","34","37"],answer:"38"},
{question:"Complete the series: 1, 4, 9, 16, ?, 36",options:["20","25","30","29"],answer:"25"},
{question:"If A=1, B=2,...Z=26, what is the value of 'CAT'?",options:["24","27","30","None of these"],answer:"24"},
{question:"Which pair is odd: Pen–Write, Knife–Cut, Brush–Paint, Spoon–Stir?",options:["Pen–Write","Knife–Cut","Brush–Paint","Spoon–Stir"],answer:"Spoon–Stir"},
{question:"Choose the word not like the others: Inch, Foot, Yard, Kilogram",options:["Inch","Foot","Yard","Kilogram"],answer:"Kilogram"},
{question:"If 3 cats catch 3 mice in 3 minutes, how many cats for 100 mice in 100 minutes?",options:["3","100","9","1"],answer:"3"},
{question:"Which day comes two days after Monday?",options:["Wednesday","Thursday","Tuesday","Friday"],answer:"Wednesday"},
{question:"Which number is missing: 5, 11, 17, ?, 29",options:["20","21","23","25"],answer:"23"},
{question:"A is brother of B. B is sister of C. C is son of D. How is D related to A?",options:["Father","Mother","Uncle","Aunt"],answer:"Father"},
{question:"What is the mirror image of '1234'?",options:["4321","1243","None","Backward flipped"],answer:"Backward flipped"},
{question:"What comes next: 1, 3, 6, 10, 15, ?",options:["20","21","22","19"],answer:"21"},
{question:"If DOG=4157 and CAT=3120, then GOD=?",options:["7415","7514","7451","7145"],answer:"7415"},
{question:"Which direction will you face if you start facing North and turn 270° clockwise?",options:["West","East","South","North"],answer:"West"},
{question:"Which number is the odd one out: 121, 144, 169, 196, 225, 256, 300?",options:["144","196","256","300"],answer:"300"},
{question:"In a certain code, TEA is written as VGC. How is PEN written?",options:["RGP","RGO","RFP","QGP"],answer:"RGP"},
{question:"If TABLE is written as GZYOV, how is CHAIR written?",options:["XSRZQ","XSZQM","XZGQV","XZQVO"],answer:"XZQVO"},
{question:"Find the missing letter: A, C, F, J, O, ?",options:["U","V","W","T"],answer:"U"},
{question:"A is the mother of B. C is the sister of A. D is the daughter of C. How is D related to B?",options:["Aunt","Sister","Cousin","Niece"],answer:"Cousin"},
{question:"If 2 pencils cost ₹10, how much for 10 pencils?",options:["₹50","₹60","₹40","₹45"],answer:"₹50"},
{question:"Choose the odd one: School, College, University, Hospital",options:["School","College","University","Hospital"],answer:"Hospital"},
{question:"Find the odd one: 2, 3, 5, 7, 11, 14, 17",options:["5","11","14","17"],answer:"14"},
{question:"Which comes next: Z, X, V, T, ?",options:["S","Q","R","P"],answer:"R"},
{question:"A clock shows 3:15. What is the angle between the hour and minute hands?",options:["7.5°","15°","0°","30°"],answer:"7.5°"},
{question:"How many triangles in a triangle divided by 3 lines?",options:["6","9","7","4"],answer:"6"},
{question:"Which word is opposite of 'Artificial'?",options:["Genuine","Natural","Real","Man-made"],answer:"Natural"},
{question:"If B=2, E=5, H=8, then L=?",options:["11","12","10","13"],answer:"12"},
{question:"Which word follows: Red, Green, Blue, ?",options:["Black","White","Yellow","Orange"],answer:"Yellow"},
{question:"What is the next odd number after 95?",options:["96","98","97","99"],answer:"97"},
{question:"Find the next number: 100, 81, 64, 49, ?",options:["30","36","25","40"],answer:"36"},
{question:"Which is different: Gold, Iron, Silver, Oxygen?",options:["Gold","Iron","Silver","Oxygen"],answer:"Oxygen"},
{question:"What is the capital of the cube of 3?",options:["6","27","9","12"],answer:"27"},
{question:"Which shape has 6 faces?",options:["Cube","Sphere","Cone","Cylinder"],answer:"Cube"},
{question:"In a row of 40 students, what is the middle position?",options:["19","20","21","None"],answer:"20"},
{question:"Which term fits: Book is to Reading as Fork is to?",options:["Drawing","Stirring","Eating","Writing"],answer:"Eating"},
{question:"Which is heavier: 1 kg of iron or 1 kg of cotton?",options:["Iron","Cotton","Equal","None"],answer:"Equal"},
{question:"What is common in the words: Racecar, Level, Radar?",options:["Same letters","Reverse same","Palindromes","Anagrams"],answer:"Palindromes"},
{question:"If today is Friday, what day will it be 10 days later?",options:["Sunday","Monday","Tuesday","Thursday"],answer:"Monday"},
{question:"What is the next number: 1, 4, 9, 16, 25, ?",options:["36","30","49","42"],answer:"36"},
{question:"Which does not belong: Hammer, Screwdriver, Spanner, Paper?",options:["Hammer","Spanner","Paper","Screwdriver"],answer:"Paper"},
{question:"Which of the following is not a prime number: 29, 31, 33, 37?",options:["29","31","33","37"],answer:"33"},
{question:"Which number completes the series: 2, 5, 10, 17, ?",options:["24","26","28","30"],answer:"26"},
{question:"Which number is missing: 2, 6, 12, 20, ?",options:["30","28","24","32"],answer:"30"}
];



let set = new Set();
const original_answer = {};

function random_question() {

  while (set.size < 10) {
    let num = Math.floor(Math.random() * 50);
    set.add(mcqs[num]);
  }

  const quest = [...set];

   quest.forEach((data, index) => {

    const problem = document.createElement("div");
    problem.className = "question";

    original_answer[`q${index+1}`] = data.answer ;
    // console.log(original_answer);

    form.appendChild(problem);

    //p
    const quize = document.createElement("p");
    problem.appendChild(quize);
    quize.textContent = `Q${index+1}. ${data.question}`

    //creating label
    for (const element of data.options) {
        
    const label = document.createElement("label");
    problem.appendChild(label);
    const input = document.createElement("input");
    input.name = `q${index+1}`;
    input.type = "radio";
    input.value =`${element}`;
    label.appendChild(input);
    const textnode = document.createElement("TextNode");
    textnode.innerHTML =`${element}`;
    label.appendChild(textnode);
    const br = document.createElement("br");
    problem.appendChild(br);
    }

    
  });
};

random_question();

const buttonCont = document.createElement('div');
buttonCont.className = 'buttons';
form.appendChild(buttonCont);
const subButton = document.createElement('button');
    buttonCont.appendChild(subButton);
    subButton.type = 'submit';
    subButton.id = 'submit';
    subButton.textContent = 'Submit';

const resButton = document.createElement('button');
buttonCont.appendChild(resButton);
resButton.type = 'reset';
resButton.id = 'reset';
resButton.textContent = 'Reset';
resButton.style.backgroundColor = 'red' ;

const result = document.createElement('div');
form.appendChild(result);
result.className = 'result';
const res = document.createElement('p');
result.appendChild(res);

form.addEventListener("submit", (event) => {
    event.preventDefault();
  // console.log(event.target);

  const data = new FormData(form);
let ans = 0;
  for (const [key , value] of data) {
    
    if(value === original_answer[key]){
      ans++;
    }

  }

res.textContent =`${ans} out of 10 is correct`;

  form.reset();
});