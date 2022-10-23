package com.example.creatsestruct;

import org.apache.struts2.util.StrutsTypeConverter;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;

public class BirthdayConverter extends StrutsTypeConverter {
    public static final DateFormat[] ACCEPT_DATE_FORMS={
            new SimpleDateFormat("yyyy-mm--dd"),
            new SimpleDateFormat("yyyy/mm/dd"),
            new SimpleDateFormat("yyyy.mm.dd"),
            new SimpleDateFormat("yyyy*mm*dd")
    };//支持日期转换的日期格式

    @Override
    public Object convertFromString(Map map, String[] strings, Class aClass) {
        String dataString=(String)strings[0];
        for(DateFormat format:ACCEPT_DATE_FORMS)
        {
            try{
                return format.parse(dataString);//遍历日期格式，进行转换
            } catch (ParseException e) {
                continue;
            }
        }
        return null;
    }

    @Override
    public String convertToString(Map map, Object o) {
        return new SimpleDateFormat("yyyy-mm-dd").format(o);//输出的格式是yyyy-mm-dd
    }
}
