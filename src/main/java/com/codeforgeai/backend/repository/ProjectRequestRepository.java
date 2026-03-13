package com.codeforgeai.backend.repository;

import com.codeforgeai.backend.entity.ProjectRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRequestRepository extends JpaRepository<ProjectRequest, Long> {
}