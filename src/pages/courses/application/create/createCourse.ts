import { Course, CourseRepository, ensureCourseIsValid } from "../../models";


export function createCourse(courseRepository: CourseRepository, course: Course): void {

    ensureCourseIsValid(course);

    courseRepository.save(course);
}