import { useCoursesActions } from "../../contexts/CoursesContext";
import {memo} from 'react';

const BotonBorrarCursos = memo(() => {

    const { deleteCourses } = useCoursesActions();

    return ( 
        <button type="button" onClick={deleteCourses} className="bg-red-600 hover:bg-red-700 transition-all active:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
            Borrar todos los cursos
        </button>
     );
})
 
export default BotonBorrarCursos;