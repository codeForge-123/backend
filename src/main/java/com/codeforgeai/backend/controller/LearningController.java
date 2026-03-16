package com.codeforgeai.backend.controller;

import com.codeforgeai.backend.model.Course;
import com.codeforgeai.backend.model.Lesson;
import com.codeforgeai.backend.service.LearningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/learning")
public class LearningController {

    @Autowired
    private LearningService learningService;

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return learningService.getCourses();
    }

    @GetMapping("/lessons/{courseId}")
    public List<Lesson> getLessons(@PathVariable Long courseId){
        return learningService.getLessonsByCourse(courseId);
    }
}