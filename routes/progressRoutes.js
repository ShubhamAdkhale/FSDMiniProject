const express = require("express");
const router = express.Router();
const Application = require("../models/application"); // Your Application model

// This will run periodically or can be called manually to update progress
router.post("/:id/progress/update", async (req, res) => {
    try {
        const application = await Application.findById(req.params.id).populate('progress');
        if (!application) {
            return res.status(404).json({ message: "Application not found" });
        }

        // Ensure progress tracking is already initialized
        let progress = application.progress;

        // If progress does not exist, initialize it
        if (!progress) {
            return res.status(400).json({ message: "Progress not initialized for this application" });
        }

        const currentDate = new Date();
        const startDate = new Date(progress.startDate);
        const endDate = new Date(progress.endDate);

        // Check if the internship has started but not finished
        if (currentDate >= startDate && currentDate <= endDate) {
            // Increment the daysSpent field by 1
            const daysWorked = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
            progress.daysSpent = daysWorked;

            // Update the progress entry
            progress.lastUpdated = currentDate;

            // Save the updated application with progress
            await progress.save(); // Save progress document

            res.status(200).json({
                message: "Progress updated successfully",
                progress: progress,
            });
        } else {
            res.status(400).json({ message: "Internship not in progress or already completed" });
        }
    } catch (error) {
        console.error("❌ Error updating progress:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

module.exports = router;
