const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, description, link, userId } = req.body;
    try {
        const project = new Project({ title, description, link, user: userId });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const projects = await Project.find({ user: req.params.userId });
        res.json(projects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;