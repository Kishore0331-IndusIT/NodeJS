import java.sql.*;
class UpdateStudentApplication 
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
        int rows = st.executeUpdate("update students set First_Name = 'Rahul Dravid' where Roll_No=6703");
        System.out.println(rows + " row modified");    
        st.close();    
        con.close();
    } 
}