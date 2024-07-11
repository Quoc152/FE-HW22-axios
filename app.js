
axios.get('https://dummyjson.com/products')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log('Error: ', error);
    });