import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

@WebServlet("/ContactForm")
public class ContactForm extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      //Set response content type
      response.setContentType("text/html");

      //store response variables
      String docType = "<!DOCTYPE html>\n";
      String title = "Contact";

      //get form data
      String name = request.getParameter("name");
      String email = request.getParameter("email");
      String message = request.getParameter("message");

      //processing


      //client response
      PrintWriter out = response.getWriter();
      out.println(docType +
         "<html>\n" +
            "<head><title>" + title + "</title></head>\n" +
          "<body>\n" +
            "<h1>EMAIL SENT</h1>\n" +
          "</body>" +
          "</html>"
        );
      }
    }
}