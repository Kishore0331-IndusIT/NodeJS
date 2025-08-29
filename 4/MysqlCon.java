// This code is for establishing connection with MySQL
// database and retrieving data
// from db Java Database connectivity

/*
 *1. import --->java.sql
 *2. load and register the driver ---> com.jdbc.
 *3. create connection
 *4. create a statement
 *5. execute the query
 *6. process the results
 *7. close
 */

import java.io.*;
import java.sql.*;

class MysqlCon
{
    public static void main(String[] args) throws Exception
    {
        String url= "jdbc:mysql://localhost:3306/vjit"; // Database details
        String username = "root"; // MySQL credentials
        String password = "vjit";
        Class.forName("com.mysql.cj.jdbc.Driver"); // Driver name
        Connection con = DriverManager.getConnection(url, username, password);
        System.out.println("Connection Established successfully");
        Statement st = con.createStatement();
        String sql = "CREATE TABLE STUDENTSS(Roll_No INTEGER NOT NULL,First_Name VARCHAR(255),Last_Name VARCHAR(255),Age INTEGER,PRIMARY KEY ( Roll_No ))"; 
        st.executeUpdate(sql);
        System.out.println("Created table in given database...");
        st.close(); // close statement
        con.close(); // close connection
        System.out.println("Connection Closed....");
    }
}
