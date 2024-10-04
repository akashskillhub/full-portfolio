const router = require("express").Router()
const { rateLimit } = require("express-rate-limit")
const public = require("./../controllers/public.controller")

router
    .get("/get-carousel", public.getCarousel)
    .get("/get-projects", public.getProjects)
    .get("/get-project-details/:id", public.getProjectDetails)
    .post("/add-enquery", rateLimit({ windowMs: 15 * 60 * 1000, limit: 1 }), public.AddEnqueryMessage)
module.exports = router