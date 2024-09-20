document.getElementById('add-money-btn').addEventListener('click',function(event){
event.preventDefault();
const inputAmount = document.getElementById('input-amount').value;
const inputAmountNumber = parseFloat(inputAmount)
const inputPin = document.getElementById('input-pin').value;
console.log(inputAmount,inputPin)
if(inputPin === '1234'){
    console.log('Add Money Successfully')
}else{
    alert('failed try again later')
}
const mainBalance = document.getElementById('main-balance').innerText
const balance = parseFloat(mainBalance)
const newBalance = inputAmountNumber + balance
const totalBalance = document.getElementById('main-balance').innerText=newBalance

})

document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault()
    const inputCashOutAmount = document.getElementById('input-cash-out-amount').value;
    const CashOutNumber = parseFloat(inputCashOutAmount);
    const inputCashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(inputCashOutAmount,inputCashOutPin)
    if(inputCashOutPin === '1234'){
        console.log('Cash Out Successfully')
    }else{
        alert('Failed Try Again Later')
    }
    const mainBalance = document.getElementById('main-balance').innerText
    const balance = parseFloat(mainBalance);
    const newBalance = balance - CashOutNumber;
    const total = document.getElementById('main-balance').innerText=newBalance
})

document.getElementById('add-money-btn-option').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove("hidden")
    document.getElementById('cash-out-form').classList.add("hidden")
})
document.getElementById('cash-out-btn-option').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.add("hidden")
    document.getElementById('cash-out-form').classList.remove("hidden")
})