package com.codeforgeai.backend.model;

public class Course {

    private Long id;
    private String title;
    private String level;

    public Course() {
    }

    public Course(Long id, String title, String level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}