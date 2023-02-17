//const title1 = document.getElementById("title1");
// const par1 = document.getElementById("par1");

const url = "https://jsonplaceholder.typicode.com/posts";

const dataArr = []; 
const getText = () => {
    
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => data.map((item)=>dataArr.push(item)),
    document.getElementById("par").innerHTML = dataArr.map((item)=>item),
    )
}
getText();

// const displayResults = (data) => {
//     let ((data) => data.map((item) => item.body)) = par1;
// }
// displayResults();


