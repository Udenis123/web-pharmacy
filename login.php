<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'pharmacy');

if ($conn->connect_error) {
    throw new Exception("Connection Failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["Email"];
    $password = $_POST["password"];
    $userType = $_POST["userType"];

    // Validate user input and sanitize data as needed

    // Check user type and query the appropriate table in the database
    if ($userType == "C") {
        $table = "customer_signup";
        $redirectPage = "customer.html";
    } elseif ($userType == "T") {
        $table = "technicians";
        $redirectPage = "technician_dashboard.php";
    } elseif ($userType == "O") {
        $table = "owner_signup ";
        $redirectPage = "owner.html";
    } else {
        // Handle invalid user type
        echo "Invalid user type";
        exit;
    }
       // Check if the email and password match in the respective table
       $sql = "SELECT * FROM $table WHERE email = ? AND password = ?";
       $stmt = $conn->prepare($sql);
       $stmt->bind_param("ss", $email, $password);
       $stmt->execute();
       $result = $stmt->get_result();
       $user = $result->fetch_assoc();
       if ($user) {
        // Authentication successful, redirect to the appropriate dashboard
        header("Location: $redirectPage");
        exit;
    } else {
        // Authentication failed, display an error message
        echo "Invalid credentials. Please try again.";
    }
}
?>