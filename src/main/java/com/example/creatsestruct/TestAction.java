package com.example.creatsestruct;

import com.opensymphony.xwork2.ActionChainResult;
import com.opensymphony.xwork2.ActionContext;
import org.apache.struts2.ServletActionContext;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public class TestAction {
    private String name;
    private  int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public String execute(){
        HttpServletRequest request= ServletActionContext.getRequest();
        request.setAttribute("req","requ");
        request.getSession().setAttribute("ses","session中的参数");
        Map sessionMap= ActionContext.getContext().getSession();
        sessionMap.put("sess","参数2");
        System.out.println(sessionMap.get("ses"));
        ServletContext application=ServletActionContext.getServletContext();
application.setAttribute("app","app中的参数");
return "success";
}
}