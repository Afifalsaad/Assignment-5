// Heart Feature
const hearts = document.querySelectorAll(".heart-icons");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);

    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// Call Feature
const services = document.querySelectorAll(".service");
const service = [];

for (const s of services) {
  const name = s.querySelector(".name").innerText;
  const number = s.querySelector(".number").innerText;

  service.push({ name, number });
}

const buttons = document.querySelectorAll(".call-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const s = service[i];

    // Reduce coin feature
    let coin = parseInt(document.getElementById("coin").innerText);
    const sum = coin - 20;
    if (0 > sum) {
      alert("Not enough balance");
      return;
    }
    document.getElementById("coin").innerText = sum;

    alert(`📞 Calling ${s.name} ${s.number}...`);

    // Append Div
    const div = document.createElement("div");
    const time = new Date().toLocaleTimeString()
    const divElement = document.getElementById("div-container");
    div.innerHTML = `
                      <div class="w-full p-3 bg-[#fafafa] rounded-2xl flex justify-between items-center">
                <div>
                  <h1 class="hind-madurai-semibold">${service[i].name}</h1>
                  <p class="text-[12px] text-[#5c5c5c]">${service[i].number}</p>
                </div>
                <div class="text-[12px] text-[#5c5c5c]">
                  <p>${time}</p>
                </div>
              </div>
          `;
    divElement.appendChild(div);
  });
}

document.getElementById('clear-btn').addEventListener('click' , function(){
    document.getElementById('div-container').innerHTML = ''
})