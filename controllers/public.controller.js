const asyncHandler = require("express-async-handler")
const Carousel = require("../models/Carousel")
const Projects = require("../models/Projects")
exports.getCarousel = asyncHandler(async (req, res) => {
    const result = await Carousel.find()
    res.json({ message: "Fetch Carousel Success", result })
})
exports.getProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find()
    res.json({ message: "Fetch Projects Success", result })
})
exports.getProjectDetails = asyncHandler(async (req, res) => {
    const result = await Projects.findById(req.params.id)
    res.json({ message: "Fetch Project Details Success", result })
})