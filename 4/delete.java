import java.sql.*;
import java.util.*;
class StudentDeleteApplication 
{
    public static void main (String[]args) throws ClassNotFoundException, SQLException 
    {  
        String url= "jdbc:mysql://localhost:3306/vjit"; // Database details
        String username = "root"; // MySQL credentials
        String password = "vjit";
        Class.forName("com.mysql.cj.jdbc.Driver"); // Driver name
        Connection con = DriverManager.getConnection(url, username, password);
        System.out.println("Connection Established successfully"); 
		Statement st = con.createStatement();
		Scanner sc = new Scanner(System.in);  
        System.out.println("ENTER STUDENT NUMBER");   
        int rno = sc.nextInt();    
          
        int c = st.executeUpdate("delete from students where Roll_No =" + rno);
        if (c == 0)    
            System.out.println("Student data does not exist");  
        else
            System.out.println("Student data deleted successfully");
        st.close();   
        con.close(); 
    } 
}