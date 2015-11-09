<?php

    
//contato [POST]
if ($_SERVER["REQUEST_METHOD"] === "POST")
{ 
	$json = file_get_contents("php://input");
	$jsonIterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator(json_decode($json, TRUE)),
    RecursiveIteratorIterator::SELF_FIRST);

 	$str = array();
 	$str[] = "Mensagem enviada pelo site: <br />";
	foreach ($jsonIterator as $key => $val) {
	    if(is_array($val)) {
	        $str[] = "<b>$key:</b> <br />";
	    } else {
	        $str[] =  "<b>$key:</b> $val <br />";
	    }
	}
 	$body = implode($str);
	echo $body;
 
	require("./phpmailer/class.phpmailer.php");

	// Inicia a classe PHPMailer
	$mail = new PHPMailer();
	$sender = "usabitapps@gmail.com"; 
	$para = "contato@usabit.com.br"; 

	// Define os dados do servidor e tipo de conexão
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsSMTP();
	$mail->Host = "smtp.gmail.com"; // Endereço do servidor SMTP (caso queira utilizar a autenticação, utilize o host smtp.seudomínio.com.br)
	$mail->SMTPAuth = true; // Usar autenticação SMTP (obrigatório para smtp.seudomínio.com.br)
	$mail->Username = $sender; // Usuário do servidor SMTP
	$mail->Password = "20usabit15"; // Senha do servidor SMTP
	$mail->Port       = 465;   
	$mail->SMTPSecure = "ssl";
	$mail->SMTPDebug  = 1;


	// Define o remetente
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->From = $para; // Seu e-mail
	$mail->Sender = $sender; // Seu e-mail
	$mail->FromName = "Usabit"; // Seu nome
	 
	// Define os destinatário(s)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->AddAddress($para);
	 
	// Define os dados técnicos da Mensagem
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
	 
	// Define a mensagem (Texto e Assunto)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->Subject  = "[Usabit] Contato - via web site"; // Assunto da mensagem
	$mail->Body = $body;
	 

	// Envia o e-mail
	$enviado = $mail->Send();
	 
	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();
	$mail->ClearAttachments();
	 
	// Exibe uma mensagem de resultado
	if ($enviado) {
		//echo "true";
		http_response_code(200);
	} else {
		echo "Mailer Error: " . $mail->ErrorInfo;
		//echo "false";
		http_response_code(500);
	}
 
}
?>