package com.example.creatsestruct;

import com.opensymphony.xwork2.ActionSupport;

import java.util.regex.Pattern;

public class LoginAction7 extends ActionSupport {
    private String name;
    private String mobile;
    private int  gender;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }
    //对所有方法都起效的validate()
//@Override
    public void validateDouserLogin()
{
    if(name==null||"".equals(name.trim()))
    {
        this.addFieldError("name","姓名不能为空");
    }
    if(mobile==null||"".equals(mobile.trim()))
    {
        this.addFieldError("moblie","电话号码不能为空");
    }
    else if(!Pattern.matches("^[134578]\\d{9}$",mobile))
    {
        this.addFieldError("mobile","电话号码格式错误");
    }
}
   public String execute()
   {
       System.out.println("execute");
       System.out.println("姓名是"+name);
       System.out.println("电话是"+mobile);
       return "success";
   }
   public String doUserLogin()
   {
       System.out.println("userLogin");
       System.out.println("姓名是"+name);
       System.out.println("电话是"+mobile);
       return "success";
   }


}

