import connectDB from '../../../backend/db';
import User from '../../../backend/models/user';
import Course from '../../../backend/models/course';

export default async function handler(req, res) {
    await connectDB();

    try {
        const courses = [
            {
                name: "CSC 123",
                description: "Operating Systems",
            },
            {
                name: "CSC 456",
                description: "Software Engineering",
            },
            {
                name: "CSC 789",
                description: "Data Structures And Algorithms - 2",
            },
        ];

        const user = await User.findOne();

        for (const courseData of courses) {
            let course = await Course.findOne({ name: courseData.name });

            if (!course) {
                course = new Course(courseData);
                course.students.push(user._id); // Adding the user to the course

                await course.save();
            }
        }
        const allCourses = await Course.find(); // Fetch all courses after potentially adding new ones

        res.status(200).json(allCourses); // Return the courses to the frontend

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding dummy courses." });
    }
}
