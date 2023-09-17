<?php
$name = $_POST["customer-name"];
$email = $_POST["customer-email"];
$phone = $_POST["customer-phone"];
$province = $_POST["customer-province"];
$district = $_POST["customer-district"];
$sector = $_POST["customer-sector"];
$password = $_POST["customer-password"];
$repassword = $_POST["customer-repassword"];

try {
    $conn = new mysqli('localhost', 'root', '', 'pharmacy');

    if ($conn->connect_error) {
        throw new Exception("Connection Failed: " . $conn->connect_error);
    }
    
    // Check if the email already exists in the database
    $check_sql = "SELECT email FROM customer_signup WHERE email = ?";
    $check_stmt = $conn->prepare($check_sql);
    $check_stmt->bind_param("s", $email);
    $check_stmt->execute();
    $check_result = $check_stmt->get_result();

    if ($check_result->num_rows > 0) {
        // Email already exists, display an error message
        echo  "Email already used";
    } else {
        $sql = "INSERT INTO customer_signup (name, email, phone, province, district, sector, password, repassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        // Bind parameters to the prepared statement
        $stmt->bind_param("ssssssss", $name, $email, $phone, $province, $district, $sector, $password, $repassword);

        // Execute the prepared statement
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo 'Data inserted';
        } else {
            echo 'Error: ' . mysqli_error($conn); // Display the database error message
        }

        $stmt->close();
    }

    $check_stmt->close();
    $conn->close();
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage(); // Display the caught exception message
}
?>
