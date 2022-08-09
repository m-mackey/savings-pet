const goalInput = document.getElementById('goal-input');
const goal = document.getElementById('goal');
const depositInput = document.getElementById('deposit-input');
const totalSaved = document.getElementById('total-saved');

// Submits amount to be saved and displays it
goalInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const money = this.goalAmount.value;
  console.log(money);
  console.log(goal);
  const display = `${money}`;
  goal.textContent = display;
});

function checkTotals() {
  const currentGoal = Number(goal.textContent);
  const currentSaved = Number(totalSaved.textContent);
  if (currentGoal === currentSaved) {
    console.log('match');
  } else {
    console.log('no match');
  }
}

// Submits amount user deposits, adds it to total saved, and runs checkTotals which compares Total Saved to Savings Goal
depositInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const depositAmount = Number(this.depositAmount.value);
  const newTotal = Number(totalSaved.textContent) + depositAmount;
  const showNewTotal = `${newTotal}`;
  console.log(showNewTotal);
  totalSaved.textContent = showNewTotal;
  checkTotals();
});
