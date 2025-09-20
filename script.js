const firebaseConfig = {
    apiKey: "AIzaSyCkOGhawIMr9D9uBy3JrFMv9UoCWtxH4LQ",
    authDomain: "fir-e8290.firebaseapp.com",
    projectId: "fir-e8290",
    storageBucket: "fir-e8290.firebasestorage.app",
    messagingSenderId: "978002675122",
    appId: "1:978002675122:web:dd4cb0f5029df9a1e090ab",
    measurementId: "G-QCRJNS19CW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

document.getElementById("save").addEventListener("click", function () {
    const input = {
        "Title": document.getElementById("input1").value,
        "Author": document.getElementById("input2").value,
        "Location": document.getElementById("input3").value
    }
    database.ref("Books").push(input);
    window.location.reload()
})

window.onload = function () {
    database.ref("Books").once("value")
        .then(function (data) {
            data.forEach(function (child) {
                const resultData = child.val()
                console.log(resultData);
                let tr = document.createElement("tr");

                let titleBox = document.createElement("td");
                titleBox.innerText = resultData.Title;

                let authorBox = document.createElement("td");
                authorBox.innerText = resultData.Author;

                let locationBox = document.createElement("td");
                locationBox.innerText = resultData.Location;

                tr.appendChild(titleBox);
                tr.appendChild(authorBox);
                tr.appendChild(locationBox);

                document.getElementById("display").appendChild(tr)


            });

        })

}
