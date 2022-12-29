const express = require("express");
const router = express.Router();

const {
    getAllProjects,
    getAllProjectsTesting,
} = require("../controlers/projects");

router.route("/").get(getAllProjects);
router.route("/testing").get(getAllProjectsTesting);

module.exports = router;



