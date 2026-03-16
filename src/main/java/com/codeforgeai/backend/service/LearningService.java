package com.codeforgeai.backend.service;

import com.codeforgeai.backend.model.Course;
import com.codeforgeai.backend.model.Lesson;
import java.util.List;

public interface LearningService {

    List<Course> getCourses();

    List<Lesson> getLessonsByCourse(Long courseId);

}