<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: ceo
  Date: 2022/9/24
  Time: 19:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
账号：<input type="text" name="id"><br>
密码：<input type="password" name="password"><br>
默认头像<br>
<img id="picture1" src="images/A.PNG" width="200sp" height="200sp">
<br>
选择是否需要上传头像：<br>
<s:form action="test/fileUpload" method="post" enctype="multipart/form-data">
    <s:file name="picFile" label="image"/>
    <s:submit value="上传"/>
</s:form>

</body>
</html>
