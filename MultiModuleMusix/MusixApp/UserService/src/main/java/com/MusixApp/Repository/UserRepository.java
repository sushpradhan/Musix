package com.MusixApp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MusixApp.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	public List<User> findByEmailAndPassword(String email, String password);
	public User findByEmail(String email);
}