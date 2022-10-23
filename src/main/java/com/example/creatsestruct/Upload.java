package com.example.creatsestruct;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import java.io.File;
import java.io.IOException;

public class Upload {
    private File picFile;
    private String picFileFileName;

    public File getPicFile() {
        return picFile;
    }

    public void setPicFile(File picFile) {
        this.picFile = picFile;
    }

    public String getPicFileFileName() {
        return picFileFileName;
    }

    public void setPicFileFileName(String picFileFileName) {
        this.picFileFileName = picFileFileName;
    }

    public String execute(){
        if(picFileFileName!=null)
        {
            try{
                String path= ServletActionContext.getServletContext().getRealPath("/images");
                File destFile=new File(path,picFileFileName);


                FileUtils.copyFile((File)picFile,destFile);


            }catch (IOException e)
            {
            }
            return "success";
        }
        return "fail";
    }

}
