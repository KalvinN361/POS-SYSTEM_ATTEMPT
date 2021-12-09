
const seedOrder = require('./orderSeeds.json');
const seedItem = require('./itemSeeds.json');
// const seedUser = require('./userSeeds.json');
const { User, Order, Item} = require("../models/index")
console.log(User);
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://KalvinN361:Trithong59@cluster0.klkii.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});





const kalvin = async ()=> {
  await User.collection.deleteMany({})
  await Item.collection.deleteMany({})
  await Order.collection.deleteMany({})

  const Users = await User.create({username: "Kalvin Nguyen", email: "Kalvin.win59@gmail.com", password: "Password1"})
  console.log("Users Seeded");
  const Items = await Item.create(seedItem)
  console.log("Items Seeded");
  const Orders = await Order.create(seedOrder)
  console.log("Orders Seeded");

  process.exit(0);
}
kalvin();

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedOrder();

//   await seedItem();

//   await seedUser();

//   process.exit(0);
// };

// seedAll();
