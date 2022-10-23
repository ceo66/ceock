package com.example.creatsestruct;

import beans.student;
import com.opensymphony.xwork2.ModelDriven;

//public class LoginAction {
   //动态调用
  /*  public String user(){
        System.out.println("执行user方法");
        return "usersuccess";
    }
    public String admin(){
        System.out.println("执行admin方法");
        return "adminsuccess";
    }

   */
    /*对象驱动
    private student student;

    public beans.student getStudent() {
        return student;
    }

    public void setStudent(beans.student student) {
        this.student = student;
    }

    public String execute(){
        System.out.println(student);
        return "success";
    }*、

     */
public  class LoginAction implements ModelDriven<student> {
    private student student;

    @Override
    public student getModel() {
       if(student==null)
       {
           student=new student();
       }
       return  student;
    }
    public  String execute(){
        System.out.println(student);
        return "success";
    }

}
