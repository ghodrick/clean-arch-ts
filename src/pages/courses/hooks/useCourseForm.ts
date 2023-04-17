import { useState } from "react";
import { FormStatus } from "../../../models/FormStatus";
import { useCoursesActions } from "../contexts/CoursesContext";



export function useCourseForm(): {
	formStatus: FormStatus;
	submitForm: (formData: { title: string; imageUrl: string }) => void;
	resetFormStatus: () => void;
} {
	const [formStatus, setFormStatus] = useState(FormStatus.Initial);
	const { create } = useCoursesActions();

	function submitForm({ title, imageUrl }: { title: string; imageUrl: string }) {
		setFormStatus(FormStatus.Loading);

		try {
			create({ title, imageUrl });
			setFormStatus(FormStatus.Success);
		} catch (e) {
			setFormStatus(FormStatus.Error);
		}
	}

	function resetFormStatus() {
		setFormStatus(FormStatus.Initial);
	}

	return {
		formStatus,
		submitForm,
		resetFormStatus,
	};
}