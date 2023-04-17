import { useEffect } from "react"
import { useCoursesActions, useCoursesContext } from "../contexts/CoursesContext";

export const useCoursesList = () => {

    const {courses} = useCoursesContext();
    const {getCourses} = useCoursesActions();

    useEffect(() => {

        getCourses();

    }, []);

    return {
        courses
    }

}