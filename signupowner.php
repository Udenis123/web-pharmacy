<?php
$name = $_POST["owner-name"];
$email = $_POST["owner-email"];
$phone = $_POST["owner-phone"];
$pharmacy_name = $_POST["owner-pharmacy-name"];
$province = $_POST["owner-province"];
$district = $_POST["owner-district"];
$sector = $_POST["owner-sector"];
$password = $_POST["owner-password"];
$repassword = $_POST["owner-repassword"];

try {
    $conn = new mysqli('localhost', 'root', '', 'pharmacy');

    if ($conn->connect_error) {
        throw new Exception("Connection Failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO owner_signup (name, email, phone, pharmacy_name, province, district, sector, password, repassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    // Bind parameters to the prepared statement
    $stmt->bind_param("sssssssss", $name, $email, $phone, $pharmacy_name, $province, $district, $sector, $password, $repassword);

    // Execute the prepared statement
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo 'Data inserted';
    } else {
        echo 'Error: ' . mysqli_error($conn); // Display the database error message
    }

    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage(); // Display the caught exception message
}
?>
