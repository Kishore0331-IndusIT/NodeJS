import java.sql.*;
class StudentInsertionApplication
{
    public static void main(String[] args) throws ClassNotFoundException,SQLException
    {
     String url= "jdbc:mysql://localhost:3306/vjit"; // Database details
        String username = "root"; // MySQL credentials
        String password = "vjit";
        Class.forName("com.mysql.cj.jdbc.Driver"); // Driver name
        Connection con = DriverManager.getConnection(url, username, password);
        System.out.println("Connection Established successfully"); 
		Statement st = con.createStatement();
        int c = st.executeUpdate("insert into students values(6708,'Rahul','HYD',20)");
        System.out.println(c + "\t Student Record inserted successfully");
        st.close();
        con.close();
    }
}