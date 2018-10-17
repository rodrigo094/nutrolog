<?php
header('Content-Type: text/html; charset=UTF-8');

$nome = $_POST['name'];
$email = $_POST['email'];


require 'PHPMailerAutoload.php';

function sendMail($destino, $email)
{
	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	$mail->isSMTP();
	$mail->IsHTML(true);
	$mail->SMTPDebug = 0;
	$mail->Debugoutput = 'html';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = "testephp.econverse@gmail.com";
	$mail->Password = "Econverse123";
	$mail->setFrom('testephp.econverse@gmail.com', 'Contato - Site');
	$mail->addAddress($destino, 'Assunto - Newsletter');
	$mail->Subject = "Assunto - Newsletter";
	$mail->Body = $email;

	if (!$mail->send()) {
		return false;
	} else {
		return true;
	}
}
$ymsgJorgeAlex = "<div style=\"width:100%;\">

<p><b>Nome: </b> {$nome}</p>
<p><b>Email: </b> {$email}</p>

</div>";

$ysendJorgeAlex = sendMail('faleconosco@nutrolog.com', $ymsgJorgeAlex);

if ($ysendJorgeAlex != true) {
	$url = 'http://www.nutrolog.com?sucesso=false';
} else {
	$url = 'http://www.nutrolog.com?sucesso=true';
}

echo '<script type="text/javascript">
window.location.href = "' . $url . '";
</script>';

?>
