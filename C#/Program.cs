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
                    Console.WriteLine("SECTION TWO");
                    break;
                default:
                    Console.WriteLine("please enter again");
                    break;
            }

            void insert()
            {
                string connectionString = "Server=PLACEHOLDER; Database=company;";
                SqlConnection connection = new SqlConnection(@connectionString);
                string query = "INSERT INTO Person (product_name, quantity, price, sale_date) VALUES('coke', 4, 3.1, 2008-11-11)";
                SqlCommand command = new SqlCommand(query, connection);

                try
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                    Console.WriteLine("Records inserted successfully");
                }
                catch
                {
                    Console.WriteLine(" somethign went wrong");
                }
                finally
                {
                    connection.Close();
                }
            }
        }

    }
}
