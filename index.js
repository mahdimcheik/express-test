const app = require('./app.js');

const port = 5000;

// app
//   .listen(port, () => {
//     console.info(`Server is listening on port ${port}`);
//   })
//   .on("error", (err) => {
//     console.error("Error:", err.message);
//   });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("app is working");
  }
});
