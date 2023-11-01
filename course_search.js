
let courses = [
    {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
    },
    {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
    },
    {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
    },
  ];



// What classes meet in "Classroom 1"?

// When does the PROG200 course start?
function findCourseStart(courses, courseId) {
    // loop through the course object
    for (let i = 0; i < courses.length; i++) {
        // if course object.courseId = PROG200
      if (courses[i].CourseId === courseId) {
        // return that objects start date
        return courses[i].StartDate;
      }
    }
  }
  
  let startDate = findCourseStart(courses, "PROG200");
  
  console.log(`The PROG200 course starts on: ${startDate}`);
  

  // What is the title of the PROJ500 course?
  function findTitle(courses, courseId){
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId === courseId) {
          return courses[i].Title;
        }
      }
  }
  let title = findTitle (courses, "PROG200");
  console.log(`The title of the PROG200 course is: ${title}`);


  // What are the titles of the courses that cost $50 or less?
  function findCoursesUnder50 (courses, cost){
    let coursesUnderLimit =[]
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].Fee === cost) {
          coursesUnderLimit.push(courses[i].Title)
        }
      }
      return coursesUnderLimit
  }
  let courseTitlesUnder50 = findCoursesUnder50 (courses, "50.00");
  console.log(`The title of the courses that cost $50 or less: ${courseTitlesUnder50} `);