package com.alysson.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alysson.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
        
}
