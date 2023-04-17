import { Course, CourseRepository } from "../../models";

export async function getAllCourses(courseRepository: CourseRepository) : Promise<Course[]> {
    return await courseRepository.getAll();
}