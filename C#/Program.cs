using System;
using System.Data;
using System.Data.SqlClient;

namespace QA_Assessment
{
    class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Please make a choice:");
            Console.WriteLine("1. Data Entry");
            Console.WriteLine("2. Reports");

            string userinput = Console.ReadLine();

            switch (userinput)
            {
                case "1":
                    insert();
                    break;
                case "2":
                    select();
                    break;
                default:
                    Console.WriteLine("please enter again");
                    break;
            }

            void insert()
            {
                string insertquery = "INSERT INTO Person (product_name, quantity, price, sale_date) VALUES('coke', 4, 3.1, 2008-11-11)";

                sendCommand(insertquery);

                
            }

            void select()
            {
                string connectionString = "Server=PLACEHOLDER; Database=company;";
                SqlConnection connection = new SqlConnection(@connectionString);
                

                string userinput2;


                Console.WriteLine("Please make a choice: ");
                string userinput = Console.ReadLine();

                switch (userinput)
                {
                    case "1":
                        Console.WriteLine("Please enter a year: ");
                        userinput = Console.ReadLine();
                        string sqlyear = "select * from sales where year(sale_date) = " + userinput;
                        sendCommand(sqlyear);
                        break;
                    case "2":
                        Console.WriteLine("Please enter a year: ");
                        userinput = Console.ReadLine();
                        Console.WriteLine("Please enter a month: ");
                        userinput2 = Console.ReadLine();
                        string sqlyearmonth = "select * from sales where year(sale_date) = " + userinput + " AND month(sale_date) = " + userinput2;
                        sendCommand(sqlyearmonth);
                        break;
                    case "3":
                        Console.WriteLine("Please enter a year: ");
                        userinput = Console.ReadLine();
                        string sqlcountyear = "select count(sale_date) from sales where year(sale_date) = " + userinput;
                        sendCommand(sqlcountyear);
                        break;
                    case "4":
                        Console.WriteLine("Please enter a year: ");
                        userinput = Console.ReadLine();
                        Console.WriteLine("Please enter a month: ");
                        userinput2 = Console.ReadLine();
                        string sqlcountyearmonth = "select count(sale_date) from sales where year(sale_date) = " + userinput + " AND month(sale_date) = " + userinput2;
                        sendCommand(sqlcountyearmonth);
                        break;
                    default:
                        Console.WriteLine("please enter again");
                        break;
                }
            }

            SqlDataReader sendCommand(string query)
            {
                string connectionString = "Server=PLACEHOLDER; Database=company;";
                SqlConnection connection = new SqlConnection(@connectionString);
                SqlCommand command = new SqlCommand(query, connection);

                try
                {
                    connection.Open();
                    SqlDataReader reader =  command.ExecuteReader();
                    Console.WriteLine("command success");
                    return reader;
                }
                catch
                {
                    Console.WriteLine(" somethign went wrong");
                    return null;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

    }
}
