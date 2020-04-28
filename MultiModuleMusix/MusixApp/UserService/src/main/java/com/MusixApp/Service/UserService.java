package com.MusixApp.Service;

import java.util.List;

import com.MusixApp.Model.User;

public interface UserService {
public boolean createUser(User user);
	
	public List<User> loginById(String email, String password);
	public User getByEmail(String email);
}
