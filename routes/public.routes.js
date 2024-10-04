const router = require("express").Router()
const public = require("./../controllers/public.controller")

router
    .get("/get-carousel", public.getCarousel)
    .get("/get-projects", public.getProjects)
    .get("/get-project-details/:id", public.getProjectDetails)
    .post("/add-enquery", public.AddEnqueryMessage)
module.exports = router