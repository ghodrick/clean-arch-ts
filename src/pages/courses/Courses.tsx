import { BotonBorrarCursos } from "./components";
import { CoursesList } from "./components/CourseList/CoursesList";
import { CreateCourseForm } from "./components/CreateCourseForm/CreateCourseForm";
import { CoursesContextProvider } from "./contexts/CoursesContext";
import { createLocalStorageCourseRepository } from "./infrastructure/LocalStorageCourseRepository";


export default function Courses() {

  const repository = createLocalStorageCourseRepository();

  return (
    <CoursesContextProvider repository={repository}>
			<div className="App bg-gray-50">
        <div className="min-h-screen max-w-5xl flex flex-col justify-center items-center mx-auto pt-20">
          <div className="w-full">
            <h1 className="text-slate-800 tracking-tighter text-center font-bold text-4xl mb-8">
              CleanArch<span className="text-cyan-400">TS</span>
            </h1>
            <div className="bg-white rounded-lg px-8 py-8 shadow-md">
              <div className="flex justify-end mb-16">
                <BotonBorrarCursos />
              </div>
              <div className="mb-20">
                <CreateCourseForm />
              </div>
              <CoursesList />
            </div>
          </div>
        </div>
			</div>
    </CoursesContextProvider>
  )
}
