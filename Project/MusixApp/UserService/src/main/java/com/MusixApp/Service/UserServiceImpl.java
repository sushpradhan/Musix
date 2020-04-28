package com.MusixApp.Service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.MusixApp.Model.User;
import com.MusixApp.Repository.UserRepository;

public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public boolean createUser(User user) {
		userRepository.save(user);
		return true;
	}
	
	@Override
	public List<User> loginById(String email, String password) {
		
		List<User> userList = userRepository.findByEmailAndPassword(email, password);
		
		
		if(!userList.isEmpty()) {
			return userList;
		}
		else
			return Collections.emptyList();
	}

	@Override
	public User getByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
}
