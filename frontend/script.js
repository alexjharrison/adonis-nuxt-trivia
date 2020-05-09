console.log("hi");

const data = {
  name: "Alex",
  rounds: [
    {
      type: "standard",
      imageIds: [1],
      questionSet: [
        {
          category: "Balls",
          questions: [
            {
              questionText: "What are balls",
              answers: [
                {
                  answerText: "balls",
                  willDeduct: false,
                  maxPoints: 27,
                  minPoints: 27,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

document.querySelector("#button").addEventListener("click", (e) => {
  postData({
    url: "http://localhost:3333/game-templates",
    data,
  }).then((data) => {
    console.log(data);
    document.getElementById("div").innerText = JSON.stringify(data);
  });
});

// Example POST method implementation:
async function postData({ url = "", data = {} }) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4OTA0NjU2M30.-Y0-u5tvKKgGYpICcVxvdxTtcdRqSDGJlg_awyiE40s",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
