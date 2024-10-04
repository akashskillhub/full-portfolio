const asyncHandler = require("express-async-handler")
const Validator = require("validator")
const Carousel = require("../models/Carousel")
const Projects = require("../models/Projects")
const Enquery = require("../models/Enquery")
const { checkEmpty } = require("../utils/checkEmpty")
const sendEmail = require("../utils/email")
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



exports.AddEnqueryMessage = asyncHandler(async (req, res) => {
    const { name, email, mobile, message, company } = req.body
    const { isError, error } = checkEmpty({ name, email, mobile, message, company })
    if (isError) {
        return res.status(400).json({ message: "All Fields Required", error })
    }
    if (!Validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    if (!Validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "Invalid Mobile" })
    }
    await sendEmail({
        to: "skillhubitsolution.com",
        message: `comapny ${company} , email ${email}, mobile ${mobile} message ${message}`,
        subject: `New Enquery from ${company}`
    })
    await sendEmail({
        to: email,
        message: `Thank you for enquery. I will get in touch with you soon.`,
        subject: `Thank you for your intrest.`
    })
    await Enquery.create({ name, email, mobile, message, company })
    res.json({ message: "Enquery Message Added Success...!", })
})