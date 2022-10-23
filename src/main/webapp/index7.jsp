<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: ceo
  Date: 2022/9/24
  Time: 15:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<s:fielderror/>
<form action="test/login.action" method="post">
    姓名：<input type="text" name="name"/><br>
    电话：<input type="text" name="mobile"/><br>
    性别：<input type="text" name="gender"/><br>
    <input type="submit" value="login">
</form>

<form action="test/login-doUserLogin.action" method="post">
    姓名：<input type="text" name="name"/><br>
    电话：<input type="text" name="mobile"/><br>
    性别：<input type="text" name="gender"/><br>
    <input type="submit" value="userlogin">
</form>

</body>
</html>
