import { CourseOrNull, CourseRepository } from "../../models";


export async function getCourse(courseRepository: CourseRepository, courseId: string) : Promise<CourseOrNull> {
    return await courseRepository.get(courseId);
}