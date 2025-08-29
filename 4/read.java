import java.sql.*;
import java.util.*;
class StudentsDetails 
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
		System.out.println("\n\nStudent Details: ");
		System.out.println("----------------------");
		ResultSet rs = st.executeQuery("select * from students");
        while(rs.next())
        { 
            
			System.out.println("Roll No:     " + rs.getInt(1));
            System.out.println("First Name:  " + rs.getString(2));
            System.out.println("Age :  " + rs.getInt(4)); 
            System.out.println("----------------------");     
        }
		
        rs.close();
        st.close();
        con.close(); 
    }
}