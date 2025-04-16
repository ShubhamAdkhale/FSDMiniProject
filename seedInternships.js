const mongoose = require("mongoose");
const Internship = require("./models/internship"); // Adjust path if needed


mongoose.connect("mongodb://127.0.0.1:27017/internify", {
    serverSelectionTimeoutMS: 5000,  // Wait 5 seconds for MongoDB to respond
}).then(() => {
    console.log("✅ Connected to MongoDB");
    seedData();
}).catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
});

async function seedData() {
    try {
        await Internship.deleteMany({});
        console.log("🔄 Old internships deleted");

        await Internship.insertMany(seedInternships);
        console.log("✅ Seed data inserted");
    } catch (err) {
        console.error("❌ Error inserting internships:", err);
    } finally {
        mongoose.connection.close();
    }
}

// Internship Data
const internships = [
  { title: "Software Engineering Intern", location: "New York, USA", duration: "3 months" },
  { title: "Data Science Intern", location: "San Francisco, USA", duration: "6 months" },
  { title: "Marketing Intern", location: "London, UK", duration: "4 months" },
  { title: "Graphic Design Intern", location: "Berlin, Germany", duration: "5 months" },
  { title: "Cybersecurity Intern", location: "Toronto, Canada", duration: "3 months" },
  { title: "Frontend Developer Intern", location: "Sydney, Australia", duration: "6 months" },
  { title: "Backend Developer Intern", location: "Bangalore, India", duration: "5 months" },
  { title: "UI/UX Design Intern", location: "Amsterdam, Netherlands", duration: "4 months" },
  { title: "AI Research Intern", location: "Tokyo, Japan", duration: "6 months" },
  { title: "Finance Analyst Intern", location: "Chicago, USA", duration: "3 months" },
  { title: "Content Writing Intern", location: "Remote", duration: "2 months" },
  { title: "HR Intern", location: "Los Angeles, USA", duration: "3 months" },
  { title: "Product Management Intern", location: "Paris, France", duration: "5 months" },
  { title: "Cloud Computing Intern", location: "Seattle, USA", duration: "6 months" },
  { title: "Game Development Intern", location: "Stockholm, Sweden", duration: "4 months" }
];

// Insert Data
const seedDB = async () => {
  try {
    await Internship.deleteMany(); // Clear existing data
    await Internship.insertMany(internships);
    console.log("✅ Successfully inserted internships!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error inserting internships:", error);
    mongoose.connection.close();
  }
};

seedDB();
