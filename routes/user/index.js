const { deleteUser, modifyUser } = require("./controller");

const router = require("express").Router();

router.put("/:id", modifyUser);

router.delete("/:id", deleteUser);

module.exports = router;
