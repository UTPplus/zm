<?php
if (isset($_POST['email'])) {

     // if (isset($_POST['name'])) {
     //      $name = 'Name: ' . $_POST['name'];
     // } else {
     //      $name = '';
     // }

     if (isset($_POST['email'])) {
          $email = 'Email: ' . $_POST['email'];
     } else {
          $email = '';
     }

     // if (isset($_POST['tel'])) {
     //      $tel = 'Telephone: ' . $_POST['tel'];
     // } else {
     //      $tel = '';
     // }

     // if (isset($_POST['textarea'])) {
     //      $textarea = 'Message: ' . $_POST['textarea'];
     // } else {
     //      $textarea = '';
     // }

     

     // $all_msg = $name . "\r\n" . $email . "\r\n" . $textarea . "\r\n" . $tel. "\r\n";

     $to = 'nodirbeshimov1994@gmail.com';
     $subject = 'New Message';
     $headers = "From: noreply@tradeleaf.zpay.uz\r\n";
     $send_email = mail($to, $subject, $email, $headers);
     echo ($send_email) ? 'success' : 'error';
}