package com.codeforgeai.backend.service;

import java.util.List;
import com.codeforgeai.backend.entity.User;

public interface UserService {

    User saveUser(User user);

    List<User> getAllUsers();

}