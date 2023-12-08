let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `<div class="card" style="width: 20rem;">
        <img src="https://img.freepik.com/free-vector/colored-hacker-code-realistic-composition-with-person-creates-codes-hacking-stealing-information-vector-illustration_1284-18005.jpg?w=2000" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status is : ${contests[item].status}</p>
          <p class="card-text">Starts at : ${contests[item].start_time}</p>
          <p class="card-text">Ends at : ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary">Visit Here</a>
        </div>
      </div>`
    cardContainer.innerHTML = ihtml
  }
})
