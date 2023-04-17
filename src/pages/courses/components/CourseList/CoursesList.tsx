
import { CourseCard } from "../CourseCard/CourseCard";
import styles from "./CoursesList.module.scss";
import {memo} from 'react'
import { useCoursesList } from "../../hooks";

export const CoursesList = memo(() => {

	const { courses } = useCoursesList();

	return (
		<section>
			<h2 className="text-left text-lg text-slate-900 font-bold mb-6">Current courses</h2>
			<div className={styles.list}>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</section>
	);
});