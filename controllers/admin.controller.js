const asyncHanlder = require("express-async-handler")
const { checkEmpty } = require("../utils/checkEmpty")
const Technology = require("../models/Technology")
exports.addTechnology = asyncHanlder(async (req, res) => {
    const { name, category } = req.body
    const { isError, error } = checkEmpty({ name, category })
    if (isError) {
        return res.status(400).json({ message: "All Feild Required", error })
    }
    await Technology.create({ name, category })
    res.json({ message: "Technology Create Success" })
})
exports.getTechnology = asyncHanlder(async (req, res) => {
    const result = await Technology.find66()
    res.json({ message: "Technology Fetch Success", result })
})
exports.updateTechnology = asyncHanlder(async (req, res) => {
    const { id } = req.params
    await Technology.findByIdAndUpdate(id, req.body)
    res.json({ message: "Technology Update Success" })
})
exports.deleteTechnology = asyncHanlder(async (req, res) => {
    const { id } = req.params
    await Technology.findByIdAndDelete(id)
    res.json({ message: "Technology Delete Success" })
}) 