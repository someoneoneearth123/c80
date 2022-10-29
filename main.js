var names = [];
var namesArraySorted = [];

const subBtn = document.getElementById("submit_button");
const sortBtn = document.getElementById("sort_button");
const updateBtn = document.getElementById("update_button");


function submit() {
    var display = [];
    var noCommas;
    for (var i = 1; i <= 4; i++) {
        console.log(i);
        const val = document.getElementById('name_of_the_student_' + i).value;
        names.push(val);
        console.log(val, names);
    }

    for (var j = 0; j < names.length; j++) {
        display.push(`<h4> Name - ${names[j]}</h4>`);
        console.log(display);
    }

    document.getElementById("display_name_with_commas").innerHTML = display;

    noCommas = display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = noCommas;

    subBtn.style.display = "none";
    sortBtn.style.display = "block";
}

function sorting() {
    namesArraySorted = names.sort();
    var displaySort = [];

    for (let i = 0; i < namesArraySorted.length; i++) {
        displaySort.push(`<h4>Name - ${namesArraySorted[i]}</h4>`);
    }

    var withoutCommas = displaySort.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = withoutCommas;

    sortBtn.style.display = "none";
    updateBtn.style.display = "block";
}

function newUpdate() {
    document.getElementById("display_name_without_commas").innerHTML = `<h4>${namesArraySorted}</h4>`;
    updateBtn.style.display = "none";
    subBtn.style.display = "block";
}