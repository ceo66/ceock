<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: ceo
  Date: 2022/9/22
  Time: 15:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<s:fielderror/>
<s:form action="test/login" method="post">
    <s:textfield name="username" label="用户名"/>
    <s:textfield name="password" label="密码"/>

    <s:textfield name="logintime" label="登录日期"/>
    <s:submit value="登录"/>
</s:form>

</body>
</html>
