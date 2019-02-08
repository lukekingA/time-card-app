let appData = {
  days: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  week0Total: 0,
  week1Total: 0,
  payRate: 0
};

function makeButtons() {
  let template = '';
  appData.days[0].forEach((week, index) => {
    template += `<div class="col-2 d-flex flex-column border text-center border-light rounded bg-toggle py-3">`
    template += `<h4 class="pt-2 text-light" onclick="dayIncrease(${index}, 0)"><i class="far fa-plus-square"></i></h4>`
    template += `<h4 id="dailyTotal0${index}">0</h4>`
    template += `<h4 class="pt-2 text-light" onclick="dayDecrease(${index}, 0)"><i class="far fa-minus-square"></i></h4>`
    template += `</div>`
  });
  template += `</div>`
  template += `<div class="col-2 d-flex flex-column justify-content-center"><h4 id="weektotal0">0</h4></div>`

  document.getElementById('week0').innerHTML = template;
  let template2 = '';
  appData.days[1].forEach((week, index) => {
    template2 += `<div class="col-2 d-flex flex-column text-center border border-light rounded bg-toggle py-3">`
    template2 += `<h4 class=" pt-2 text-light" onclick="dayIncrease(${index}, 1)"><i class="far fa-plus-square"></i></h4>`
    template2 += `<h4 id="dailyTotal1${index}">0</h4>`
    template2 += `<h4 class=" pt-2 text-light" onclick="dayDecrease(${index}, 1)"><i class="far fa-minus-square"></i></h4>`
    template2 += `</div>`
  });
  template2 += `</div>`
  template2 += `<div class="col-2 d-flex flex-column justify-content-center"><h4 id="weektotal1">0</h4></div>`

  document.getElementById('week1').innerHTML = template2;
};



function dayIncrease(day, week) {

  if (appData.days[week][day] <= 23) {
    appData.days[week][day]++;
  }
  draw(day, week)
}

function dayDecrease(day, week) {

  if (appData.days[week][day] >= 1) {
    appData.days[week][day]--;
  }
  draw(day, week)
}

function generateTotal(week) {
  let total = 0;
  appData.days[week].forEach(day => {
    total += day
  });
  appData[`week${week}Total`] = total
  return total
}

function updatePay() {
  document.getElementById('payDay').innerText = document.getElementById('hourlyRate').value * (appData.week0Total + appData.week1Total)
}

function draw(day, week) {
  document.getElementById(`dailyTotal${week}${day}`).innerText = appData.days[week][day];
  document.getElementById(`weektotal${week}`).innerText = generateTotal(week);
  updatePay()
}

document.getElementById('hourlyRate').addEventListener('keyup', updatePay)

makeButtons()