package com.springreactfullstack.springreactfullstack.repository;

import com.springreactfullstack.springreactfullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> { //datatype of the User is Long
//JpaRepo Methods
}
