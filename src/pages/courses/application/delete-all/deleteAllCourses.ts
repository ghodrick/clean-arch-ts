import { CourseRepository } from "../../models";

export function deleteAllCourses(courseRepository: CourseRepository): Promise<boolean> {
    return courseRepository.deleteAll();
}