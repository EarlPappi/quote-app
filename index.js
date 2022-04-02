var quote = document.querySelector('#quote');
var btn = document.querySelector('#btn');

const getQuote = async () => {
    const response = await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e0ee6d3dfamsh0f8cfc3b6dcdd17p1ca9a8jsnb22a9271953b",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    });
    
    const data = await response.json();

    if(response.status === 200){
        quote.innerHTML = data['content'];
        console.log("Response resolved successfully yunno!")
    }else{
        quote.innerHTML = "Urhmm, something went wrong kindly try again!";
    }

    console.log(response)

    console.log(data);

    // console.log(err)

    return data;

};

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    getQuote()
        .catch(err =>{
            quote.innerHTML = "Couldn't fetch Quote at the moment beacuse " + err.message;
        });
});


// getQuote()
//     .then(data => console.log('resolved', data))
//     .catch(err => console.log('Rejected', err));