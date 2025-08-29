

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloForm
 */
@WebServlet("/HelloForm")
public class HelloForm extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		      throws ServletException, IOException {
		      
		      // Create cookies for first and last names.      
		      Cookie firstName = new Cookie("first_name", request.getParameter("first_name"));
		      Cookie lastName = new Cookie("last_name", request.getParameter("last_name"));

		      // Set expiry date after 24 Hrs for both the cookies.
		      firstName.setMaxAge(60*60*24);
		      lastName.setMaxAge(60*60*24);

		      // Add both the cookies in the response header.
		      response.addCookie( firstName );
		      response.addCookie( lastName );
		      Cookie cookie = null;
		      Cookie[] cookies = null;

		      // Get an array of Cookies associated with this domain
		      cookies = request.getCookies();

		      // Set response content type
		      response.setContentType("text/html");

		      PrintWriter out = response.getWriter();
		      String title = "Reading Cookies Example";
		      String docType =
		         "<!doctype html public \"-//w3c//dtd html 4.0 " +
		         "transitional//en\">\n";
		         
		      out.println(docType +
		         "<html>\n" +
		         "<head><title>" + title + "</title></head>\n" +
		         "<body bgcolor = \"#f0f0f0\">\n" );

		      if( cookies != null ) {
		         out.println("<h2> Found Cookies Name and Value</h2>");
out.println("<table border=\"1\">\r\n" + "<tr><th>Cookie Name</th><th>Cookie Value</th></tr>");
		         for (int i = 0; i < cookies.length; i++) {
		            cookie = cookies[i];
		            out.print("<tr><td> " + cookie.getName( ) +"</td>");
		            out.print("<td> " + cookie.getValue( ) + " </td><br/>");
		         }
		         out.println("</table>");
		      } else {
		         out.println("<h2>No cookies founds</h2>");
		      }
		      out.println("</body>");
		      out.println("</html>");
		 
	}
}
