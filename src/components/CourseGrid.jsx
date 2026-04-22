
import { COURSES } from "./data";
import CourseCard from "./CourseCard";

const CourseGrid = ({ onEnroll }) => (
  <section className="py-16 px-6">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
      {COURSES.map((course) => (
        <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
      ))}
    </div>
  </section>
);

export default CourseGrid;