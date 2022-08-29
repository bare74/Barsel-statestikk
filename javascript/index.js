fetch("https://api.apispreadsheets.com/data/C5d0ksnzjBYTAIo2/", {
  method: "POST",
  body: JSON.stringify({
    data: {
      message: " ",
      birth_date: " ",
      maternity_date: " ",
      discharged_date: " ",
    },
  }),
}).then((res) => {
  if (res.status === 201) {
    // SUCCESS
  } else {
    // ERROR
  }
});
