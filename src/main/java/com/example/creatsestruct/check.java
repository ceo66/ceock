package com.example.creatsestruct;

public class check {
    public String name;
    public int age;

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

    public String execute()
    {
        name="亲爱的"+name+"同学";
        return "success";
    }

}
