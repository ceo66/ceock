<%--
  Created by IntelliJ IDEA.
  User: ceo
  Date: 2022/9/15
  Time: 15:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="test/user" method="post">
    <input type="submit" value="user login">
</form>

<form action="test/admin" method="post">
    <input type="submit" value="admin login">
</form>

<form action="test/login!user" method="post">
    <input type="submit" value="!user">
</form>

</body>
</html>
