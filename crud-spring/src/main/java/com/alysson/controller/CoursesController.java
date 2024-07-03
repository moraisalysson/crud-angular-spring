package com.alysson.controller;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alysson.model.Course;
import com.alysson.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController //indica que essa classe vai ter um endpoint
@RequestMapping("/api/courses") //endpoint
@AllArgsConstructor
public class CoursesController {
    
    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

    @Bean
    CommandLineRunner initDataBase(CourseRepository courseRepository) {
        return args -> {
            courseRepository.deleteAll();

            Course c = new Course();
            c.setName("Angular com Spring");
            c.setCategory("front-end");

            courseRepository.save(c);
        };
    }
}
