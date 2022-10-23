<%--
  Created by IntelliJ IDEA.
  User: ceo
  Date: 2022/9/24
  Time: 19:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
欢迎你，下图为你的头像<br>

<img id="picture" src="" alt="图片加载失败"   width="200sp" height="200sp">
</body>
<script>


  var file="${pageContext.request.contextPath}"+ "/images/"+"${picFileFileName}";

   document.getElementById("picture").src=file;

</script>
</html>
