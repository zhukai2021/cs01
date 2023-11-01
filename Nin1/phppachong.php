<?php
$servername = "localhost";
$username = "r";
$password = "11223344";
$dbname = "jk";
$emp_NO=$_GET['NO'];
$emp_BIAO=$_GET['BIAO'];


// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}



$sql = "SELECT * FROM {$emp_BIAO} WHERE NO='{$emp_NO}'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo json_encode('{a'='".$row["WA"]."'".'}',JSON_UNESCAPED_UNICODE);
    }
} else {
    echo "0 结果";
}


$conn->close();
?>