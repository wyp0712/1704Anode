1. 处理get请求
2. 处理post请求
3. 处理静态资源


请求方式	              GET	                                  POST
参数位置 	         url的query中	                       一般在content中，query也可
参数大小	       受限于浏览器url大小，一般不超过32K             	  1G
服务器数据接收	         接收1次	                         根据数据大小，可分多次接收
适用场景（语义）	 从服务器端获取数据，不做增删改	          向服务器提交数据，如做增删改操作
安全性	          参数携带在url中，安全性低	                相对于GET请求，安全性更高


GET在浏览器回退时是无害的，而POST会再次提交请求。
GET产生的URL地址可以被Bookmark，而POST不可以。
GET请求会被浏览器主动cache，而POST不会，除非手动设置。
GET请求只能进行url编码，而POST支持多种编码方式。
GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
GET请求在URL中传送的参数是有长度限制的，而POST么有。
对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
GET参数通过URL传递，POST放在Request body中。
