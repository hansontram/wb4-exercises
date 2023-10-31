let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    function getTotal(lunch){
        let price = 0;
        for(let i=0; i<lunch.length; i++){
            price += lunch[i].price
        }
        let tax = Number(price * .08.toFixed(2))
        let tip = Number(price * .18.toFixed(2))
        let totalDue = price + tax + tip
        
        console.log("Subtotal: ",price)   
        console.log("Tax: ", tax)
        console.log("Total Due: ", totalDue)  

    }

    getTotal(lunch)