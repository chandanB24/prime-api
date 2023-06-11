import express from "express";



const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json())


// function to check prime or not
const checkPrime = (n) =>{
    if(n<=1)
    {
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++)
    {
        if(n % i === 0)
        {
            return false;
        }
    }
    return true;
}

// http get request to fetch the prime numbers

app.get('/primes/:number',(req,res)=>{
    const num = parseInt(req.params.number);
    const primeNumbers = [];
    for(let i=2; i<=num; i++)
    {
        if(checkPrime(i)){
            primeNumbers.push(i);
        }
    }
    res.json(primeNumbers);
});



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})