const express = require("express");

const router = express.Router();
// router.get("/people", (req, res, next) => {
//   // res.end("finish");
//   res.json({
//     posts: [
//       { name: "Yannick", age: "26" },
//       { name: "Sandra", age: "29" },
//     ],
//   });
// });

router
  .route("/people")
  .get((req, res, next) => {
    res.json({
      posts: [
        { name: "Yannick", age: "26" },
        { name: "Sandra", age: "29" },
      ],
    });
  })
  .post((req, res, next) => {
    const body = req.body;
    console.log(body);
    res.status(201).json({
      posts: [
        { name: "Anne_Helen", age: "20" },
        { name: "Erica", age: "42" },
      ],
    });
  })
  .delete((req, res, next) => {
    res.status(200).json({
      posts: [
        { name: "Paul", age: "218" },
        { name: "Rodrigo", age: "16" },
      ],
    });
  });

router.route("/people/:peopleId/:id").delete((req, res, next) => {
  const { peopleId, id } = req.params;
  console.log(peopleId);
  console.log(id);
  res.end();
});

module.exports = {
  router,
};
