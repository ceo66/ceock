package com.example.creatsestruct;
import com.opensymphony.xwork2.ActionSupport;
import java.util.Date;
//该类即为用户信息类username
public class LoginAction6 extends ActionSupport {
    private String username;
    private String password;
    private Date logintime;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getLogintime() {
        return logintime;
    }

    public void setLogintime(Date logintime) {
        this.logintime = logintime;
    }
    public String execute()
    {
        System.out.println("username是"+username);
        System.out.println("password是"+password);
        System.out.println("logintime是"+logintime);
        return "success";
    }
}
