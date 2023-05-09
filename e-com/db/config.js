const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/e-commerce')
// .then(() => console.log('YOu are connected Connected now !!!'));

  mongoose.connect('mongodb://127.0.0.1:27017/e-commerce-react')
  // mongoose.connect('mongodb+srv://abhinavlaxmi:<password>@cluster0.ij7qm8e.mongodb.net/?retryWrites=true&w=majority', {
  //   useNewUrlParser: true,
  //   useCreateIndex : true,
  //   useUnifiedTopology : true,
  //   useFindAndModify : false
  // })
  .then(() => console.log('Yes Abhinav you are Connected!'))
  .catch ((error) =>
    console.log(error)
  );