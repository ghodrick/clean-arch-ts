import React, { useContext, useEffect, useState } from 'react'
import { Course, CourseRepository } from '../models';
import { v4 as uuidv4 } from 'uuid';
import { createCourse, deleteAllCourses, getAllCourses } from '../application';
import Swal from 'sweetalert2';

export interface ContextState {
	courses: { id: string; title: string; imageUrl: string }[];
}

export const CoursesContext = React.createContext({} as ContextState);
export const CoursesDispatcher = React.createContext({} as any);

export const CoursesContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: CourseRepository }>) => {
	const [courses, setCourses] = useState<Course[]>([]);


	return (
		<CoursesContext.Provider value={{ courses }}>
			<CoursesDispatcher.Provider value={{setCourses, repository}}>
				{children}
			</CoursesDispatcher.Provider>
		</CoursesContext.Provider>
	);
};

export const useCoursesContext = () => {

    const context = useContext(CoursesContext);

    return context;
};

export const useCoursesActions = () => {

	const {setCourses, repository} = useContext(CoursesDispatcher);

	function create({ title, imageUrl }: { title: string; imageUrl: string }) {
		const id = (uuidv4 as () => string)(); // TODO: check uuid types

		createCourse(repository, { id, title, imageUrl });

		getCourses();
	}

	async function getCourses() {
		const courses = await getAllCourses(repository);

		setCourses(courses);
	}

	function deleteCourses() {
		
		Swal.fire({
			title: '¿Borrar todos los cursos?',
			text: "No podrás revertir esta acción",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Borrar todo'
		}).then((result) => {

			if (result.isConfirmed) 
			{
				deleteAllCourses(repository);

				getCourses();
			}

		})

	}

	return {
		create,
		deleteCourses,
		getCourses
	}

	

}