import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// set is used to change the state of any variable
const courseStore = (set) => ({
	courses: [], // initial state
	addCourse: (course) => {
		set((state) => ({
			courses: [course, ...state.courses]
		}))
	},
	removeCourse: (courseId) => {
		set((state) => ({
			courses: state.courses.filter((course) => course.id !== courseId)
		}))
	},
	toggleCourseStatus: (courseId) => {
		set((state) => ({
			courses: state.courses.map((course) => course.id === courseId ? {
				course, completed: !course.completed
			} : course)
		}))
	}
})

const useCourseStore = create(
	devtools(
		persist(courseStore, {
			name: "courses"
		})
	)
)

export default useCourseStore;

