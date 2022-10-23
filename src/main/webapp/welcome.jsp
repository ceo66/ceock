<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: ceo
  Date: 2022/9/15
  Time: 19:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
welcome structs
<s:debug/><br>

<!--利用EL表达式取值
姓名是：${name}<br>
年龄是：${age}<br>
--在struts的VS中的property空间取值
姓名是：<s:property value="name"/><br>
年龄是:<s:property value="student.age"/>
-->
req=${requestScope.req}<br>
ses=${sessionScope.ses}<br>
app=${applicationScope.app}<br>
</body>
</html>
