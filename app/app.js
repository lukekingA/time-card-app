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
    template += `<div class="col-2 d-flex flex-column text-center">`
    template += `<button class="btn" onclick="dayIncrease(${index}, 0)"><h4><i class="far fa-plus-square"></i></h4></button>`
    template += `<h4 id="dailyTotal0${index}">0</h4>`
    template += `<button class="btn" onclick="dayDecrease(${index}, 0)"><h4><i class="far fa-minus-square"></i></h4></button>`
    template += `</div>`
  });
  template += `</div>`
  template += `<div class="col-2 d-flex flex-column justify-content-center"><h4 id="weektotal0">0</h4></div>`

  document.getElementById('week0').innerHTML = template;
  let template2 = '';
  appData.days[1].forEach((week, index) => {
    template2 += `<div class="col-2 d-flex flex-column text-center">`
    template2 += `<button class="btn" onclick="dayIncrease(${index}, 1)"><h4><i class="far fa-plus-square"></i></h4></button>`
    template2 += `<h4 id="dailyTotal1${index}">0</h4>`
    template2 += `<button class="btn" onclick="dayDecrease(${index}, 1)"><h4><i class="far fa-minus-square"></i></h4></button>`
    template2 += `</div>`
  });
  template2 += `</div>`
  template2 += `<div class="col-2 d-flex flex-column justify-content-center"><h4 id="weektotal1">0</h4></div>`

  document.getElementById('week1').innerHTML = template2;
};



function dayIncrease(day, week) {
  appData.days[week][day]++;
  draw(day, week)
}

function dayDecrease(day, week) {
  appData.days[week][day]--;
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

function draw(day, week) {
  document.getElementById(`dailyTotal${week}${day}`).innerText = appData.days[week][day];
  let weeklyHours = generateTotal(week)
  document.getElementById(`weektotal${week}`).innerText = weeklyHours;

  document.getElementById('payDay').innerText = document.getElementById('hourlyRate').value * (appData.week0Total + appData.week1Total)
}

makeButtons()