
<?php 

    header('Access-Control-Allow-Origin: *');


    $conexion =new mysqli("127.0.0.1","root","","cotizaciones") or die("not connected".mysqli_connect_error());
        

    if(isset($_POST['nombre'])) {
    $modelo =$_POST['modelo'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    $departamento =$_POST['departamento'];
    $ciudad =$_POST['ciudad'];
    $fecha = date('Y-m-d');


    $sql="SELECT * FROM `clientes` WHERE fecha='$fecha' ";
    $sql2="SELECT * FROM `clientes` WHERE nombre='$nombre' ";


    $result1 = mysqli_query($conexion, $sql);
    $result2 = mysqli_query($conexion, $sql2);
    
    if(mysqli_num_rows($result1)>0 && mysqli_num_rows($result2)>0) {
        echo '<script type="text/javascript">
        alert("Ya existe una cotizacion con esta fecha");
        window.location.href="http://localhost:3000";
        </script>';
    }
    else
    {
    $sql3="INSERT INTO `clientes` (`id`,`modelo`,`nombre`, `email`, `celular`, `departamento`, `ciudad`) VALUES (NULL, '$modelo','$nombre', '$email', '$celular', '$departamento', '$ciudad')";
    $query=mysqli_query($conexion,$sql3);
    if($query){
        echo'<script type="text/javascript">
        alert("Cotización enviada");
        window.location.href="http://localhost:3000";
        </script>';
    }else{
        echo mysqli_error($conexion);
    } 
    }

    $destino1 = "jaguilar@processoft.com.co";
    $destino2 = "jcastro@processoft.com.co";
    $destino3 = "mahernandez@processoft.com.co";

    $asunto = "Cotización";
    $header = "Enviado desde el formulario de cotización";
    $mensajeCompleto = "\n Nombre: " . $nombre . "\n" . "Email: " . $email . "\n" . "Télefono :" . $celular ;
    mail("$destino1,$destino2,$destino3", $asunto, $mensajeCompleto, $header);

    }

?>