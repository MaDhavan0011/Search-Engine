function Search_Games() {
    let input = document.getElementById('searchbar').value
    
    let x = document.getElementsByClassName('Games');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
        }
        else {
        x[i].style.display = "list-item";
        }
    }
    }