<<<<<<< HEAD
// const sequelize = require('../config/connection');
// const seedOrder = require('./orderSeeds.json');
// const seedItem = require('./itemSeeds.json');
// const seedUser = require('./userSeeds.json');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedOrder();

//   await seedItem();

//   await seedUser();

//   process.exit(0);
// };

// seedAll();

// const sequelize = require('../config/connection');
// const seedUser = require('./userSeeds.json');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
=======
const sequelize = require('../config/connection');
const seedOrder = require('./orderSeeds.json');
const seedItem = require('./itemSeeds.json');
const seedUser = require('./userSeeds.json');
const { User, Order, Item} = require("../models/index")
console.log(User);
sequelize.once("open", async ()=>{
  await User.collection.deleteMany({})
  await Item.collection.deleteMany({})
  await Order.collection.deleteMany({})

  const Users = await User.collection.insertMany(seedUser)
  console.log("Users Seeded");
  const Items = await Item.collection.insertMany(seedItem)
  console.log("Items Seeded");
  const Orders = await Order.collection.insertMany(seedOrder)
  console.log("Orders Seeded");

  process.exit(0);
})

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedOrder();

//   await seedItem();
>>>>>>> a9762a9cd5918703320929cfc583b284f3c808aa

//   await seedUser();

//   process.exit(0);
// };
<<<<<<< HEAD

// seedAll();

=======

// seedAll();
>>>>>>> a9762a9cd5918703320929cfc583b284f3c808aa
