import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

const Index = ({ courses }) => {
  //   const [courses, setCourses] = useState([]);

  //   useEffect(() => {
  //     const fetchCourses = async () => {
  //       const { data } = await axios.get("/api/courses");
  //       setCourses(data);
  //     };
  //     fetchCourses();
  //   }, []);

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Geeks Paradise
        <hr />
        <h4 className="white">We believe in Free Education for All</h4>
      </h1>

      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4 hi">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
