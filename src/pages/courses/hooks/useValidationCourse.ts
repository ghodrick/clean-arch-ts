import { useEffect, useState } from "react";
import { isCourseImageUrlValid, isCourseTitleValid, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH } from "../models";


export const useValidationCourse = (initialState: any, formData: any) : {errors: any} =>  {

    const [errors, setErrors] = useState(initialState);

    useEffect(() => {
		const isTitleValid = isCourseTitleValid(formData.title);
		const isImageUrlValid = isCourseImageUrlValid(formData.imageUrl);

		setErrors({
			title: isTitleValid
				? ""
				: `Title must be between ${TITLE_MIN_LENGTH} and ${TITLE_MAX_LENGTH} characters`,
			imageUrl: isImageUrlValid ? "" : "Image url is not valid",
		});
	}, [formData]);

    return {
        errors
    }
}