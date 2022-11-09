# Week12_Assignment
routes:

/getAllCourses Verb: GET Argument: none \n
/getAllStudents Verb: GET Argument: none
/findStudent Verb: GET Argument: studentID
/findCourse Verb: GET Argument: courseInstructor
/addCourse Verb: POST Arguments: courseInstructor, courseCredits, courseID, courseName
/addStudent Verb: POST Arguments: fname, lname, studentID
/editStudentById Verb PUT Argument: id
/editStudentByFname Verb: PUT Arguments: fname, lname
/editCourseByCourseName Verb: PUT Arguments: courseName, courseInstructor
/deleteCourseById Verb: DELETE Argument: id
/removeStudentFromClasses Verb: DELETE Argument: studentID
