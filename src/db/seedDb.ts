import Test from "../models/Test.js";

export const seedDb = async () => {
  await seedTests();
};

const seedTests = async () => {
  await Test.truncate();
  await Test.create({
    name: "TestName-" + Math.floor(Math.random() * 10 ** 5),
  });
};
