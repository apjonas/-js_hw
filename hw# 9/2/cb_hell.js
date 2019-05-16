//************************************************************************//
 // ад обратных функций //
 // сложный для интуицивного понимания код //
 // конструкция с большим кол-вом вложенных callback функций и есть АД) //
 // в своем задании я реализовал на примере трех функций //
//************************************************************************//

function getUserInfo(name, handler) {
    let userData = {
        name: "petr",
        age: 20
    };
    handler(userData);
}

function getUserSkill(userData, handler) {
    let skill = {
        firstSkill: "sell",
        secondSkill: "codding"
    };
    handler(skill, userData);
}

function postUserData(userData, skill) {
    if (skill.write === "sell"){
        console.log('petr is manager')
    } else {
        console.log('petr is programmer')
    }

}

getUserInfo(name,(userData) => {
    getUserSkill(userData,(skill, userData)=> {
        postUserData(skill, userData);
    });
});

