package com.codeforgeai.backend.service.impl;

import com.codeforgeai.backend.model.Course;
import com.codeforgeai.backend.model.Lesson;
import com.codeforgeai.backend.service.LearningService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LearningServiceImpl implements LearningService {

    @Override
    public List<Course> getCourses() {

        List<Course> courses = new ArrayList<>();

        courses.add(new Course(1L, "Java Basics", "Beginner"));
        courses.add(new Course(2L, "Spring Boot", "Intermediate"));
        courses.add(new Course(3L, "React", "Frontend"));
        courses.add(new Course(4L, "Full Stack Development", "Advanced"));

        return courses;
    }

    @Override
    public List<Lesson> getLessonsByCourse(Long courseId) {

        List<Lesson> lessons = new ArrayList<>();

        if(courseId == 1){
            lessons.add(new Lesson(1L,1L,"Variables","Java variables explanation"));
            lessons.add(new Lesson(2L,1L,"Loops","Java loops explanation"));
        }

        if(courseId == 2){
            lessons.add(new Lesson(3L,2L,"Spring Boot Intro","Spring Boot basics"));
            lessons.add(new Lesson(4L,2L,"REST APIs","Building APIs"));
        }

        return lessons;
    }
}