




console.log('This is ES6 version of Project 2');
document.getElementById("submit").addEventListener("submit", myFun);
function myFun() {
document.innerHTML={prediction_texts} 
}


class Book {
    constructor(Date, Confirmed_Cases, Deaths_Cases,Recovered_Cases,Travel_History,Province,City) {
        this.Date = Date;
        this.Confirmed_Cases = Confirmed_Cases;
        this.Deaths_Cases = Deaths_Cases;
        this.Recovered_Cases = Recovered_Cases;
        this.Province = Province;
        this.Travel_History = Travel_History;
        this.City = City;

    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.Date}</td>
                            <td>${book.Confirmed_Cases}</td>
                            <td>${book.Deaths_Cases}</td>
                            <td>${book.Recovered_Cases}</td>
                            <td>${book.Province}</td>
                            <td>${book.Travel_History}</td>
                            <td>${book.City}</td>

                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    
}
   
   let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
        

    
    let Date = document.getElementById('Date').value;
    let Confirmed_Cases = document.getElementById('Confirmed_Cases').value;
    let Deaths_Cases = document.getElementById('Deaths_Cases').value;
    let Recovered_Cases = document.getElementById('Recovered_Cases').value;
    let Province = document.getElementById('Province').value;
    let Travel_History = document.getElementById('Travel_History').value;
    let City = document.getElementById('City').value;


    let book = new Book(Date, Confirmed_Cases, Deaths_Cases,Recovered_Cases,Province,Travel_History,City);
    console.log(book);

    let display = new Display();
    display.add(book);
    e.preventDefault();

}
